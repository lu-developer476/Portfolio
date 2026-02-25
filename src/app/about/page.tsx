"use client";

import Section from "@/components/Section";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import { 
  CSS3Icon,
  CoffeeScriptIcon,
  HTML5Icon,
  JavaScriptIcon,
  NodeJSIcon,
  PythonIcon,
  TypeScriptIcon,
  BootstrapIcon,
  DjangoIcon,
  NextJSIcon,
  SwiperJSIcon,
  AnimeJSIcon,
  ChartJSIcon,
  HowlerJSIcon,
  ReactIcon,
  SweetAlert2Icon,
  TailwindIcon,
  ThreeJSIcon,
  ToneJSIcon,
  OpenAIIcon,
  GeminiIcon,
  FirebaseIcon,
  GitHubIcon,
  N8nIcon,
  NetlifyIcon,
  RenderIcon,
  VercelIcon,
} from "@/icons";

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
        <div className="w-full max-w-full overflow-hidden rounded-xl border border-white/10 bg-black/35 p-4 sm:p-5 md:p-6 space-y-4 text-white/85 leading-7">
          {/* Languages */}
          <div className="flex items-center gap-6">
            <strong className="w-42 shrink-0">
              Languages
            </strong>
        
            <div className="flex items-center gap-4">
              <CSS3Icon className="w-7 h-7 word delay-0" />
              <CoffeeScriptIcon className="w-7 h-7 word delay-1" />
              <HTML5Icon className="w-7 h-7 word delay-2" />
              <JavaScriptIcon className="w-7 h-7 word delay-3" />
              <PythonIcon className="w-7 h-7 word delay-4" />
              <TypeScriptIcon className="w-7 h-7 word delay-5" />
              <NodeJSIcon className="w-7 h-7 word delay-6" />
            </div>
          </div>
        
          {/* Frameworks */}
          <div className="flex items-center gap-6 mt-4">
            <strong className="w-42 shrink-0">
              Frameworks
            </strong>
        
            <div className="flex items-center gap-4">
              <BootstrapIcon className="w-7 h-7 word delay-7" />
              <DjangoIcon className="w-7 h-7 word delay-8" />
              <NextJSIcon className="w-7 h-7 word delay-9" />
              <SwiperJSIcon className="w-7 h-7 word delay-10" />
            </div>
          </div>
        
          {/* Libraries */}
          <div className="flex items-center gap-6 mt-4">
            <strong className="w-42 shrink-0">
              Libraries
            </strong>
        
            <div className="flex items-center gap-4">
              <ReactIcon className="w-7 h-7 word delay-11" />
              <TailwindIcon className="w-7 h-7 word delay-12" />
              <AnimeJSIcon className="w-7 h-7 word delay-13" />
              <ChartJSIcon className="w-7 h-7 word delay-14" />
              <HowlerJSIcon className="w-7 h-7 word delay-15" />
              <SweetAlert2Icon className="w-7 h-7 word delay-16" />
              <ThreeJSIcon className="w-7 h-7 word delay-17" />
              <ToneJSIcon className="w-7 h-7 word delay-18" />
            </div>
          </div>
        
          {/* Frontend */}
          <div className="flex items-start gap-6 mt-4">
            <strong className="w-42 shrink-0">
              Frontend
            </strong>
        
            <span className="word delay-19">
              Animaciones, Componentes, Interactive, Responsive, Carousels
            </span>
          </div>
        
          {/* Backend */}
          <div className="flex items-start gap-6 mt-4">
            <strong className="w-42 shrink-0">
              Backend
            </strong>
        
            <span className="word delay-20">
              API Design, Debugging, Dev & Prod, Email APIs, Web Storage
            </span>
          </div>
        
          {/* AI */}
          <div className="flex items-center gap-6 mt-4">
            <strong className="w-42 shrink-0">
              AI
            </strong>
        
            <div className="flex items-center gap-4">
              <OpenAIIcon className="w-7 h-7 word delay-21" />
              <GeminiIcon className="w-7 h-7 word delay-22" />
            </div>
          </div>
        
          {/* Hosting & Tools */}
          <div className="flex items-center gap-6 mt-4">
            <strong className="w-42 shrink-0">
              Hosting & Tools
            </strong>
        
            <div className="flex items-center gap-4">
              <FirebaseIcon className="w-7 h-7 word delay-23" />
              <GitHubIcon className="w-7 h-7 word delay-24" />
              <N8nIcon className="w-7 h-7 word delay-25" />
              <NetlifyIcon className="w-7 h-7 word delay-26" />
              <RenderIcon className="w-7 h-7 word delay-27" />
              <VercelIcon className="w-7 h-7 word delay-28" />
            </div>
          </div>
        </div> 
     
        <hr className="my-6 border-t border-white/20" />
      
        <div className="mt-6">
          <h3 className="text-white/90 font-semibold mb-2">
            <span className="text-lg font-semibold text-cyber-gold">💡 Soft Skills</span>
          </h3>
      
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-cyber-neonGreen/60">
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
      
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-cyber-neonGreen/60">
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
