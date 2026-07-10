"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/i18n";

const ROBOTIC_FEMALE_VOICE_HINTS = [
  "zira",
  "samantha",
  "victoria",
  "karen",
  "moira",
  "susan",
  "female",
  "woman"
];

const getRoboticFemaleVoice = (voices: SpeechSynthesisVoice[]) => {
  const englishVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith("en"));
  const preferredVoice = englishVoices.find((voice) => {
    const voiceName = voice.name.toLowerCase();
    return ROBOTIC_FEMALE_VOICE_HINTS.some((hint) => voiceName.includes(hint));
  });

  return preferredVoice ?? englishVoices[0] ?? voices[0] ?? null;
};

export default function KiroshiOverlay() {
  const { t } = useLanguage();
  const circleRef = useRef<HTMLDivElement | null>(null);
  const scanRef = useRef<HTMLDivElement | null>(null);
  const hasSpokenRef = useRef(false);

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
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const speechSynthesis = window.speechSynthesis;

    if (hasSpokenRef.current || !("speechSynthesis" in window)) {
      return undefined;
    }

    const speakCyberpunk = () => {
      if (cancelled || hasSpokenRef.current) return;

      const message = new SpeechSynthesisUtterance(t.hero.systemVoice);
      message.voice = getRoboticFemaleVoice(speechSynthesis.getVoices());
      message.lang = "en-US";
      message.rate = 0.78;
      message.pitch = 1.45;
      message.volume = 1;

      hasSpokenRef.current = true;
      speechSynthesis.cancel();
      speechSynthesis.speak(message);
    };

    if (speechSynthesis.getVoices().length > 0) {
      speakCyberpunk();
    } else {
      speechSynthesis.addEventListener("voiceschanged", speakCyberpunk, { once: true });
    }

    return () => {
      cancelled = true;
      speechSynthesis.removeEventListener("voiceschanged", speakCyberpunk);
      speechSynthesis.cancel();
    };
  }, [t.hero.systemVoice]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      
      {/* Círculo HUD */}
      <div
        ref={circleRef}
        className="hud-circle absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyber-neonGreen/40 opacity-0"
      />

      {/* Línea de escaneo */}
      <div
        ref={scanRef}
        className="absolute left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyber-neonGreen/50 to-transparent opacity-40"
      />

      {/* Coordenadas */}
      <div className="absolute left-4 right-4 top-4 truncate text-[9px] text-cyber-neonGreen/60 font-mono tracking-wider sm:text-[10px]">
        {t.hero.systemStatus}
      </div>
    </div>
  );
}
