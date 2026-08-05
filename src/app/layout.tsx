import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/lib/i18n";
import Footer from "@/components/Footer";
import ThemeAtmosphere from "@/components/ThemeAtmosphere";

const siteUrl = "https://lu-dev-portfolio.vercel.app";
const siteTitle = "Lucas Montenegro - Full Stack Developer";
const siteDescription =
  "Portfolio digital de Lucas Montenegro, Full Stack Developer especializado en interfaces UX/UI, frontend escalable y productos web listos para producción.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`
  },
  description: siteDescription,
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.ico?v=2",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vista previa del portfolio de Lucas Montenegro"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"]
  }
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
