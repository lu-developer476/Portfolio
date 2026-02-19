"use client";

import { useEffect, useMemo, useRef } from "react";
import ThreeBackground from "./ThreeBackground";
import KiroshiOverlay from "./KiroshiOverlay";
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
        duration: 800,
        easing: "easeOutExpo"
      });

      anime({
        targets: ".hero-glow",
        opacity: [0.12, 0.28, 0.18],
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
    <section className="relative overflow-hidden px-6 py-4 md:px-12 md:py-6">
     <ThreeBackground />
      <KiroshiOverlay />

      {/* Glows más chicos */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[380px] w-[380px] rounded-full bg-cyber-gold/15 blur-3xl hero-glow" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] rounded-full bg-cyber-violet/20 blur-3xl hero-glow" />

      <div className="relative z-10">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] opacity-0"
        >
          <span className="text-cyber-gold block">
           Interfaces que escalan
          </span>
          <span className="text-white block">
           sin sacrificar experiencia
          </span>
        </h1>

        <p className="mt-2 max-w-3xl text-white/80 leading-relaxed text-base md:text-lg"">
          Construyo productos digitales rápidos, claros y bien estructurados. 
          Frontend sólido con criterio UX para entregar soluciones exactas al usuario
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Stat
            label="Performance"
            value="⚙️ + 📈"
            hint="Core Web Vitals optimizados y experiencia fluida en producción"
          />
          <Stat
            label="User Feedback"
            value="🧭 + 🔎"
            hint="Validaciones precisas y respuestas inmediatas en cada interacción"
          />
          <Stat
            label="Backend"
            value="🔐 + 🛠️ + 🌐"
            hint="Persistencia en Firestore vía API Routes lista para escalar"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/40 p-4">
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
