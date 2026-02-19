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
        <p className="text-xs tracking-[.25em] text-white/60">NEXT.JS • REACT • TYPESCRIPT • TAILWIND</p>
        <h1
          ref={titleRef}
          className="mt-4 text-3xl font-extrabold tracking-tight opacity-0 md:text-5xl"
        >
          <span className="text-cyber-gold">Cyber</span> UI,{" "}
          <span className="text-white">real</span> shipping.
        </h1>

        <p className="mt-4 max-w-2xl text-white/80 leading-relaxed">
          {tagline} Portfolio con animación, 3D suave y backend en Firebase. Deploy listo para Vercel.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <CyberButton href="/projects" variant="gold">Ver proyectos</CyberButton>
          <CyberButton href={profile.github} external variant="green">GitHub</CyberButton>
          <CyberButton href={profile.linkedin} external variant="red">LinkedIn</CyberButton>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Stat label="Performance" value="🚀" hint="Optimizable, pero ya rápido." />
          <Stat label="UI feedback" value="⚡" hint="SweetAlert2 dark para estados." />
          <Stat label="Backend" value="☁️" hint="Firestore para mensajes." />
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
