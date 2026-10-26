"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function DevLabSection() {
  const { language } = useLanguage();
  const copy = language === "es"
    ? {
        eyebrow: "EXPERIMENTACIÓN · INTERACCIÓN · CÓDIGO",
        title: "DEV-LAB",
        description: "Un espacio para explorar ideas en funcionamiento: una terminal interactiva, experimentos visuales y pequeños controles para entender cómo las decisiones de interfaz cambian la experiencia.",
        terminal: "Terminal interactiva",
        visual: "Laboratorio visual",
        code: "Decisiones técnicas explicadas",
        button: "Entrar al laboratorio",
        features: [{ title: "Interacción real", detail: "Controles y estado reactivo, sin simulaciones de backend." }, { title: "Código transparente", detail: "Cada experimento explica qué decisión técnica demuestra." }]
      }
    : {
        eyebrow: "EXPERIMENTATION · INTERACTION · CODE",
        title: "Welcome",
        description: "A space to explore working ideas: an interactive terminal, visual experiments, and small controls that show how interface decisions shape the experience.",
        terminal: "Interactive terminal",
        visual: "Visual lab",
        code: "Technical decisions explained",
        button: "Enter the lab",
        features: [{ title: "Real interaction", detail: "Controls and reactive state, without backend simulation." }, { title: "Transparent code", detail: "Each experiment explains the technical decision behind it." }]
      };

  return (
    <section className="mt-10 overflow-hidden rounded-2xl border border-cyber-neonGreen/25 bg-black/35 p-5 sm:p-7" aria-labelledby="dev-lab-section-title">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.75fr)] lg:items-center">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyber-neonGreen">{copy.eyebrow}</p>
          <h2 id="dev-lab-section-title" className="mt-2 text-2xl font-bold text-cyber-gold sm:text-3xl">{copy.title}<span className="dev-lab-title-cursor ml-2 inline-block text-cyber-neonGreen" aria-hidden="true">_</span></h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">{copy.description}</p>
          <Link href="/laboratory" className="mt-5 inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-cyber-gold/60 bg-white/5 px-5 py-3 text-sm font-semibold tracking-wide text-cyber-gold transition hover:border-cyber-neonGreen hover:text-cyber-neonGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyber-neonGreen">
            {copy.button}<span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#080b0d] p-4 font-mono text-xs shadow-[0_0_30px_rgba(5,247,183,0.06)] sm:p-5" aria-hidden="true">
          <div className="mb-4 flex items-center gap-1.5 border-b border-white/10 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-white/40">dev-lab — interactive session</span>
          </div>
          <p className="text-cyber-neonGreen">$ initialize --experience</p>
          <p className="mt-2 text-white/65">→ {copy.terminal}</p>
          <p className="mt-1 text-white/65">→ {copy.visual}</p>
          <p className="mt-1 text-white/65">→ {copy.code}</p>
          <div className="mt-4 flex items-center gap-2 text-cyber-gold"><span>ready</span><span className="h-3.5 w-1.5 bg-cyber-neonGreen motion-safe:animate-[blink_1s_steps(2,start)_infinite]" /></div>
        </div>
      </div>
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {copy.features.map((feature, index) => (
          <article key={feature.title} className="group rounded-xl border border-white/10 bg-black/25 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyber-neonGreen/35 hover:bg-cyber-neonGreen/[0.035]">
            <div className="mb-3 flex items-center gap-2">
              <span className="font-mono text-[10px] text-cyber-neonGreen/70">0{index + 1}</span>
              <span className="h-px flex-1 bg-white/10 transition group-hover:bg-cyber-neonGreen/30" />
            </div>
            <h3 className="text-sm font-semibold text-cyber-gold">{feature.title}</h3>
            <p className="mt-2 text-xs leading-6 text-white/60">{feature.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
