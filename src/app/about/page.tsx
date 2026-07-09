"use client";

import Section from "@/components/Section";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import {
  AlpineJSIcon,
  AnimeJSIcon,
  BootstrapIcon,
  CanvaIcon,
  ChartJSIcon,
  CSS3Icon,
  CoffeeScriptIcon,
  CropperJSIcon,
  DjangoIcon,
  DrawIoIcon,
  ElevenLabsIcon,
  FigmaIcon,
  FirebaseIcon,
  FramerIcon,
  GeminiIcon,
  GitHubIcon,
  GitlabIcon,
  HowlerJSIcon,
  HTML5Icon,
  JavaScriptIcon,
  N8nIcon,
  NetlifyIcon,
  NextJSIcon,
  NodeJSIcon,
  OpenAIIcon,
  PowerBiIcon,
  PhotoshopIcon,
  PythonIcon,
  ReactIcon,
  RenderIcon,
  ResendIcon,
  StackBlitzIcon,
  SupabaseIcon,
  SQLIcon,
  SwiperJSIcon,
  SweetAlert2Icon,
  TailwindIcon,
  ThreeJSIcon,
  ToneJSIcon,
  TypeScriptIcon,
  V0Icon,
  VercelIcon,
  WhimsicalIcon,
} from "@/icons";
import { useLanguage } from "@/lib/i18n";

type TechIconProps = {
  label: string;
  icon: React.ReactNode;
};

