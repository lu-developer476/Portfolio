"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { companyReferences } from "@/config/references";

export default function ReferencesSection() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  const labels = isSpanish
    ? { eyebrow: "INSPIRACIÓN Y APRENDIZAJE", title: "Empresas destacadas de Producto y Diseño", subtitle: "Una selección de empresas con productos digitales y recursos públicos que permiten observar cómo organizan sus interfaces, mantienen la coherencia visual y responden a necesidades concretas de sus usuarios.", button: "Ver más", explore: "Explorar referentes", logos: "Cinta de empresas de referencia", note: "Las menciones no implican afiliación ni colaboración con estas empresas." }
    : { eyebrow: "INSPIRATION AND LEARNING", title: "Featured Product and Design Companies", subtitle: "A selection of companies with digital products and public resources that offer examples of how interfaces are organized, visual consistency is maintained, and concrete user needs are addressed.", button: "See more", explore: "Explore references", logos: "Company reference logo strip", note: "Mentions do not imply affiliation or collaboration with these companies." };

  const renderLogos = (duplicate: boolean) => (
    <div className="references-marquee-set" aria-hidden={duplicate || undefined}>
      {companyReferences.map((company) => (
        <a
          key={`${company.slug}-${duplicate ? "copy" : "main"}`}
          href={company.referenceUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={duplicate ? -1 : undefined}
          aria-label={duplicate ? undefined : `${company.name}: ${isSpanish ? company.focusEs : company.focusEn}`}
          className="references-logo-item group"
        >
          <span className={`flex h-[30px] w-[30px] shrink-0 items-center ${company.logoMode === "crop-left" ? "justify-start overflow-hidden" : "justify-center"}`}>
          <img
            src={company.logoUrl ?? `https://cdn.simpleicons.org/${company.slug}/FFFFFF`}
            alt=""
            width="30"
            height="30"
            loading="eager"
            decoding="async"
            className={`${company.logoMode === "crop-left" ? "h-6 w-[120px] max-w-none object-contain object-left" : "h-7 w-7 object-contain"} ${company.logoMonochrome ? "brightness-0 invert" : ""} shrink-0 opacity-80 transition duration-300 group-hover:scale-110 group-hover:opacity-100`
          />
          </span>
          <span>{company.name}</span>
        </a>
      ))}
    </div>
  );

  return (
    <section className="references-showcase mt-10 overflow-hidden rounded-2xl border border-cyber-gold/25 bg-black/35 py-6 sm:py-7" aria-labelledby="references-showcase-title">
      <div className="flex flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyber-neonGreen">{labels.eyebrow}</p>
          <h2 id="references-showcase-title" className="mt-2 text-xl font-bold text-cyber-gold sm:text-2xl">{labels.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{labels.subtitle}</p>
        </div>
        <Link href="/referentes" className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-xl border border-cyber-gold/60 bg-white/5 px-5 py-3 text-sm font-semibold tracking-wide text-cyber-gold transition hover:border-cyber-neonGreen hover:text-cyber-neonGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyber-neonGreen">
          {labels.button}<span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="references-marquee mt-6" role="region" aria-label={labels.logos}>
        <div className="references-track">
          {renderLogos(false)}
          {renderLogos(true)}
        </div>
      </div>
      <p className="mt-4 px-5 text-center text-[11px] leading-relaxed text-white/40 sm:px-7">{labels.note}</p>
    </section>
  );
}
