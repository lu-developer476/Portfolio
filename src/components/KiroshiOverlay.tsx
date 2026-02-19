"use client";

import { useEffect, useRef } from "react";

export default function KiroshiOverlay() {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const scanRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const anime = (await import("animejs")).default;
      if (cancelled) return;

      anime({
        targets: circleRef.current,
        scale: [0.8, 1],
        opacity: [0, 0.6],
        duration: 1200,
        easing: "easeOutExpo"
      });

      anime({
        targets: scanRef.current,
        translateY: ["-100%", "100%"],
        duration: 2800,
        loop: true,
        easing: "linear"
      });
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      
      {/* Círculo HUD */}
      <div
        ref={circleRef}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyber-neonGreen/40 opacity-0"
      />

      {/* Línea de escaneo */}
      <div
        ref={scanRef}
        className="absolute left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyber-neonGreen/50 to-transparent opacity-40"
      />

      {/* Coordenadas */}
      <div className="absolute left-4 top-4 text-[10px] text-cyber-neonGreen/60 font-mono tracking-wider">
        SYSTEM: ONLINE
      </div>

      <div className="absolute right-4 bottom-1 md:bottom-4 text-[10px] text-cyber-neonGreen/60 font-mono tracking-wider">
        STATUS: DEPLOYED • SIGNAL: STABLE
      </div>
    </div>
  );
}