function TechIcon({ label, icon }: TechIconProps) {
  return (
    <span className="flex w-16 flex-col items-center gap-1 text-center text-[0.65rem] leading-tight text-white/70">
      {icon}
      <span>{label}</span>
    </span>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-14">
      <Section
        id="about"
        title={t.about.title}
        subtitle={t.about.subtitle}
      >
        <div className="rounded-xl border border-white/10 bg-black/35 p-6">
          <p className="light-electric-blue text-white/85 leading-7">
            {t.about.paragraphs[0]}
          </p>

          <p className="light-electric-blue mt-4 text-white/85 leading-7">
            {t.about.paragraphs[1]}
          </p>

          <p className="light-electric-blue mt-4 text-white/85 leading-7">
            {t.about.paragraphs[2]}
          </p>
        </div>
      </Section>

      <Section
        id="skills"
        title={t.about.skillsTitle}
        subtitle={t.about.skillsSubtitle}
      >
        <div className="w-full max-w-full overflow-hidden rounded-xl border border-white/10 bg-black/35 p-4 sm:p-5 md:p-6 space-y-4 text-white/85 leading-7">
          {/* Languages */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <strong className="sm:w-42 shrink-0">
              Languages
            </strong>

            <div className="flex flex-wrap items-start gap-4">
              <TechIcon label="CSS3" icon={<CSS3Icon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="CoffeeScript" icon={<CoffeeScriptIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="HTML5" icon={<HTML5Icon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="JavaScript" icon={<JavaScriptIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="Node.js" icon={<NodeJSIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="Python" icon={<PythonIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="SQL Server" icon={<SQLIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="TypeScript" icon={<TypeScriptIcon className="w-7 h-7 word delay-0" />} />
            </div>
          </div>

          {/* Frameworks */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <strong className="sm:w-42 shrink-0">
              Frameworks
            </strong>

            <div className="flex flex-wrap items-start gap-4">
              <TechIcon label="Alpine.js" icon={<AlpineJSIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="Bootstrap" icon={<BootstrapIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="Django" icon={<DjangoIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="Next.js" icon={<NextJSIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="Swiper" icon={<SwiperJSIcon className="w-7 h-7 word delay-0" />} />
            </div>
          </div>

          {/* Libraries */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <strong className="sm:w-42 shrink-0">
              Libraries
            </strong>

            <div className="flex flex-wrap items-start gap-4">
              <TechIcon label="Anime.js" icon={<AnimeJSIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="Chart.js" icon={<ChartJSIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="Cropper.js" icon={<CropperJSIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="Howler.js" icon={<HowlerJSIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="React" icon={<ReactIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="SweetAlert2" icon={<SweetAlert2Icon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="Tailwind" icon={<TailwindIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="Three.js" icon={<ThreeJSIcon className="w-7 h-7 word delay-0" />} />
              <TechIcon label="Tone.js" icon={<ToneJSIcon className="w-7 h-7 word delay-0" />} />
            </div>
          </div>

          {/* Frontend */}
          <div className="flex items-start gap-6">
            <strong className="w-42 shrink-0">
              Frontend
            </strong>

            <span className="light-electric-blue word delay-1">
              {t.about.frontend}
            </span>
          </div>

          {/* Backend */}
          <div className="flex items-start gap-6">
            <strong className="w-42 shrink-0">
              Backend
            </strong>

            <span className="light-electric-blue word delay-2">
              API Design, Debugging, Dev & Prod, Email APIs, Web Storage
            </span>
          </div>

          {/* AI */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <strong className="sm:w-42 shrink-0">
              AI
            </strong>

            <div className="flex flex-wrap items-start gap-4">
              <TechIcon label="ElevenLabs" icon={<ElevenLabsIcon className="w-7 h-7 word delay-3" />} />
              <TechIcon label="Gemini" icon={<GeminiIcon className="w-7 h-7 word delay-3" />} />
              <TechIcon label="n8n" icon={<N8nIcon className="w-7 h-7 word delay-3" />} />
              <TechIcon label="OpenAI" icon={<OpenAIIcon className="w-7 h-7 word delay-3" />} />
              <TechIcon label="v0" icon={<V0Icon className="w-7 h-7 word delay-3" />} />
            </div>
          </div>

          {/* Hosting & Tools */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <strong className="sm:w-42 shrink-0">
              Hosting & Tools
            </strong>

            <div className="flex flex-wrap items-start gap-4">
              <TechIcon label="Canva" icon={<CanvaIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="draw.io" icon={<DrawIoIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="Figma" icon={<FigmaIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="Firebase" icon={<FirebaseIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="Framer" icon={<FramerIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="GitHub" icon={<GitHubIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="GitLab" icon={<GitlabIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="Netlify" icon={<NetlifyIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="Photoshop" icon={<PhotoshopIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="Power BI" icon={<PowerBiIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="Render" icon={<RenderIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="Resend" icon={<ResendIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="StackBlitz" icon={<StackBlitzIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="Supabase" icon={<SupabaseIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="Vercel" icon={<VercelIcon className="w-7 h-7 word delay-4" />} />
              <TechIcon label="Whimsical" icon={<WhimsicalIcon className="w-7 h-7 word delay-4" />} />
            </div>
          </div>
        </div>

        <hr className="my-6 border-t border-white/20" />

        <div className="mt-6">
          <h3 className="text-white/90 font-semibold mb-2">
            <span className="text-lg font-semibold text-cyber-gold">💡 Soft Skills</span>
          </h3>

          <div className="skills-list grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-cyber-neonGreen/60">
            {t.about.softSkills.map((skill, index) => (
              <span key={skill} className="word delay-4">{skill}</span>
            ))}
          </div>
        </div>

        <hr className="my-6 border-t border-white/25" />

        <div className="mt-6">
          <h3 className="text-white/90 font-semibold mb-2">
            <span className="text-lg font-semibold text-cyber-gold">💻 Hard Skills</span>
          </h3>

          <div className="skills-list grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-cyber-neonGreen/60">
            {t.about.hardSkills.map((skill, index) => (
              <span key={skill} className="word delay-4">{skill}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="projects"
        title={t.about.projectsTitle}
        subtitle={t.about.projectsSubtitle}
      >
        <ProjectsCarousel expanded />
      </Section>
    </div>
  );
}
