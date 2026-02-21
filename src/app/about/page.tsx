import Section from "@/components/Section";
import ProjectsCarousel from "@/components/ProjectsCarousel";

export default function AboutPage() {
  return (
    <div className="space-y-14">
      <Section
        id="about"
        title="¿Quién soy?"
        subtitle="Soy una persona curiosa y exigente conmigo mismo que, tras incursionar en éste mundo, encontró un espacio para canalizar las ideas y convertirlas en algo real, teniendo el desafío diario de resolver y mejorarse constantemente."
      >
        <div className="rounded-xl border border-white/10 bg-black/35 p-6">
          <p className="text-white/85 leading-7">
            Me gusta crear interfaces que se sientan vivas. Que respondan bien, que comuniquen claro
            y que no necesiten explicación. Trabajo con React y Next.js porque me permiten construir
            cosas sólidas sin sacrificar detalle.
          </p>

          <p className="mt-4 text-white/85 leading-7">
            Más allá de mi especialización en frontend, me adapto a las necesidades de cada proyecto y a los objetivos del cliente. 
            Me interesa entender el contexto, proponer mejoras cuando hace falta y aportar soluciones que realmente sumen valor. 
            Trabajo de forma proactiva, buscando que cada decisión técnica esté alineada con el resultado que se quiere lograr.
          </p>

          <p className="mt-4 text-white/85 leading-7">
            Disfruto el proceso completo: desde la idea hasta el deploy. La satisfacción
            está en transformar una idea en algo concreto que realmente funciona.
          </p>
        </div>
      </Section>

      <Section
        id="skills"
        title="Aptitudes y Conocimientos"
        subtitle="Herramientas, tecnologías y habilidades que he adquirido y aplicado en proyectos reales."
      >
        <div className="rounded-xl border border-white/10 bg-black/35 p-6 space-y-3">
      
          <p className="text-white/85 leading-7">
            • <strong>Lenguajes:</strong>{" "}
            <span className="word delay-0">
              CSS3, CoffeeScript, HTML5, JavaScript (ES6+), Python, TypeScript
            </span>
          </p>
      
          <p className="text-white/85 leading-7">
            • <strong>Frameworks y librerías:</strong>{" "}
            <span className="word delay-1">
              Django, Next.js, React, Redux, TailwindCSS, Zustand
            </span>
          </p>
      
          <p className="text-white/85 leading-7">
            • <strong>Frontend avanzado:</strong>{" "}
            <span className="word delay-2">
              Animaciones, Componentización, Efectos Interactivos, Responsive Design, Sliders / Carousels
            </span>
          </p>
      
          <p className="text-white/85 leading-7">
            • <strong>Backend / Full Stack:</strong>{" "}
            <span className="word delay-3">
              API Routes, Firebase Admin / Firestore, Servicios de correo, localStorage, Web Storage
            </span>
          </p>
      
          <p className="text-white/85 leading-7">
            • <strong>Herramientas y Workflows:</strong>{" "}
            <span className="word delay-4">
              Debugging, Figma, Git / GitHub, Gitlab, Entornos locales, Producción
            </span>
          </p>
      
        </div>
      
        <hr className="my-6 border-t border-white/20" />
      
        <div className="mt-6">
          <h3 className="text-white/90 font-semibold mb-2">
            <span className="text-lg font-semibold text-cyber-gold">💡 Soft Skills</span>
          </h3>
      
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <span className="word delay-5">Adaptación </span>
            <span className="word delay-6">Análisis de datos </span>
            <span className="word delay-7">Colaboración </span>
            <span className="word delay-8">Comunicación </span>
            <span className="word delay-9">Creatividad </span>
            <span className="word delay-10">Mediación </span>
            <span className="word delay-11">Proactividad </span>
            <span className="word delay-12">Sinergia </span>
          </div>
        </div>
      
        <hr className="my-6 border-t border-white/25" />
      
        <div className="mt-6">
          <h3 className="text-white/90 font-semibold mb-2">
            <span className="text-lg font-semibold text-cyber-gold">💻 Hard Skills</span>
          </h3>
      
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <span className="word delay-13">AI Automation </span>
            <span className="word delay-14">Agentic Experience </span>
            <span className="word delay-15">Customer Experience </span>
            <span className="word delay-16">UI/UX </span>
            <span className="word delay-17">Flujo de procesos </span>
            <span className="word delay-18">Bases de datos </span>
            <span className="word delay-19">Herramientas digitales </span>
            <span className="word delay-20">Maquetación Web </span>
            <span className="word delay-21">Prototipado </span>
            <span className="word delay-22">Storytelling </span>
            <span className="word delay-23">UI Editing </span>
            <span className="word delay-24">UX Writing </span>
            <span className="word delay-25">User Research </span>
          </div>
        </div>
      </Section>
      
      <Section
        id="projects"
        title="Trabajos realizados"
        subtitle="El resultado de entender, crear, adaptar y perfeccionar… listo para ser explorado."
      >
        <ProjectsCarousel expanded />
      </Section>
    </div>
  );
}
