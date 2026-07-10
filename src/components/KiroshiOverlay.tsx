"use client";

import { useEffect, useRef } from "react";
import { Language, useLanguage } from "@/lib/i18n";

type VoiceProfile = {
  lang: string;
  localePrefixes: string[];
  nameHints: string[];
};

const VOICE_PROFILES: Record<Language, VoiceProfile> = {
  es: {
    lang: "es-419",
    localePrefixes: ["es-419", "es-mx", "es-us", "es-ar", "es-co", "es-cl", "es-pe", "es-uy", "es"],
    nameHints: ["paulina", "sabina", "monica", "mónica", "soledad", "laura", "female", "mujer"]
  },
  en: {
    lang: "en-CA",
    localePrefixes: ["en-ca", "en"],
    nameHints: ["claire", "samantha", "victoria", "karen", "zira", "susan", "female", "woman"]
  }
};

const normalize = (value: string) => value.toLowerCase();

const scoreVoice = (voice: SpeechSynthesisVoice, profile: VoiceProfile) => {
  const voiceLang = normalize(voice.lang);
  const voiceName = normalize(voice.name);
  const localeIndex = profile.localePrefixes.findIndex((locale) => voiceLang.startsWith(locale));

  if (localeIndex === -1) return -1;

  const exactLocaleBonus = voiceLang === normalize(profile.lang) ? 100 : 0;
  const femaleHintBonus = profile.nameHints.some((hint) => voiceName.includes(hint)) ? 25 : 0;
  const localServiceBonus = voice.localService ? 5 : 0;

  return exactLocaleBonus + femaleHintBonus + localServiceBonus - localeIndex;
};

const getNaturalFemaleVoice = (voices: SpeechSynthesisVoice[], language: Language) => {
  const profile = VOICE_PROFILES[language];

  return voices
    .map((voice) => ({ voice, score: scoreVoice(voice, profile) }))
    .filter(({ score }) => score >= 0)
    .sort((a, b) => b.score - a.score)[0]?.voice ?? null;
};

export default function KiroshiOverlay() {
  const { language, t } = useLanguage();
  const circleRef = useRef<HTMLDivElement | null>(null);
  const scanRef = useRef<HTMLDivElement | null>(null);
  const spokenLanguageRef = useRef<Language | null>(null);

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
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return undefined;
    }

    let cancelled = false;
    const speechSynthesis = window.speechSynthesis;
    const voiceProfile = VOICE_PROFILES[language];

    const speakCyberpunk = () => {
      if (cancelled || spokenLanguageRef.current === language) return;

      const message = new SpeechSynthesisUtterance(t.hero.systemVoice);
      message.lang = voiceProfile.lang;
      message.voice = getNaturalFemaleVoice(speechSynthesis.getVoices(), language);
      message.rate = language === "es" ? 0.88 : 0.86;
      message.pitch = 1.08;
      message.volume = 1;

      spokenLanguageRef.current = language;
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
  }, [language, t.hero.systemVoice]);

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
