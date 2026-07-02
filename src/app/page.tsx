"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { useLanguage } from "@/lib/i18n";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <Hero />
      <Section id="method" title={t.home.methodTitle} subtitle={t.home.methodSubtitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {t.home.cards.map(([title, description]) => (
            <div key={title} className="rounded-xl border border-white/10 bg-black/35 p-5">
              <h3 className="text-lg font-semibold text-cyber-gold">{title}</h3>
              <p className="light-electric-blue mt-2 text-white/80">{description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
