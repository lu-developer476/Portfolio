"use client";

import { useState } from "react";
import Swal from "sweetalert2";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const baseSwal = Swal.mixin({
  background: "#0b0b0f",
  color: "#ffffff",
  confirmButtonColor: "#111827",
  customClass: {
    popup: "border border-white/10",
    confirmButton: "rounded-lg border border-cyber-gold/70 shadow-none"
  }
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FormState>({ name: "", email: "", message: "" });

  const onChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
      });

      const body = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !body.ok) {
        throw new Error(body.error || "Error desconocido");
      }

      await baseSwal.fire({
        icon: "success",
        title: "Mensaje enviado",
        text: "Quedó guardado. Si es urgente, avisame por LinkedIn."
      });

      setData({ name: "", email: "", message: "" });
    } catch (err: any) {
      await baseSwal.fire({
        icon: "error",
        title: "No se pudo enviar",
        text: err?.message ?? "Probá de nuevo en un minuto."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <Field label="Datos personales">
        <input
          value={data.name}
          onChange={onChange("name")}
          className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none focus:border-cyber-neonGreen/60"
          placeholder="Nombre y apellido"
          required
        />
      </Field>

      <Field label="Email">
        <input
          value={data.email}
          onChange={onChange("email")}
          type="email"
          className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none focus:border-cyber-neonGreen/60"
          placeholder="micorreo@mail.com"
          required
        />
      </Field>

      <Field label="Motivo de tu consulta">
        <textarea
          value={data.message}
          onChange={onChange("message")}
          className="min-h-28 w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none focus:border-cyber-neonGreen/60"
          placeholder="Contame en qué te puedo ayudar..."
          required
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg border border-cyber-gold/70 bg-black/70 px-4 py-2 text-sm font-semibold transition hover:bg-cyber-gold/10 disabled:opacity-60"
      >
        {loading ? "Un momento por favor..." : "Enviar"}
      </button>

      <p className="text-xs text-white/55">
        Nota: para que funcione en producción, configurá Firebase Admin en variables de entorno (ver README).
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1 text-xs text-white/70">{label}</div>
      {children}
    </label>
  );
}
