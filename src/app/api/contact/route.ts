import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { Resend } from "resend";
import { transporter } from "@/lib/mailer";

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

    // 2️⃣ Mail informativo para administrador
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "lucasmontenegroburgos@gmail.com",
      reply_to: data.email,
      subject: `📩 Notificación`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2>Nuevo mensaje</h2>
          <hr />
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="background:#f4f4f4;padding:12px;border-radius:6px;">
            ${data.message}
          </p>
          <hr />
          <p style="font-size:12px;color:#666;">
            Emitido desde tu 💼
          </p>
        </div>
      `
    });

    // 3️⃣ Auto-respuesta al usuario
try {
  const mailResponse = await transporter.sendMail({
    from: `"Lucas Montenegro" <${process.env.GMAIL_USER}>`,
    to: data.email,
    subject: "¡Muchas gracias por tu mensaje! 🦾",
     html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2>Hola ${data.name},</h2>
          <p>Me alegra que visitaras mi sitio personal. ¡Espero hayas disfrutado de mis trabajos!</p>
          <p>⏱︎ En breve leeré tu consulta y te estaré contactando.</p>
          <hr />
          <p style="font-size:14px;">
            <strong>Tu mensaje:</strong>
          </p>
          <p style="background:#f4f4f4;padding:12px;border-radius:6px;">
            ${data.message}
          </p>
          <hr />
          <p style="font-size:12px;color:#666;">
            ✔️ Aviso automático de validación.
          </p>
        </div>
      `
    });

  console.log("Auto reply sent:", mailResponse.messageId);

} catch (mailErr) {
  console.error("Auto reply failed:", mailErr);
}
    
    // 4️⃣ Respuesta OK
    return NextResponse.json({ ok: true });

  } catch (err: any) {
    const message =
      err?.name === "ZodError"
        ? "Datos inválidos. Revisá nombre/email/mensaje."
        : err?.message ?? "Error inesperado";

    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
