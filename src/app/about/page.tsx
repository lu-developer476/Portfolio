"use client";

import Section from "@/components/Section";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import { personalProjects } from "@/config/personalprojects";
import { professionalProjects } from "@/config/professionalprojects";
import {
  AlpineJSIcon,
  AnimeJSIcon,
  BootstrapIcon,
  CanvaIcon,
  CapCutIcon,
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
  MatterJSIcon,
  MelonJSIcon,
  N8nIcon,
  NetlifyIcon,
  NextJSIcon,
  NodeJSIcon,
  OpenAIIcon,
  PhaserIcon,
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
  VantaJSIcon,
  VercelIcon,
  WhimsicalIcon,
  WixIcon,
} from "@/icons";
import { useLanguage } from "@/lib/i18n";

type TechIconProps = {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  className: string;
};

const iconClassName = "w-7 h-7 word delay-0";
const delayedIconClassName = (delay: number) => `w-7 h-7 word delay-${delay}`;
const techRowClassName = "grid gap-3 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-center sm:gap-5";
const iconGroupClassName = "grid grid-cols-[repeat(auto-fit,minmax(4.75rem,4.75rem))] justify-start gap-x-3 gap-y-4 sm:grid-cols-[repeat(auto-fit,minmax(5rem,5rem))] sm:gap-x-4 lg:gap-x-5";
const skillListClassName = "skills-list grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-cyber-neonGreen/60";

// Extrae solo las clases de animación (word + delay-*) para aplicarlas
// al contenedor y al nombre sin recortar el contenido interno del SVG.
function labelAnimationClass(className: string) {
  return className
    .split(" ")
    .filter((c) => c === "word" || c.startsWith("delay-"))
    .join(" ");
}

function iconPresentationClass(className: string) {
  return className
    .split(" ")
    .filter((c) => c !== "word" && !c.startsWith("delay-"))
    .join(" ");
}

