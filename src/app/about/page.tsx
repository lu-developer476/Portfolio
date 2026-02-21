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
            - <strong>Lenguajes:</strong> JavaScript (ES6+), TypeScript, HTML5, CSS3, Python, CoffeeScript.
          </p>
          <p className="text-white/85 leading-relaxed">
            - <strong>Frameworks y librerías:</strong> React, Next.js, TailwindCSS, Redux, Zustand, Django.
          </p>
          <p className="text-white/85 leading-relaxed">
            - <strong>Frontend avanzado:</strong> Componentización, responsive design, animaciones, sliders/carousels, efectos interactivos (Anime.js, Swiper.js, Three.js, overlays).
          </p>
          <p className="text-white/85 leading-relaxed">
            - <strong>Backend / full-stack:</strong> Firebase Admin / Firestore, API Routes en Next.js, integración con servicios de correo (Resend), manejo de Web Storage y localStorage.
          </p>
          <p className="text-white/85 leading-relaxed">
            - <strong>Herramientas y flujo de trabajo:</strong> Git/GitHub, Vercel, Figma, Postman, debugging avanzado, manejo de entornos locales y producción.
          </p>

          {/* Habilidades Blandas / Soft Skills */}
          <div className="mt-6">
            <h3 className="text-white/90 font-semibold mb-2">⚡ Habilidades Blandas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-white/75 text-sm">
              <span>Adaptación</span>
              <span>Colaboración en equipo</span>
              <span>Comunicación efectiva</span>
              <span>Cooperación</span>
              <span>Destreza</span>
              <span>Liderazgo</span>
              <span>Orden</span>
              <span>Organización</span>
              <span>Planificación</span>
              <span>Proactividad</span>
              <span>Productividad</span>
              <span>Puntualidad</span>
              <span>Redacción efectiva / persuasiva</span>
              <span>Resiliencia</span>
              <span>Resolución de conflictos</span>
              <span>Solidaridad</span>
              <span>Toma de decisiones en grupo</span>
              <span>Trabajo colaborativo</span>
              <span>Análisis y visualización de datos</span>
              <span>Creatividad</span>
              <span>Customer Experience</span>
            </div>
          </div>

          {/* Habilidades Técnicas / Hard Skills */}
          <div className="mt-6">
            <h3 className="text-white/90 font-semibold mb-2">🛠️ Habilidades Técnicas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-white/75 text-sm">
              <span>Desarrollo Web</span>
              <span>Diagramación de procesos</span>
              <span>Diseño UI / UX</span>
              <span>Finanzas</span>
              <span>Gestión de bases de datos</span>
              <span>Gestión de seguridad</span>
              <span>Gestión documental</span>
              <span>Gobernanza de datos</span>
              <span>Herramientas digitales</span>
              <span>Marketing</span>
              <span>Presentación de proyectos</span>
              <span>Programación</span>
              <span>Prototipado</span>
              <span>RCP, primeros auxilios y trauma</span>
              <span>Storytelling</span>
              <span>UI Editing</span>
              <span>User Research</span>
              <span>UX Writing</span>
            </div>
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
