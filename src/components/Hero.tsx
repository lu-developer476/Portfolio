"use client";

import { useEffect, useMemo, useRef } from "react";
import ThreeBackground from "./ThreeBackground";
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
        translateY: [16, 0],
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
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 px-6 py-5 md:px-12 md:py-8">
      <ThreeBackground />

      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyber-gold/15 blur-3xl hero-glow" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-cyber-violet/20 blur-3xl hero-glow" />

      <div className="relative">
        <p className="text-xs tracking-[.25em] text-white/50 uppercase">
          Frontend Engineering • UX/UI • Performance
        </p>

        <h1
          ref={titleRef}
          className="mt-2 text-4xl font-extrabold tracking-tight opacity-0 md:text-6xl lg:text-7xl leading-tight"
        >
          <span className="text-cyber-gold block">
            Interfaces modernas
          </span>
          <span className="text-white block">
            con foco en rendimiento.
          </span>
        </h1>

        <p className="mt-4 max-w-lg text-white/80 leading-snug text-base md:text-lg">
          Desarrollo productos digitales claros, rápidos y escalables.
          Combino frontend sólido con criterio UX para crear experiencias que funcionan en producción.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Stat
            label="Performance"
            value="⚙️ + 📈"
            hint="Core Web Vitals optimizados y experiencia fluida en producción."
          />
          <Stat
            label="User Feedback"
            value="🧭 + ⚡"
            hint="Validaciones precisas y respuestas inmediatas en cada interacción."
          />
          <Stat
            label="Backend"
            value="🔐 + 🛠️ + 🌐"
            hint="Persistencia en Firestore vía API Routes lista para escalar."
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
        <div className="text-xs text-white/60 uppercase tracking-wide">
          {label}
        </div>
        <div className="text-lg">{value}</div>
      </div>
      <div className="mt-2 text-sm text-white/75 leading-snug">
        {hint}
      </div>
    </div>
  );
}
