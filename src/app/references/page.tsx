"use client";

import Link from "next/link";
import Section from "@/components/Section";
import { companyReferences } from "@/config/references";
import { useLanguage } from "@/lib/i18n";

export default function ReferencesPage() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const copy = isSpanish
    ? { title: "Marcas líderes del mercado", subtitle: "Productos, sistemas de diseño y recursos públicos pueden servir como material de estudio para proyectos web, UX/UI y desarrollo.", intro: "Qué observar en cada referente", learn: "Qué vale la pena estudiar", open: "Ver recurso oficial", back: "Volver", disclaimer: "Los nombres y logotipos pertenecen a sus respectivos titulares. No implica patrocinio, asociación ni una relación comercial." }
    : { title: "Leading Market Brands", subtitle: "Products, design systems, and public resources can provide useful study material for web, UX/UI, and development projects.", intro: "What to look for in each reference", learn: "What is worth studying", open: "View official resource", back: "Back", disclaimer: "Names and logos belong to their respective owners. This does not imply sponsorship, affiliation, or a commercial relationship." };

  return (
    <div className="references-page space-y-8">
      <div>
        <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-white/75 transition hover:border-cyber-neonGreen/60 hover:text-cyber-neonGreen">
          <span aria-hidden="true">←</span>{copy.back}
        </Link>
      </div>
      <Section id="references" title={copy.title} subtitle={copy.subtitle}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {companyReferences.map((company) => (
            <article key={company.slug} className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/35 p-5 transition duration-300 hover:border-cyber-gold/45">
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  {company.logoMode === "crop-left" && company.logoUrl ? (
                    <span className="relative block h-8 w-8 shrink-0 overflow-hidden">
                      <img src={company.logoUrl} alt="" width="32" height="32" loading="lazy" decoding="async" className="absolute left-0 top-0 h-8 w-auto max-w-none object-contain" />
                    </span>
                  ) : (
                    <img src={company.logoUrl ?? `https://cdn.simpleicons.org/${company.slug}/${company.logoColor}`} alt="" width="32" height="32" loading="lazy" decoding="async" className="h-8 w-8 object-contain" />
                  )}
                </span>
                <div className="min-w-0">
                  <h3 className="references-company-name text-lg font-semibold text-cyber-gold">{company.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{isSpanish ? company.focusEs : company.focusEn}</p>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-cyber-neonGreen">{copy.learn}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{isSpanish ? company.lessonEs : company.lessonEn}</p>
              </div>
              <a href={company.referenceUrl} target="_blank" rel="noopener noreferrer" className="mx-auto mt-5 inline-flex w-fit items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-center text-sm font-semibold text-white/75 transition hover:border-cyber-neonGreen/60 hover:text-cyber-neonGreen">
                {copy.open}<span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-white/40">{copy.disclaimer}</p>
      </Section>
    </div>
  );
}
