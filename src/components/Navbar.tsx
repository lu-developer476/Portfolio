"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useHoverSound } from "@/lib/useHoverSound";
import { useLanguage } from "@/lib/i18n";
import WorldClock from "@/components/WorldClock";

type ThemeMode = "dark" | "light" | "beige" | "cloud" | "galaxy";

const VALID_THEMES: ThemeMode[] = ["dark", "light", "beige", "cloud", "galaxy"];

const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "dark";

  const storedTheme = window.localStorage.getItem("portfolio-theme") as ThemeMode | null;
  return storedTheme && VALID_THEMES.includes(storedTheme) ? storedTheme : "dark";
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [clockOpen, setClockOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const { play } = useHoverSound("bleep");
  const { language, toggleLanguage, t } = useLanguage();
  const themes: Array<{ mode: ThemeMode; label: string; icon: string; title: string }> = [
    {
      mode: "dark",
      label: language === "es" ? "Oscuro" : "Dark",
      icon: "🌑",
      title: language === "es" ? "Modo oscuro" : "Dark mode"
    },
    {
      mode: "light",
      label: language === "es" ? "Claro" : "Light",
      icon: "🌊",
      title: language === "es" ? "Modo claro" : "Light mode"
    },
    { mode: "beige", label: "Beige", icon: "🏜️", title: language === "es" ? "Modo beige" : "Beige mode" },
    {
      mode: "cloud",
      label: language === "es" ? "Neblina" : "Cloud",
      icon: "🌨️",
      title: language === "es" ? "Modo neblina" : "Cloud mode"
    },
    {
      mode: "galaxy",
      label: language === "es" ? "Galaxia" : "Galaxy",
      icon: "🌌",
      title: language === "es" ? "Modo galaxia" : "Galaxy mode"
    }
  ];

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMenuOpen(false);
        setClockOpen(false);
      }
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

  const handleLanguageToggle = () => {
    toggleLanguage();
    play();
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-4 md:px-6 md:py-5 lg:min-h-[88px]">

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
          <nav className="relative ml-auto flex items-center justify-end gap-3 md:gap-5">
            <button
              type="button"
              onClick={() => {
                setMenuOpen((current) => !current);
                play();
              }}
              onMouseEnter={play}
              aria-label={language === "es" ? "Abrir selector de idioma y tema" : "Open language and theme selector"}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cyber-gold/70 bg-black/70 text-xl leading-none text-cyber-gold shadow-[0_0_18px_rgba(250,204,21,0.16)] transition hover:border-cyber-neonGreen hover:text-cyber-neonGreen"
            >
              ☰
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-12 z-50 w-[min(18rem,calc(100vw-2rem))] rounded-2xl border border-cyber-gold/60 bg-black/95 p-3 shadow-[0_0_28px_rgba(250,204,21,0.22)] backdrop-blur">
                <div className="space-y-4">
                  <div>
                    <div className="grid gap-2">
                      <Link
                        href="/about"
                        onClick={() => setMenuOpen(false)}
                        onMouseEnter={play}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold tracking-widest text-cyber-gold transition hover:border-cyber-neonGreen/70 hover:text-cyber-neonGreen"
                      >
                        {t.nav.about}
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        onMouseEnter={play}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold tracking-widest text-cyber-gold transition hover:border-cyber-neonGreen/70 hover:text-cyber-neonGreen"
                      >
                        {t.nav.contact}
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleLanguageToggle}
                      aria-label={t.nav.toggle}
                      className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold tracking-widest text-cyber-gold transition hover:border-cyber-neonGreen/70 hover:text-cyber-neonGreen"
                    >
                      <span>{t.languageName}</span>
                      <span aria-hidden>{language === "es" ? "🇪🇸 → 🇺🇸" : "🇺🇸 → 🇪🇸"}</span>
                    </button>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">{t.nav.modes}</p>
                    <Swiper
                      modules={[Navigation]}
                      navigation
                      spaceBetween={10}
                      slidesPerView={1}
                      className="projects-arrow-carousel modes-card-carousel"
                      aria-label={language === "es" ? "Selector de tema" : "Theme selector"}
                    >
                      {themes.map(({ mode, label, icon, title }) => (
                        <SwiperSlide key={mode} className="h-auto">
                          <button
                            type="button"
                            onClick={() => changeTheme(mode)}
                            title={title}
                            aria-label={title}
                            aria-pressed={theme === mode}
                            className={`mode-option mode-option-${mode} flex min-h-24 w-full flex-col items-center justify-center gap-2 rounded-xl border px-2 py-3 text-[12px] font-semibold transition ${
                              theme === mode
                                ? "mode-option-active border-white/80 bg-white/5"
                                : "border-white/10 bg-white/5 text-cyber-gold hover:border-cyber-neonGreen/70 hover:text-cyber-neonGreen"
                            }`}
                          >
                            <span aria-hidden className="text-2xl leading-none">{icon}</span>
                            <span>{label}</span>
                          </button>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setClockOpen(true);
                        setMenuOpen(false);
                        play();
                      }}
                      onMouseEnter={play}
                      className="flex w-full items-center justify-between rounded-xl border border-cyber-gold/60 bg-white/5 px-3 py-2 text-xs font-semibold tracking-widest text-cyber-gold transition hover:border-cyber-neonGreen/70 hover:text-cyber-neonGreen"
                    >
                      <span>{t.nav.worldClock}</span>
                      <span aria-hidden>🕓</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
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

      <WorldClock open={clockOpen} onClose={() => setClockOpen(false)} />
    </>
  );
}
