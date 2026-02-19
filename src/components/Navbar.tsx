import Link from "next/link";
import CyberButton from "./CyberButton";
import { profile } from "@/config/profile";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-sm text-white/75 hover:text-white transition underline decoration-white/10 underline-offset-8 hover:decoration-cyber-gold/60"
  >
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-cyber-gold/40 bg-black/70">
            <span className="text-cyber-gold font-bold">LM</span>
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Lucas Montenegro</div>
            <div className="text-xs text-white/60">Frontend Developer | UX-Driven Interfaces</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="/about">Sobre mí</NavLink>
          <NavLink href="/contact">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}
