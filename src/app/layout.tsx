import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/lib/i18n";
import Footer from "@/components/Footer";
import ThemeAtmosphere from "@/components/ThemeAtmosphere";

export const metadata: Metadata = {
  title: "FS Dev - UX Interfaces",
  description: "Portfolio digital",
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-cyber-ink text-white">
        <LanguageProvider>
          <div className="relative min-h-screen bg-cyber-gradient">
            <div className="noise" />
            <ThemeAtmosphere />
            <Navbar />
            <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-8">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
