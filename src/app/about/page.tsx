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
          <p className="text-white/85 leading-7">
            {t.about.paragraphs[0]}
          </p>

          <p className="mt-4 text-white/85 leading-7">
            {t.about.paragraphs[1]}
          </p>

          <p className="mt-4 text-white/85 leading-7">
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

            <div className="flex flex-wrap items-center gap-4">
              <CSS3Icon className="w-7 h-7 word delay-0" />
              <CoffeeScriptIcon className="w-7 h-7 word delay-0" />
              <HTML5Icon className="w-7 h-7 word delay-0" />
              <JavaScriptIcon className="w-7 h-7 word delay-0" />
              <NodeJSIcon className="w-7 h-7 word delay-0" />
              <PythonIcon className="w-7 h-7 word delay-0" />
              <SQLIcon className="w-7 h-7 word delay-0" />
              <TypeScriptIcon className="w-7 h-7 word delay-0" />
            </div>
          </div>

          {/* Frameworks */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <strong className="sm:w-42 shrink-0">
              Frameworks
            </strong>

            <div className="flex flex-wrap items-center gap-4">
              <AlpineJSIcon className="w-7 h-7 word delay-0" />
              <BootstrapIcon className="w-7 h-7 word delay-0" />
              <DjangoIcon className="w-7 h-7 word delay-0" />
              <NextJSIcon className="w-7 h-7 word delay-0" />
              <SwiperJSIcon className="w-7 h-7 word delay-0" />
            </div>
          </div>

          {/* Libraries */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <strong className="sm:w-42 shrink-0">
              Libraries
            </strong>

            <div className="grid grid-cols-5 gap-4 sm:flex sm:flex-wrap sm:items-center">
              <AnimeJSIcon className="w-7 h-7 word delay-0" />
              <ChartJSIcon className="w-7 h-7 word delay-0" />
              <CropperJSIcon className="w-7 h-7 word delay-0" />
              <HowlerJSIcon className="w-7 h-7 word delay-0" />
              <ReactIcon className="w-7 h-7 word delay-0" />
              <SweetAlert2Icon className="w-7 h-7 word delay-0" />
              <TailwindIcon className="w-7 h-7 word delay-0" />
              <ThreeJSIcon className="w-7 h-7 word delay-0" />
              <ToneJSIcon className="w-7 h-7 word delay-0" />
            </div>
          </div>

          {/* Frontend */}
          <div className="flex items-start gap-6">
            <strong className="w-42 shrink-0">
              Frontend
            </strong>

            <span className="word delay-1">
              {t.about.frontend}
            </span>
          </div>

          {/* Backend */}
          <div className="flex items-start gap-6">
            <strong className="w-42 shrink-0">
              Backend
            </strong>

            <span className="word delay-2">
              API Design, Debugging, Dev & Prod, Email APIs, Web Storage
            </span>
          </div>

          {/* AI */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <strong className="sm:w-42 shrink-0">
              AI
            </strong>

            <div className="flex flex-wrap items-center gap-4">
              <ElevenLabsIcon className="w-7 h-7 word delay-3" />
              <GeminiIcon className="w-7 h-7 word delay-3" />
              <N8nIcon className="w-7 h-7 word delay-3" />
              <OpenAIIcon className="w-7 h-7 word delay-3" />
              <V0Icon className="w-7 h-7 word delay-3" />
            </div>
          </div>

          {/* Hosting & Tools */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <strong className="sm:w-42 shrink-0">
              Hosting & Tools
            </strong>

            <div className="flex flex-wrap items-center gap-4">
              <CanvaIcon className="w-7 h-7 word delay-4" />
              <DrawIoIcon className="w-7 h-7 word delay-4" />
              <FigmaIcon className="w-7 h-7 word delay-4" />
              <FirebaseIcon className="w-7 h-7 word delay-4" />
              <FramerIcon className="w-7 h-7 word delay-4" />
              <GitHubIcon className="w-7 h-7 word delay-4" />
              <GitlabIcon className="w-7 h-7 word delay-4" />
              <NetlifyIcon className="w-7 h-7 word delay-4" />
              <PhotoshopIcon className="w-7 h-7 word delay-4" />
              <PowerBiIcon className="w-7 h-7 word delay-4" />
              <RenderIcon className="w-7 h-7 word delay-4" />
              <ResendIcon className="w-7 h-7 word delay-4" />
              <StackBlitzIcon className="w-7 h-7 word delay-4" />
              <SupabaseIcon className="w-7 h-7 word delay-4" />
              <VercelIcon className="w-7 h-7 word delay-4" />
              <WhimsicalIcon className="w-7 h-7 word delay-4" />
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
              <span key={skill} className={`word delay-${index + 5}`}>{skill}</span>
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
              <span key={skill} className={`word delay-${index + 13}`}>{skill}</span>
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
