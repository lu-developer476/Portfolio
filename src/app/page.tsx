import Hero from "@/components/Hero";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <div className="space-y-14">
      <Hero />
      <Section
        id="projects"
        title="Proyectos"
        subtitle="Una selección. Lo importante: shipping, no excusas."
      >
        <ProjectsCarousel />
      </Section>
      <Section
        id="stack"
        title="Stack"
        subtitle="React + Next.js + Tailwind, con condimento cyberpunk."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/35 p-5">
            <h3 className="text-lg font-semibold text-cyber-gold">Frontend</h3>
            <p className="mt-2 text-white/80">
              Next.js (App Router), React, TypeScript, Tailwind CSS, Swiper.js, Anime.js.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/35 p-5">
            <h3 className="text-lg font-semibold text-cyber-gold">3D & Motion</h3>
            <p className="mt-2 text-white/80">
              Three.js para atmósfera, animaciones sutiles para guiar la mirada (sin marearte).
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/35 p-5">
            <h3 className="text-lg font-semibold text-cyber-gold">Backend ligero</h3>
            <p className="mt-2 text-white/80">
              Firebase (Firestore) desde API Routes en Vercel. Contacto que realmente guarda mensajes.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/35 p-5">
            <h3 className="text-lg font-semibold text-cyber-gold">Extra</h3>
            <p className="mt-2 text-white/80">
              CoffeeScript (sí, existe) para generar contenido compilado automáticamente.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
