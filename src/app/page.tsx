import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <div className="space-y-14">
      <Hero>
      <Section
        id="method"
        title="Metodología"
        subtitle="Mi enfoque combina frontend sólido con sensibilidad UX/UI. Desarrollo interfaces claras, escalables y orientadas a experiencia real, no solo a implementación técnica."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/35 p-5">
            <h3 className="text-lg font-semibold text-cyber-gold">Frontend</h3>
            <p className="mt-2 text-white/80">
              Construyo interfaces modernas con Next.js y React priorizando claridad visual, 
              estructura escalable y experiencia consistente. Trabajo con TypeScript para 
              garantizar mantenibilidad y previsibilidad en cada componente.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/35 p-5">
            <h3 className="text-lg font-semibold text-cyber-gold">UX / UI & Motion</h3>
            <p className="mt-2 text-white/80">
              Diseño experiencias enfocadas en usabilidad, jerarquía visual y feedback inmediato. 
              Utilizo animaciones y microinteracciones estratégicas para guiar al usuario 
              sin distraerlo ni sobrecargar la interfaz.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/35 p-5">
            <h3 className="text-lg font-semibold text-cyber-gold">Arquitectura</h3>
            <p className="mt-2 text-white/80">
              Integro soluciones backend ligeras con Firebase y API Routes en Vercel, 
              optimizando tiempos de desarrollo y manteniendo una base sólida 
              para escalar funcionalidades según necesidad del proyecto.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/35 p-5">
            <h3 className="text-lg font-semibold text-cyber-gold">Mentalidad de Producto</h3>
            <p className="mt-2 text-white/80">
              Soluciones orientadas a resultados. Exploro herramientas y lenguajes no convencionales 
              cuando aportan valor real al flujo de trabajo, priorizando eficiencia y claridad sobre modas pasajeras.
              Cada decisión técnica responde a claridad, rendimiento y experiencia del usuario final.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
