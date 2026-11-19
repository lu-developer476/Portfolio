"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { language } = useLanguage();

  const footerText =
    language === "es"
      ? "Todos los derechos reservados - Diseño y Programación por Lucas Montenegro ®"
      : "All rights reserved - Design and Programming by Lucas Montenegro ®";

  const footerParts = footerText.split(
    /(Todos los derechos reservados|All rights reserved|Lucas Montenegro)/g
  );

  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="mx-auto w-full max-w-6xl px-4 text-center text-[9px] leading-relaxed text-white/70 sm:text-[10px]">
        <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 break-words">
          <span className="text-cyber-gold">©</span> {new Date().getFullYear()}{" "}
          {footerParts.map((part, index) => {
            const isHighlightedRights =
              /^(?:Todos los derechos reservados|All rights reserved)$/.test(part);
            const isAuthorName = part === "Lucas Montenegro";

            if (isHighlightedRights) {
              return (
                <span
                  key={index}
                  className="footer-rights-glow"
                  style={{ animationDelay: `${(index % 7) * 0.13}s` }}
                >
                  {part}
                </span>
              );
            }

            if (isAuthorName) {
              return (
                <a
                  key={index}
                  href="https://www.linkedin.com/in/l-montenegro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    language === "es"
                      ? "Perfil de LinkedIn de Lucas Montenegro"
                      : "Lucas Montenegro's LinkedIn profile"
                  }
                  className="footer-tech-glow rounded-sm transition-[filter] hover:brightness-125 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#ffe8a3]"
                  style={{ animationDelay: `${(index % 7) * 0.13}s` }}
                >
                  {part}
                </a>
              );
            }

            return <span key={index}>{part}</span>;
          })}
        </div>
      </div>
    </footer>
  );
}
