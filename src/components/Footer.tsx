"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const footerParts = t.footer.split(/(React\.js|Next\.js|TypeScript|CoffeeScript|Tailwind CSS|UX\/UI (?:Interface|Design)|Firebase|Vercel)/g);

  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4 text-sm text-white/70">
        <span className="text-cyber-gold">©</span> {new Date().getFullYear()}{" "}
        {footerParts.map((part, index) => {
          const isHighlightedTech = /^(?:React\.js|Next\.js|TypeScript|CoffeeScript|Tailwind CSS|UX\/UI (?:Interface|Design)|Firebase|Vercel)$/.test(part);

          return isHighlightedTech ? (
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
    </footer>
  );
}
