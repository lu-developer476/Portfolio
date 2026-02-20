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
      return "Interfaces precisas. Arquitectura limpia. Experiencia sin fricción.";
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const anime = (await import("animejs")).default;
      if (cancelled) return;

      anime({
        targets: titleRef.current,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 900,
        easing: "easeOutExpo"
      });

      anime({
        targets: ".hero-glow",
        opacity: [0.12, 0.28, 0.18],
        duration: 2600,
        loop: true,
        easing: "easeInOutSine"
      });
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative overflow-hidden px-6 py-16 md:px-12 md:py-24 min-h-[80vh] flex items-center">
      <ThreeBackground />
      <KiroshiOverlay />

      {/* Glows adaptados */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[300px] w-[300px] md:h-[420px] md:w-[420px] rounded-full bg-cyber-gold/15 blur-3xl hero-glow" />
      <div className="pointer-events-none absolute -right-24 top-0 h-[300px] w-[300px] md:h-[420px] md:w-[420px] rounded-full bg-cyber-violet/20 blur-3xl hero-glow" />

      <div className="relative z-10 max-w-5xl">

        {/* SYSTEM STATUS */}
        <p className="mb-4 text-xs md:text-sm font-mono tracking-widest text-cyber-gold/80">
          &gt; SYSTEM STATUS: ONLINE
        </p>

        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight opacity-0"
        >
          <span className="text-cyber-gold block">
            Interfaces que escalan
          </span>
          <span className="text-white block">
            sin romper la experiencia
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-white/75 leading-relaxed text-sm sm:text-base md:text-lg">
          Desarrollo productos digitales con foco en rendimiento,
          claridad estructural y criterio UX.
          Código mantenible. Feedback inmediato.
          Backend real listo para producción.
        </p>

        {/* Stats responsive */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Stat
            label="Performance"
            value="⚙️ + 📈"
            hint="Core Web Vitals optimizados y render eficiente"
          />
          <Stat
            label="User Experience"
            value="🧭 + 🔎"
            hint="Interacciones claras con validaciones en tiempo real"
          />
          <Stat
            label="Backend Ready"
            value="🔐 + 🛠️"
            hint="Firestore + API Routes listos para escalar"
          />
        </div>

        {/* Tagline dinámico */}
        <p className="mt-10 text-xs md:text-sm text-white/40 font-mono">
          {tagline}
        </p>

      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  hint
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm p-4 transition hover:border-cyber-gold/40">
      <div className="flex items-center justify-between">
        <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest">
          {label}
        </div>
        <div className="text-base md:text-lg">{value}</div>
      </div>
      <div className="mt-2 text-xs md:text-sm text-white/70 leading-snug">
        {hint}
      </div>
    </div>
  );
}
