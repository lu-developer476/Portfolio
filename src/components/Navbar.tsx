"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useHoverSound } from "@/lib/useHoverSound";
import { useLanguage } from "@/lib/i18n";

type ThemeMode = "dark" | "light" | "beige";

const themes: Array<{ mode: ThemeMode; label: string; icon: string; title: string }> = [
  { mode: "dark", label: "Oscuro", icon: "🌙", title: "Modo oscuro" },
  { mode: "light", label: "Claro", icon: "🌊", title: "Modo claro" },
  { mode: "beige", label: "Beige", icon: "🏜️", title: "Modo beige" }
];

const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "dark";

  const storedTheme = window.localStorage.getItem("portfolio-theme");
  return storedTheme === "light" || storedTheme === "beige" || storedTheme === "dark"
    ? storedTheme
    : "dark";
};

const NavLink = ({
  href,
  children,
  onClick,
  onHover
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  onHover?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    onMouseEnter={onHover}
    className="text-xs md:text-sm text-white/70 hover:text-white transition underline decoration-white/10 underline-offset-8 hover:decoration-cyber-gold/60"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const { play } = useHoverSound("bleep");
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const changeTheme = (mode: ThemeMode) => {
    setTheme(mode);
    document.documentElement.dataset.theme = mode;
    window.localStorage.setItem("portfolio-theme", mode);
    play();
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-4 md:px-6 md:py-5 lg:min-h-[88px] lg:flex-row lg:items-center lg:gap-4">

          {/* IZQUIERDA */}
          <div className="flex items-center gap-3 md:gap-4">

            {/* Avatar responsive */}
            <button
              onClick={() => setOpen(true)}
              className="relative h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-xl border-2 border-cyber-gold/60 bg-black/80 shadow-lg transition duration-300 hover:scale-105 hover:border-cyber-neonGreen cursor-pointer"
            >
              <Image
                src="/profile-new.png"
                alt="Lucas Montenegro"
                fill
                sizes="(max-width: 768px) 48px, 64px"
                className="object-cover"
                priority
              />
            </button>

            {/* Nombre + Rol */}
            <Link href="/" className="leading-tight">
              <div className="text-sm md:text-base font-semibold whitespace-nowrap">
                Lucas Montenegro
              </div>
              <div className="freelancer-role text-xs font-mono tracking-wider text-cyber-neonGreen/60 overflow-hidden border-r-2 border-cyber-neonGreen/80 whitespace-nowrap animate-typing w-[10ch]">
                Freelancer
              </div>
            </Link>
          </div>

          {/* DERECHA */}
          <nav className="flex flex-col items-start gap-2 pl-[60px] md:pl-[80px] lg:flex-row lg:items-center lg:justify-end lg:gap-5 lg:pl-0">
            <div className="flex items-center gap-3 md:gap-5">
              <span>
                <NavLink href="/about" onHover={play}>{t.nav.about}</NavLink>
              </span>
              <span>
                <NavLink href="/contact" onHover={play}>{t.nav.contact}</NavLink>
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="theme-toggle flex rounded-full border border-cyber-gold/70 bg-black/60 p-1" aria-label="Selector de tema">
                {themes.map(({ mode, icon, title }) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => changeTheme(mode)}
                    title={title}
                    aria-label={title}
                    aria-pressed={theme === mode}
                    className={`rounded-full px-2 py-1 text-xs transition ${
                      theme === mode
                        ? "bg-cyber-gold text-black shadow-sm"
                        : "text-cyber-gold hover:text-cyber-neonGreen"
                    }`}
                  >
                    <span aria-hidden>{icon}</span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={toggleLanguage}
                onMouseEnter={play}
                aria-label={t.nav.toggle}
                className="rounded-full border border-cyber-gold/70 bg-black/60 px-3 py-1.5 text-xs font-semibold tracking-widest text-cyber-gold transition hover:border-cyber-neonGreen/70 hover:text-cyber-neonGreen"
              >
                {language === "es" ? "🇪🇸/🇺🇸" : "🇺🇸/🇪🇸"}
              </button>
            </div>
          </nav>
          
        </div>
      </header>

      {/* Modal Imagen */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fadeIn px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-[500px] aspect-square animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/profile-new.png"
              alt="Lucas Montenegro"
              fill
              sizes="(max-width: 768px) 90vw, 500px"
              className="object-cover rounded-2xl border-2 border-cyber-gold/60 shadow-2xl"
              priority
            />

            {/* Botón cerrar visible */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-4 -right-4 bg-black border border-white/20 rounded-full w-10 h-10 text-white text-sm hover:border-cyber-neonGreen transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
