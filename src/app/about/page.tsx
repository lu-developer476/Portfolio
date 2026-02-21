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
            <span className="word delay-0">CSS3, </span>
            <span className="word delay-1">CoffeeScript, </span>
            <span className="word delay-2">HTML5, </span>
            <span className="word delay-3">JavaScript (ES6+), </span>
            <span className="word delay-4">Python, </span>
            <span className="word delay-5">TypeScript </span>
          </p>
      
          <p className="text-white/85 leading-7">
            • <strong>Frameworks y librerías:</strong>{" "}
            <span className="word delay-6">Django, </span>
            <span className="word delay-7">Next.js, </span>
            <span className="word delay-8">React, </span>
            <span className="word delay-9">Redux, </span>
            <span className="word delay-10">TailwindCSS, </span>
            <span className="word delay-11">Zustand </span>
          </p>
      
          <p className="text-white/85 leading-7">
            • <strong>Frontend avanzado:</strong>{" "}
            <span className="word delay-12">Animaciones, </span>
            <span className="word delay-13">Componentización, </span>
            <span className="word delay-14">Efectos Interactivos, </span>
            <span className="word delay-15">Responsive Design, </span>
            <span className="word delay-16">Sliders / </span>
            <span className="word delay-17">Carousels </span>
          </p>
      
          <p className="text-white/85 leading-7">
            • <strong>Backend / Full Stack:</strong>{" "}
            <span className="word delay-18">API Routes en Next.js, </span>
            <span className="word delay-19">Firebase Admin / Firestore, </span>
            <span className="word delay-20">Servicios de correo, </span>
            <span className="word delay-21">localStorage y </span>
            <span className="word delay-22">Web Storage </span>
          </p>
      
          <p className="text-white/85 leading-7">
            • <strong>Herramientas y flujo de trabajo:</strong>{" "}
            <span className="word delay-23">Debugging avanzado, </span>
            <span className="word delay-24">Figma, </span>
            <span className="word delay-25">Git / GitHub, </span>
            <span className="word delay-26">Gitlab, </span>
            <span className="word delay-27">Entornos locales y </span>
            <span className="word delay-28">Producción </span>
          </p>
      
        </div>
      
        <hr className="my-6 border-t border-white/20" />
      
        <div className="mt-6">
          <h3 className="text-white/90 font-semibold mb-2">
            <span className="text-lg font-semibold text-cyber-gold">💡 Soft Skills</span>
          </h3>
      
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <span className="word delay-29">Adaptación </span>
            <span className="word delay-30">Análisis de datos </span>
            <span className="word delay-31">Colaboración </span>
            <span className="word delay-32">Comunicación </span>
            <span className="word delay-33">Creatividad </span>
            <span className="word delay-34">Mediación </span>
            <span className="word delay-35">Proactividad </span>
            <span className="word delay-36">Sinergia </span>
          </div>
        </div>
      
        <hr className="my-6 border-t border-white/25" />
      
        <div className="mt-6">
          <h3 className="text-white/90 font-semibold mb-2">
            <span className="text-lg font-semibold text-cyber-gold">💻 Hard Skills</span>
          </h3>
      
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <span className="word delay-37">AI Automation </span>
            <span className="word delay-38">Agentic Experience </span>
            <span className="word delay-39">Customer Experience </span>
            <span className="word delay-40">UI / UX </span>
            <span className="word delay-41">Flujo de procesos </span>
            <span className="word delay-42">Bases de datos </span>
            <span className="word delay-43">Herramientas digitales </span>
            <span className="word delay-44">Maquetación Web </span>
            <span className="word delay-45">Prototipado </span>
            <span className="word delay-46">Storytelling </span>
            <span className="word delay-47">UI Editing </span>
            <span className="word delay-48">UX Writing </span>
            <span className="word delay-49">User Research </span>
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
