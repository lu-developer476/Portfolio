import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Lucas Montenegro — Frontend Developer",
  description: "Portfolio profesional."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-cyber-ink text-white">
        <div className="relative min-h-screen bg-cyber-gradient">
          <div className="noise" />
          <div className="cyber-grid absolute inset-0" />
          <Navbar />
          <main className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-8">
            {children}
          </main>
          <footer className="relative border-t border-white/10 py-10">
            <div className="mx-auto max-w-6xl px-4 text-sm text-white/70">
                <span className="text-cyber-gold">©</span> {new Date().getFullYear()} Todos los derechos reservados | Lucas Montenegro • Built with Next.js + Tailwind
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
