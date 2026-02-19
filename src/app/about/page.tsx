import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section
      id="about"
      title="Sobre mí"
      subtitle="Frontend dev: diseño, detalle y obsesión sana por performance."
    >
      <div className="rounded-xl border border-white/10 bg-black/35 p-6">
        <p className="text-white/85 leading-relaxed">
          Soy Lucas Leonel Montenegro Burgos. Construyo interfaces modernas con React/Next.js y las dejo listas para producción:
          accesibilidad, estados claros, feedback inmediato y un look que no sea “template genérico”.
        </p>
        <p className="mt-4 text-white/85 leading-relaxed">
          Este portfolio está armado para que lo ajustes directamente en tu repo de GitHub y lo despliegues en Vercel sin drama.
          El formulario guarda mensajes en Firestore, y la estética es cyberpunk: violeta + dorado, con acentos rojo/verde.
        </p>
      </div>
    </Section>
  );
}
