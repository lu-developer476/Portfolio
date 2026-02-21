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
        id="skills"
        title="Aptitudes y Conocimientos"
        subtitle="Herramientas, tecnologías y habilidades que he adquirido y aplicado en proyectos reales."
      >
        <div className="rounded-xl border border-white/10 bg-black/35 p-6 space-y-3">
          <p className="text-white/85 leading-relaxed">
            • <strong>Lenguajes:</strong> CSS3, CoffeeScript, HTML5, JavaScript (ES6+), Python, TypeScript.
          </p>
          <p className="text-white/85 leading-relaxed">
            • <strong>Frameworks y librerías:</strong> Django, Next.js, React, Redux, TailwindCSS, Zustand.
          </p>
          <p className="text-white/85 leading-relaxed">
            • <strong>Frontend avanzado:</strong> Animaciones, Componentización, Efectos Interactivos (Anime.js, Chart.js, Swiper.js, Three.js, overlays), Responsive Design, Sliders / Carousels.
          </p>
          <p className="text-white/85 leading-relaxed">
            • <strong>Backend / Full Stack:</strong> API Routes en Next.js, Firebase Admin / Firestore, integración con servicios de correo (Resend), Manejo de localStorage y Web Storage.
          </p>
          <p className="text-white/85 leading-relaxed">
            • <strong>Herramientas y flujo de trabajo:</strong> Debugging avanzado, Figma, Git / GitHub, Gitlab, Manejo de entornos locales y producción (Netlify, Postman, Vercel).
          </p>
        </div>
      
        {/* Línea separadora */}
        <hr className="my-6 border-t border-white/20" />
      
        {/* Habilidades Blandas / Soft Skills */}
        <div className="mt-6">
          <h3 className="text-white/90 font-semibold mb-2">
            <span className="animate-typing-no-cursor">💡 Habilidades Blandas</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-white/75 text-sm">
            <span>Adaptación</span>
            <span>Análisis y visualización de datos</span>
            <span>Colaboración en equipo</span>
            <span>Comunicación efectiva</span>
            <span>Creatividad</span>
            <span>Mediación</span>
            <span>Proactividad</span>
            <span>Sinergia</span>
          </div>
        </div>
      
        {/* Línea separadora */}
        <hr className="my-6 border-t border-white/25" />
      
        {/* Habilidades Técnicas / Hard Skills */}
        <div className="mt-6">
          <h3 className="text-white/90 font-semibold mb-2">
            <span className="animate-typing-no-cursor">💻 Habilidades Técnicas</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-white/75 text-sm">
            <span>AI Automation</span>
            <span>Agentic Experience</span>
            <span>Customer Experience</span>
            <span>Diseño UI / UX</span>
            <span>Flujo de procesos</span>
            <span>Gestión de bases de datos</span>
            <span>Herramientas digitales</span>
            <span>Maquetación Web</span>
            <span>Prototipado</span>
            <span>Storytelling</span>
            <span>UI Editing</span>
            <span>UX Writing</span>
            <span>User Research</span>
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
