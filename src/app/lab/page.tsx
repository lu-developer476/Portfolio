"use client";

import Section from "@/components/Section";
import DevLabExperience from "@/components/DevLabExperience";
import { useLanguage } from "@/lib/i18n";

export default function LabPage() {
  const { language } = useLanguage();
  const subtitle = language === "es"
    ? "Experimentos interactivos para explorar ideas, probar variables y entender decisiones técnicas."
    : "Interactive experiments to explore ideas, test variables, and understand technical decisions.";

  return (
    <div className="space-y-8">
      <Section id="dev-lab" title="DEV LAB" subtitle={subtitle}>
        <DevLabExperience />
      </Section>
    </div>
  );
}
