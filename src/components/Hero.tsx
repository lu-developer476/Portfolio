"use client";

import { useEffect, useMemo, useRef } from "react";
import CyberButton from "./CyberButton";
import ThreeBackground from "./ThreeBackground";
import { profile } from "@/config/profile";
import { getTagline } from "@/generated/tagline";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const tagline = useMemo(() => {
    try {
      return getTagline();
    } catch {
      return "Interfaces nítidas. Experiencias rápidas. Estética con intención.";
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const anime = (await import("animejs")).default;
      if (cancelled) return;

      anime({
        targets: titleRef.current,
        translateY: [12, 0],
        opacity: [0, 1],
        duration: 900,
        easing: "easeOutExpo"
      });

      anime({
        targets: ".hero-glow",
        opacity: [0.15, 0.35, 0.2],
        duration: 2400,
        loop: true,
        easing: "easeInOutSine"
      });
    })();

    return () => {
      cancelled = true
    };
  }, []);

  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-6 md:p-10">
      <ThreeBackground />

      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyber-gold/15 blur-3xl hero-glow" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-cyber-violet/20 blur-3xl hero-glow" />

      <div className="relative">
        <p className="text-sm text-cyber-gold font-medium">
          Bienvenido a mi portfolio
        </p>
        <p className="text-xs tracking-[.25em] text-white/60">FRONTEND ENGINEERING • UX/UI • PERFORMANCE</p>
        <h1
          ref={titleRef}
          className="mt-4 text-3xl font-extrabold tracking-tight opacity-0 md:text-5xl"
        >
          <span className="text-cyber-gold">Cyber</span> UI,{" "}
          <span className="text-white">real</span> shipping.
        </h1>

        <p className="mt-4 max-w-2xl text-white/80 leading-relaxed">
          Desarrollo interfaces modernas con foco en claridad, rendimiento y experiencia real de usuario. 
          Combino frontend sólido con sensibilidad UX/UI para crear productos que no solo funcionan, 
          sino que se sienten correctos y escalan en el tiempo.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Stat
            label="Performance"
            value="⚙️ + 📈"
            hint="Optimización orientada a Core Web Vitals: carga rápida, interacción fluida y buen score en producción."
          />
          <Stat
            label="UI feedback"
            value="🧭 + 🔎"
            hint="Estados claros y consistentes con modales dark, validaciones y microfeedback."
          />
          <Stat
            label="Backend"
            value="🔐 + 🛠️ + 🌐"
            hint="Mensajes de contacto persistidos en Firestore vía API Routes (Vercel), listos para escalar y auditar."
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs text-white/60">{label}</div>
        <div className="text-lg">{value}</div>
      </div>
      <div className="mt-2 text-sm text-white/75">{hint}</div>
    </div>
  );
}
