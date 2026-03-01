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

      // Animaciones
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

      // TTS estilo cyberpunk femenino
      if (!cancelled && "speechSynthesis" in window) {
        const speakCyberpunk = (text: string) => {
          const voices = window.speechSynthesis.getVoices();
          // Buscar voz femenina inglesa
          const voice = voices.find(v =>
            v.lang.startsWith("en") && v.name.toLowerCase().includes("female")
          ) || voices[0]; // fallback si no encuentra

          // Creamos varias instancias para efecto glitch
          for (let i = 0; i < 2; i++) {
            const mensaje = new SpeechSynthesisUtterance(text);
            mensaje.voice = voice;
            mensaje.lang = "en-US";
            mensaje.rate = 0.85 + i * 0.05; // leve variación
            mensaje.pitch = 1.2 - i * 0.1;  // tono más agudo y robótico
            mensaje.volume = 1;

            // delay pequeño para efecto eco/glitch
            setTimeout(() => {
              if (!cancelled) window.speechSynthesis.speak(mensaje);
            }, i * 120);
          }
        };

        // disparar TTS
        speakCyberpunk("SYSTEM: ONLINE. STATUS: DEPLOYED. SIGNAL: STABLE.");
      }

    })();

    return () => {
      cancelled = true;
      window.speechSynthesis.cancel(); // corta la voz si desmonta el componente
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
        &gt; SYSTEM: ONLINE • STATUS: DEPLOYED • SIGNAL: STABLE
      </div>
    </div>
  );
}
