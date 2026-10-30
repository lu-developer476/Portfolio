"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const footerParts = t.footer.split(/(Todos los derechos reservados|All rights reserved|React(?:\.js)?|Next\.js|TypeScript|CoffeeScript|Node\.js|Tailwind CSS|UX\/UI (?:Interface|Design)|Firebase|Vercel)/g);

  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="mx-auto w-full max-w-6xl px-4 text-center text-[9px] leading-relaxed text-white/70 sm:text-[10px]">
        <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 break-words">
          <span className="text-cyber-gold">©</span> {new Date().getFullYear()}{" "}
          {footerParts.map((part, index) => {
          const isHighlightedRights = /^(?:Todos los derechos reservados|All rights reserved)$/.test(part);
          const isHighlightedTech = /^(?:React(?:\.js)?|Next\.js|TypeScript|CoffeeScript|Node\.js|Tailwind CSS|UX\/UI (?:Interface|Design)|Firebase|Vercel)$/.test(part);

          return isHighlightedRights ? (
            <span
              key={index}
              className="footer-rights-glow"
              style={{ animationDelay: `${(index % 7) * 0.13}s` }}
            >
              {part}
            </span>
          ) : isHighlightedTech ? (
            <span
              key={index}
              className="footer-tech-glow"
              style={{ animationDelay: `${(index % 7) * 0.13}s` }}
            >
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          );
          })}
        </div>
      </div>
    </footer>
  );
}
