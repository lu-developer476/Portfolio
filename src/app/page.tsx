"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { useLanguage } from "@/lib/i18n";

export default function HomePage() {
  const { t } = useLanguage();
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = cardsRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>(".method-card"));
    if (cards.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "none";
      });
      return;
    }

    let cancelled = false;
    let played = false;
    let observer: IntersectionObserver | null = null;

    (async () => {
      const anime = (await import("animejs")).default;
      if (cancelled) return;

      const run = () => {
        if (played) return;
        played = true;
        anime({
          targets: cards,
          translateY: [40, 0],
          opacity: [0, 1],
          scale: [0.96, 1],
          delay: anime.stagger(140),
          duration: 750,
          easing: "easeOutExpo"
        });
      };

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) run();
          });
        },
        { threshold: 0.25 }
      );

      observer.observe(container);
    })();

    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="space-y-8">
      <Hero />
      <Section id="method" title={t.home.methodTitle} subtitle={t.home.methodSubtitle}>
        <div ref={cardsRef} className="grid gap-4 md:grid-cols-2">
          {t.home.cards.map(([title, description]) => (
            <div
              key={title}
              className="method-card rounded-xl border border-white/10 bg-black/35 p-5 opacity-0 transition-colors duration-300 hover:border-cyber-gold/40"
            >
              <h3 className="text-lg font-semibold text-cyber-gold">{title}</h3>
              <p className="light-electric-blue mt-2 text-white/80">{description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
