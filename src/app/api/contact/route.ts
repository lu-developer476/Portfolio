import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // 1️⃣ Guardar en Firestore
    await db.collection("contact_messages").add({
      ...data,
      createdAt: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") ?? null
    });

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "lucasmontenegroburgos@gmail.com",
      subject: `Notificaciones del Portfolio — ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2>📩 Nuevo mensaje recibido</h2>
          <hr />
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="background:#f4f4f4;padding:12px;border-radius:6px;">
            ${data.message}
          </p>
          <hr />
          <p style="font-size:12px;color:#666;">
            Enviado desde tu portfolio en producción.
          </p>
        </div>
      `
    });

    // 3️⃣ Responder OK
    return NextResponse.json({ ok: true });

  } catch (err: any) {
    const message =
      err?.name === "ZodError"
        ? "Datos inválidos. Revisá nombre/email/mensaje."
        : err?.message ?? "Error inesperado";

    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
