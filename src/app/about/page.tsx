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
  className: string;
};

const iconClassName = "w-7 h-7 word delay-0";
const delayedIconClassName = (delay: number) => `w-7 h-7 word delay-${delay}`;
const iconGroupClassName = "flex flex-wrap items-start gap-x-3 gap-y-4 sm:gap-x-4";
const skillListClassName = "skills-list grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-cyber-neonGreen/60";

// Extrae solo las clases de animación (word + delay-*) del className del icono,
// para que el nombre revele con el mismo efecto y tiempo que su .svg.
function labelAnimationClass(className: string) {
  return className
    .split(" ")
    .filter((c) => c === "word" || c.startsWith("delay-"))
    .join(" ");
}

function TechIcon({ label, icon, className }: TechIconProps) {
  return (
    <span className="flex min-w-[4.75rem] flex-col items-center gap-1 text-center text-[0.6rem] leading-tight text-white/70 sm:min-w-20 sm:text-[0.65rem]">
      {icon}
      <span className={`${labelAnimationClass(className)} whitespace-nowrap`}>{label}</span>
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
        ["Next.js", NextJSIcon, iconClassName],
      ],
    },
    {
      title: "Libraries",
      items: [
        ["Anime.js", AnimeJSIcon, iconClassName],
        ["Chart.js", ChartJSIcon, iconClassName],
        ["Cropper.js", CropperJSIcon, iconClassName],
        ["Howler.js", HowlerJSIcon, iconClassName],
        ["React", ReactIcon, iconClassName],
        ["SweetAlert2", SweetAlert2Icon, iconClassName],
        ["Swiper.js", SwiperJSIcon, iconClassName],
        ["Tailwind", TailwindIcon, iconClassName],
        ["Three.js", ThreeJSIcon, iconClassName],
        ["Tone.js", ToneJSIcon, iconClassName],
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
            <div key={title} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <strong className="sm:w-42 shrink-0">{title}</strong>

              <div className={iconGroupClassName}>
                {items.map(([label, Icon, className]) => (
                  <TechIcon
                    key={label}
                    label={label}
                    icon={<Icon className={className} />}
                    className={className}
                  />
                ))}
              </div>
            </div>
          ))}

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

          {techSections.slice(3).map(({ title, items }) => (
            <div key={title} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <strong className="sm:w-42 shrink-0">{title}</strong>

              <div className={iconGroupClassName}>
                {items.map(([label, Icon, className]) => (
                  <TechIcon
                    key={label}
                    label={label}
                    icon={<Icon className={className} />}
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
        <ProjectsCarousel expanded />
      </Section>
    </div>
  );
}
