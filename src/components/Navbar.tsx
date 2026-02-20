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
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 min-h-[88px]">
          
          <div className="flex items-center gap-4">
            
            {/* Avatar GRANDE */}
            <button
              onClick={() => setOpen(true)}
              className="relative h-16 w-16 overflow-hidden rounded-xl border-2 border-cyber-gold/60 bg-black/80 shadow-lg transition duration-300 hover:scale-105 hover:border-cyber-neonGreen cursor-pointer"
            >
              <Image
                src="/profile-new.png"
                alt="Lucas Montenegro"
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
            </button>

            <Link href="/" className="leading-tight">
              <div className="text-base font-semibold">Lucas Montenegro</div>
              <div className="text-sm text-white/60">
                Freelancer Frontend Developer | UX-Driven Interfaces
              </div>
            </Link>
          </div>

          <nav className="flex items-center gap-4 md:gap-8">
            <NavLink href="/about">Sobre mí</NavLink>
            <NavLink href="/contact">Contacto</NavLink>
          </nav>

        </div>
      </header>

      {/* Modal Imagen */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-[90vw] max-w-[600px] aspect-square animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/profile-new.png"
              alt="Lucas Montenegro"
              fill
              sizes="600px"
              className="object-cover rounded-2xl border-2 border-cyber-gold/60 shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