function TechIcon({ label, Icon, className }: TechIconProps) {
  const animationClassName = labelAnimationClass(className);

  return (
    <span className="flex w-[4.75rem] flex-col items-center gap-1 text-center text-[0.6rem] leading-tight text-white/70 sm:w-20 sm:text-[0.65rem]">
      <span className={animationClassName}>
        <Icon className={iconPresentationClass(className)} />
      </span>
      <span className={`${animationClassName} whitespace-nowrap`}>{label}</span>
    </span>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();
  const techSections = [
    {
      title: "Languages",
      items: [
        ["CSS3", CSS3Icon, iconClassName],
        ["CoffeeScript", CoffeeScriptIcon, iconClassName],
        ["HTML5", HTML5Icon, iconClassName],
        ["JavaScript", JavaScriptIcon, iconClassName],
        ["Node.js", NodeJSIcon, iconClassName],
        ["Python", PythonIcon, iconClassName],
        ["SQL Server", SQLIcon, iconClassName],
        ["TypeScript", TypeScriptIcon, iconClassName],
      ],
    },
    {
      title: "Frameworks",
      items: [
        ["Alpine.js", AlpineJSIcon, iconClassName],
        ["Bootstrap", BootstrapIcon, iconClassName],
        ["Django", DjangoIcon, iconClassName],
        ["Melon.js", MelonJSIcon, iconClassName],
        ["Next.js", NextJSIcon, iconClassName],
        ["Phaser", PhaserIcon, iconClassName],
      ],
    },
    {
      title: "Libraries",
      items: [
        ["Anime.js", AnimeJSIcon, iconClassName],
        ["Chart.js", ChartJSIcon, iconClassName],
        ["Cropper.js", CropperJSIcon, iconClassName],
        ["Howler.js", HowlerJSIcon, iconClassName],
        ["Matter.js", MatterJSIcon, iconClassName],
        ["React", ReactIcon, iconClassName],
        ["SweetAlert2", SweetAlert2Icon, iconClassName],
        ["Swiper.js", SwiperJSIcon, iconClassName],
        ["Tailwind", TailwindIcon, iconClassName],
        ["Three.js", ThreeJSIcon, iconClassName],
        ["Tone.js", ToneJSIcon, iconClassName],
        ["Vanta.js", VantaJSIcon, iconClassName],
      ],
    },
    {
      title: "AI",
      items: [
        ["ElevenLabs", ElevenLabsIcon, delayedIconClassName(3)],
        ["Gemini", GeminiIcon, delayedIconClassName(3)],
        ["n8n", N8nIcon, delayedIconClassName(3)],
        ["OpenAI", OpenAIIcon, delayedIconClassName(3)],
        ["v0", V0Icon, delayedIconClassName(3)],
      ],
    },
    {
      title: "Hosting & Tools",
      items: [
        ["Canva", CanvaIcon, delayedIconClassName(4)],
        ["CapCut", CapCutIcon, delayedIconClassName(4)],
        ["draw.io", DrawIoIcon, delayedIconClassName(4)],
        ["Figma", FigmaIcon, delayedIconClassName(4)],
        ["Firebase", FirebaseIcon, delayedIconClassName(4)],
        ["Framer", FramerIcon, delayedIconClassName(4)],
        ["GitHub", GitHubIcon, delayedIconClassName(4)],
        ["GitLab", GitlabIcon, delayedIconClassName(4)],
        ["Netlify", NetlifyIcon, delayedIconClassName(4)],
        ["Photoshop", PhotoshopIcon, delayedIconClassName(4)],
        ["Power BI", PowerBiIcon, delayedIconClassName(4)],
        ["Render", RenderIcon, delayedIconClassName(4)],
        ["Resend", ResendIcon, delayedIconClassName(4)],
        ["StackBlitz", StackBlitzIcon, delayedIconClassName(4)],
        ["Supabase", SupabaseIcon, delayedIconClassName(4)],
        ["Vercel", VercelIcon, delayedIconClassName(4)],
        ["Whimsical", WhimsicalIcon, delayedIconClassName(4)],
        ["Wix", WixIcon, delayedIconClassName(4)],
      ],
    },
  ] satisfies { title: string; items: [string, React.ComponentType<{ className?: string }>, string][] }[];

  const skillSections = [
    { icon: "💡", title: "Soft Skills", skills: t.about.softSkills },
    { icon: "💻", title: "Hard Skills", skills: t.about.hardSkills },
  ];

  return (
    <div className="space-y-14">
      <Section
        id="about"
        title={t.about.title}
        subtitle={t.about.subtitle}
      >
        <div className="rounded-xl border border-white/10 bg-black/35 p-6">
          {t.about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`light-electric-blue text-white/85 leading-7 ${index ? "mt-4" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        title={t.about.skillsTitle}
        subtitle={t.about.skillsSubtitle}
      >
        <div className="w-full max-w-full overflow-hidden rounded-xl border border-white/10 bg-black/35 p-4 sm:p-5 md:p-6 space-y-4 text-white/85 leading-7">
          {techSections.slice(0, 3).map(({ title, items }) => (
            <div key={title} className={techRowClassName}>
              <strong className="shrink-0">{title}</strong>

              <div className={iconGroupClassName}>
                {items.map(([label, Icon, className]) => (
                  <TechIcon
                    key={label}
                    label={label}
                    Icon={Icon}
                    className={className}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Frontend */}
          <div className={techRowClassName}>
            <strong className="shrink-0">Frontend</strong>

            <span className="light-electric-blue word delay-1 min-w-0">
              {t.about.frontend}
            </span>
          </div>

          {/* Backend */}
          <div className={techRowClassName}>
            <strong className="shrink-0">Backend</strong>

            <span className="light-electric-blue word delay-2 min-w-0">
              API Design, Debugging, Dev & Prod, Email APIs, Web Storage
            </span>
          </div>

          {techSections.slice(3).map(({ title, items }) => (
            <div key={title} className={techRowClassName}>
              <strong className="shrink-0">{title}</strong>

              <div className={iconGroupClassName}>
                {items.map(([label, Icon, className]) => (
                  <TechIcon
                    key={label}
                    label={label}
                    Icon={Icon}
                    className={className}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {skillSections.map(({ icon, title, skills }, index) => (
          <div key={title}>
            <hr className={`my-6 border-t ${index ? "border-white/25" : "border-white/20"}`} />

            <div className="mt-6">
              <h3 className="text-white/90 font-semibold mb-2">
                <span className="text-lg font-semibold text-cyber-gold">{icon} {title}</span>
              </h3>

              <div className={skillListClassName}>
                {skills.map((skill) => (
                  <span key={skill} className="word delay-4">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Section>

      <Section
        id="projects"
        title={t.about.projectsTitle}
        subtitle={t.about.projectsSubtitle}
      >
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyber-gold">
              {t.about.professionalProjectsTitle}
            </h3>
            <ProjectsCarousel expanded items={professionalProjects} />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyber-gold">
              {t.about.personalProjectsTitle}
            </h3>
            <ProjectsCarousel expanded items={personalProjects} />
          </div>
        </div>
      </Section>
    </div>
  );
}
