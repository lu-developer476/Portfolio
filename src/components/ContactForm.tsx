"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLanguage } from "@/lib/i18n";

type ServiceOption =
  | "landing-page"
  | "professional-website"
  | "online-store"
  | "custom-web-app"
  | "redesign-optimization"
  | "custom-quote"
  | "extras"
  | "general";

type FormState = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const baseSwal = Swal.mixin({
  background: "#0b0b0f",
  color: "#ffffff",
  confirmButtonColor: "#111827",
  customClass: {
    popup: "border border-white/100",
    confirmButton: "rounded-lg border border-cyber-gold/70 shadow-none"
  }
});

export default function ContactForm() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FormState>({ name: "", email: "", service: "", message: "" });

  useEffect(() => {
    const handleServiceSelection = (event: Event) => {
      const service = (event as CustomEvent<ServiceOption>).detail;
      setData((current) => ({ ...current, service }));
    };

    window.addEventListener("portfolio:select-service", handleServiceSelection);
    return () => window.removeEventListener("portfolio:select-service", handleServiceSelection);
  }, []);

  const onChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setData((d) => ({ ...d, [k]: value }));

    if (k === "service") {
      window.dispatchEvent(new CustomEvent("portfolio:select-service", { detail: value }));
    }
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
        throw new Error(body.error || t.contact.form.unknownError);
      }

      await baseSwal.fire({
        icon: "success",
        title: t.contact.form.successTitle,
        text: t.contact.form.successText
      });

      setData({ name: "", email: "", service: "", message: "" });
      window.dispatchEvent(new CustomEvent("portfolio:select-service", { detail: "" }));
    } catch (err: any) {
      await baseSwal.fire({
        icon: "error",
        title: t.contact.form.errorTitle,
        text: err?.message ?? t.contact.form.retry
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <Field label={t.contact.form.personal}>
        <input
          value={data.name}
          onChange={onChange("name")}
          className="w-full rounded-lg border border-white/100 bg-black/60 px-3 py-2 text-sm outline-none focus:border-cyber-neonGreen/60"
          placeholder={t.contact.form.namePlaceholder}
          required
        />
      </Field>

      <Field label="Email">
        <input
          value={data.email}
          onChange={onChange("email")}
          type="email"
          className="w-full rounded-lg border border-white/100 bg-black/60 px-3 py-2 text-sm outline-none focus:border-cyber-neonGreen/60"
          placeholder="micorreo@mail.com"
          required
        />
      </Field>

      <Field label={t.contact.form.serviceLabel}>
        <select
          value={data.service}
          onChange={onChange("service")}
          className="w-full rounded-lg border border-white/100 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-cyber-neonGreen/60"
          required
        >
          <option value="" disabled>{t.contact.form.servicePlaceholder}</option>
          <option value="landing-page">{t.contact.form.services.landingPage}</option>
          <option value="professional-website">{t.contact.form.services.professionalWebsite}</option>
          <option value="online-store">{t.contact.form.services.onlineStore}</option>
          <option value="custom-web-app">{t.contact.form.services.customWebApp}</option>
          <option value="redesign-optimization">{t.contact.form.services.redesign}</option>
          <option value="custom-quote">{t.contact.form.services.customQuote}</option>
          <option value="extras">{t.contact.form.services.extras}</option>
          <option value="general">{t.contact.form.services.general}</option>
        </select>
      </Field>

      <Field label={t.contact.form.reason}>
        <textarea
          value={data.message}
          onChange={onChange("message")}
          className="min-h-28 w-full rounded-lg border border-white/100 bg-black/60 px-3 py-2 text-sm outline-none focus:border-cyber-neonGreen/60"
          placeholder={t.contact.form.messagePlaceholder}
          required
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg border border-cyber-gold/70 bg-black/70 px-4 py-2 text-sm font-semibold transition hover:bg-cyber-gold/10 disabled:opacity-60"
      >
        {loading ? t.contact.form.sending : t.contact.form.submit}
      </button>

      <p className="text-xs text-white/55">
        {t.contact.form.privacy}
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
