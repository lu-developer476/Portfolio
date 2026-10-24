import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminDb } from "@/lib/firebaseAdmin";

export const runtime = "nodejs";

const projectSlugSchema = z.string().min(1).max(80).regex(/^[a-zA-Z0-9-]+$/);
const visitorIdSchema = z.string().uuid();

const recommendationSchema = z.object({
  action: z.literal("recommend"),
  projectSlug: projectSlugSchema,
  visitorId: visitorIdSchema
});

const commentSchema = z.object({
  action: z.literal("comment"),
  projectSlug: projectSlugSchema,
  name: z.string().trim().min(2).max(60),
  rating: z.number().int().min(1).max(5),
  message: z.string().trim().min(8).max(800),
  website: z.string().max(0).optional().default("")
});

export async function GET(request: Request) {
  const projectSlug = new URL(request.url).searchParams.get("project");
  const parsedSlug = projectSlugSchema.safeParse(projectSlug);
  if (!parsedSlug.success) {
    return NextResponse.json({ error: "Invalid project." }, { status: 400 });
  }

  try {
    const db = getAdminDb();
    const [recommendations, commentSnapshot] = await Promise.all([
      db.collection("project_recommendations").where("projectSlug", "==", parsedSlug.data).get(),
      db.collection("project_comments").where("projectSlug", "==", parsedSlug.data).get()
    ]);

    const comments = commentSnapshot.docs
      .map((doc) => ({
        id: doc.id,
        name: String(doc.data().name ?? "Visitante"),
        rating: Number(doc.data().rating ?? 0),
        message: String(doc.data().message ?? ""),
        createdAt: Number(doc.data().createdAt ?? 0),
        status: String(doc.data().status ?? "pending")
      }))
      .filter((comment) => comment.status === "approved" && comment.rating >= 1 && comment.rating <= 5)
      .map(({ status: _status, ...comment }) => comment);

    const ratingAverage = comments.length
      ? Math.round((comments.reduce((sum, comment) => sum + comment.rating, 0) / comments.length) * 10) / 10
      : null;

    return NextResponse.json({
      recommendationCount: recommendations.size,
      ratingAverage,
      ratingsCount: comments.length,
      comments
    }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Project feedback read failed:", error);
    return NextResponse.json({ error: "Project feedback is temporarily unavailable." }, { status: 503 });
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const action = z.object({ action: z.enum(["recommend", "comment"]) }).safeParse(body);
  if (!action.success) {
    return NextResponse.json({ error: "Unknown feedback action." }, { status: 400 });
  }

  try {
    const db = getAdminDb();

    if (action.data.action === "recommend") {
      const parsed = recommendationSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json({ error: "Invalid recommendation data." }, { status: 400 });
      }

      const { projectSlug, visitorId } = parsed.data;
      const recommendationId = `${projectSlug}__${visitorId}`;
      try {
        await db.collection("project_recommendations").doc(recommendationId).create({
          projectSlug,
          createdAt: Date.now()
        });
      } catch (error: any) {
        if (error?.code === 6 || error?.code === "already-exists") {
          return NextResponse.json({ error: "You have already recommended this project from this browser." }, { status: 409 });
        }
        throw error;
      }

      return NextResponse.json({ ok: true }, { status: 201 });
    }

    const parsed = commentSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Check the name, rating, and comment. Comments must be 8–800 characters." }, { status: 400 });
    }
    if (parsed.data.website) {
      return NextResponse.json({ ok: true, pendingModeration: true }, { status: 202 });
    }

    await db.collection("project_comments").add({
      projectSlug: parsed.data.projectSlug,
      name: parsed.data.name,
      rating: parsed.data.rating,
      message: parsed.data.message,
      status: "pending",
      createdAt: Date.now()
    });

    return NextResponse.json({ ok: true, pendingModeration: true }, { status: 201 });
  } catch (error) {
    console.error("Project feedback submission failed:", error);
    return NextResponse.json({ error: "Project feedback is temporarily unavailable." }, { status: 503 });
  }
}
