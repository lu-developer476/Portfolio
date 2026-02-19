import Section from "@/components/Section";
import ProjectsCarousel from "@/components/ProjectsCarousel";

export default function AboutPage() {
  return (
    <div className="space-y-14">
      <Section
        id="about"
        title="Sobre mí"
        subtitle="Frontend dev que disfruta construir experiencias claras, rápidas y con intención."
      >
        <div className="rounded-xl border border-white/10 bg-black/35 p-6">
          <p className="text-white/85 leading-relaxed">
            Me gusta crear interfaces que se sientan vivas. Que respondan bien, que comuniquen claro
            y que no necesiten explicación. Trabajo con React y Next.js porque me permiten construir
            cosas sólidas sin sacrificar detalle.
          </p>

          <p className="mt-4 text-white/85 leading-relaxed">
            Más allá de mi especialización en frontend, me adapto a las necesidades de cada proyecto y a los objetivos del cliente. 
            Me interesa entender el contexto, proponer mejoras cuando hace falta y aportar soluciones que realmente sumen valor. 
            Trabajo de forma proactiva, buscando que cada decisión técnica esté alineada con el resultado que se quiere lograr.
          </p>

          <p className="mt-4 text-white/85 leading-relaxed">
            Disfruto el proceso completo: desde la idea hasta el deploy. La satisfacción
            está en transformar una idea en algo concreto que realmente funciona.
          </p>
        </div>
      </Section>

      <Section
        id="projects"
        title="Proyectos"
        subtitle="Cosas que construí, probé, mejoré… y finalmente publiqué."
      >
        <ProjectsCarousel expanded />
      </Section>
    </div>
  );
}
