"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-sm text-white/75 hover:text-white transition underline decoration-white/10 underline-offset-8 hover:decoration-cyber-gold/60"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/55 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            
            {/* Avatar clickeable */}
            <button
              onClick={() => setOpen(true)}
              className="relative h-10 w-10 overflow-hidden rounded-lg border border-cyber-gold/40 bg-black/70 transition duration-300 hover:scale-105 hover:border-cyber-neonGreen/70"
            >
              <Image
                src="/profile-new.png"
                alt="Lucas Montenegro"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </button>

            <Link href="/" className="leading-tight">
              <div className="text-sm font-semibold">Lucas Montenegro</div>
              <div className="text-xs text-white/60">
                Frontend Developer | UX-Driven Interfaces
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="/about">Sobre mí</NavLink>
            <NavLink href="/contact">Contacto</NavLink>
          </nav>
        </div>
      </header>

      {/* Modal Imagen */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-[90vw] max-w-[500px] aspect-square animate-[scaleIn_.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/profile-new.png"
              alt="Lucas Montenegro"
              fill
              sizes="500px"
              className="object-cover rounded-xl border border-cyber-gold/40 shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
