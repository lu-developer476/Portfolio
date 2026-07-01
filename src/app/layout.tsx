import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/lib/i18n";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frontend Developer •  UX Interfaces",
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
            <div className="cyber-grid absolute inset-0" />
            <Navbar />
            <main className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-8">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
