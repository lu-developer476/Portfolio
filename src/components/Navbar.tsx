"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NavLink = ({
  href,
  children,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-xs md:text-sm text-white/70 hover:text-white transition underline decoration-white/10 underline-offset-8 hover:decoration-cyber-gold/60"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6 py-4 md:py-5 min-h-[72px] md:min-h-[88px]">

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
              <div className="text-xs text-cyber-neonGreen/60 font-mono tracking-wider">
                Freelancer Frontend Developer • UX Interfaces
              </div>
            </Link>
          </div>

          {/* DERECHA */}
          <nav className="flex items-center gap-4 md:gap-8 text-sx">
            <NavLink href="/about">Sobre mí</NavLink>
            <NavLink href="/contact">Contacto</NavLink>
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
