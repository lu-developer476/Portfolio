"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4 text-sm text-white/70">
        <span className="text-cyber-gold">©</span> {new Date().getFullYear()} {t.footer}
      </div>
    </footer>
  );
}
