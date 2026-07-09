import { NextResponse } from "next/server";
import { z } from "zod";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { Resend } from "resend";
import { transporter } from "@/lib/mailer";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  message: z.string().min(10).max(2000)
});

function requireEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name} env variable`);
  }

  return value;
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = schema.parse(json);
    const gmailUser = requireEnv("GMAIL_USER");
    const resend = new Resend(requireEnv("RESEND_API_KEY"));
    const db = getAdminDb();

    // ✅ Sanitización básica HTML
    const safeMessage = data.message
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // ------------------------------------------------
    // 1️⃣ Guardar en Firestore
    // ------------------------------------------------
    await db.collection("contact_messages").add({
      name: data.name,
      email: data.email,
      message: safeMessage,
      createdAt: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") ?? null
    });

    // ------------------------------------------------
    // 2️⃣ Mail Admin (Resend)
    // ------------------------------------------------
    await resend.emails.send({
      from: "Portfolio Online <onboarding@resend.dev>",
      to: "lucasmontenegroburgos@gmail.com",
      reply_to: data.email,
      subject: "📩 Notificación",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2>Nuevo mensaje recibido</h2>
          <hr />
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="background:#f4f4f4;padding:12px;border-radius:6px;">
            ${safeMessage}
          </p>
          <hr />
          <p style="font-size:12px;color:#666;">
            Emitido desde tu Portfolio Online 💼
          </p>
        </div>
      `
    });

    // ------------------------------------------------
    // 3️⃣ Auto Reply Usuario (Gmail SMTP)
    // ------------------------------------------------
    try {
      const mailResponse = await Promise.race([
        transporter.sendMail({
          from: `"Lucas Montenegro" <${gmailUser}>`,
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
                ${safeMessage}
              </p>

              <hr />

              <p style="font-size:12px;color:#666;">
                ✔️ Aviso automático de validación.
              </p>
            </div>
          `
        }),

        // ⏱ Timeout SMTP protección
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("SMTP Timeout")), 8000)
        )
      ]);

      console.log("Auto reply sent:", (mailResponse as any)?.messageId);

    } catch (mailErr) {
      console.error("Auto reply failed:", mailErr);
    }

    // ------------------------------------------------
    // 4️⃣ Response OK
    // ------------------------------------------------
    return NextResponse.json({ ok: true });

  } catch (err: any) {

    console.error("Route error:", err);

    const message =
      err?.name === "ZodError"
        ? "Datos inválidos. Revisá nombre/email/mensaje."
        : "Error interno del servidor";

    return NextResponse.json(
      { ok: false, error: message },
      { status: 400 }
    );
  }
}
