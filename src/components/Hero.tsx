"use client";

import { useEffect, useMemo, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ThreeBackground from "./ThreeBackground";
import KiroshiOverlay from "./KiroshiOverlay";
import { getTagline } from "@/generated/tagline";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const { language, t } = useLanguage();

  const tagline = useMemo(() => {
    try {
      return getTagline();
    } catch {
      return t.hero.fallbackTagline;
    }
  }, [t.hero.fallbackTagline]);

  const stats = useMemo(
    () => [
      { label: "Performance", value: "⚙️ + 📈", hint: t.hero.stats.performance },
      { label: "User Experience", value: "🧭 + 🔎", hint: t.hero.stats.ux },
      { label: "Backend Ready", value: "🔐 + 🛠️ + 🌐", hint: t.hero.stats.backend },
      { label: "Code Quality", value: "🧩 + ✅", hint: t.hero.stats.quality },
      { label: "Motion & UI", value: "🎬 + ✨", hint: t.hero.stats.motion }
    ],
    [t.hero.stats]
  );

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
    <section className="relative isolate overflow-hidden px-5 py-14 sm:px-6 md:px-12 md:py-24 min-h-[80vh] flex items-center">
      <ThreeBackground />
      <KiroshiOverlay />

      {/* Glows adaptados */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[300px] w-[300px] md:h-[420px] md:w-[420px] rounded-full bg-cyber-gold/15 blur-3xl hero-glow" />
      <div className="pointer-events-none absolute -right-24 top-0 h-[300px] w-[300px] md:h-[420px] md:w-[420px] rounded-full bg-cyber-violet/20 blur-3xl hero-glow" />

      <div className="relative z-10 w-full max-w-5xl min-w-0">

        <h1
          ref={titleRef}
          className="max-w-full text-[2.15rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] opacity-0"
        >
          <span className="text-cyber-gold block break-words">
            {t.hero.titleGold}
          </span>
          <span className="text-white block break-words">
            {t.hero.titleWhite}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl break-words text-white/75 leading-relaxed text-sm sm:text-base md:text-lg">
{t.hero.description}
        </p>

        {/* Stats carrusel deslizable */}
        <div className="text-white/75 mt-8">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={14}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.1 }
            }}
            className="!pb-10"
          >
            {stats.map((stat) => (
              <SwiperSlide key={stat.label} className="h-auto">
                <Stat label={stat.label} value={stat.value} hint={stat.hint} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tagline dinámico */}
        <p className="mt-10 text-xs md:text-sm text-white/40 font-mono">
          {language === "es" ? tagline : t.hero.fallbackTagline}
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
    <div className="h-full rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm p-4 transition hover:border-cyber-gold/40">
      <div className="flex items-center justify-between">
        <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest">
          {label}
        </div>
        <div className="text-base md:text-lg">{value}</div>
      </div>
      <div className="light-electric-blue mt-2 text-xs md:text-sm text-white/70 leading-snug">
        {hint}
      </div>
    </div>
  );
}
