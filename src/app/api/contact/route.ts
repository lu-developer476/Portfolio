import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminDb } from "@/lib/firebaseAdmin";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  message: z.string().min(10).max(2000)
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = schema.parse(json);

    const db = getAdminDb();
    await db.collection("contact_messages").add({
      ...data,
      createdAt: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") ?? null
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const message =
      err?.name === "ZodError"
        ? "Datos inválidos. Revisá nombre/email/mensaje."
        : err?.message ?? "Error inesperado";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
