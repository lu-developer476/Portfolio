"use client";

import Section from "@/components/Section";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import { personalProjects } from "@/config/personalprojects";
import { professionalProjects } from "@/config/professionalprojects";
import {
  AnimeJSIcon,
  CoffeeScriptIcon,
  FirebaseIcon,
  HowlerJSIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  ResendIcon,
  SwiperJSIcon,
  SweetAlert2Icon,
  TailwindIcon,
  ThreeJSIcon,
  TypeScriptIcon,
  VercelIcon,
} from "@/icons";
import { useLanguage } from "@/lib/i18n";

type TechIconProps = {
  label: string;
  icon?: React.ReactNode;
  className?: string;
};

const iconClassName = "w-10 h-10 word delay-0 sm:w-12 sm:h-12";
const delayedIconClassName = (delay: number) => `w-10 h-10 word delay-${delay} sm:w-12 sm:h-12`;
const techGridClassName = "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
const skillListClassName = "skills-list grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-cyber-neonGreen/60";

// Extrae solo las clases de animación (word + delay-*) del className del icono,
// para que el nombre revele con el mismo efecto y tiempo que su .svg.
function labelAnimationClass(className = "") {
  return className
    .split(" ")
    .filter((c) => c === "word" || c.startsWith("delay-"))
    .join(" ");
}

function TechIcon({ label, icon, className }: TechIconProps) {
  return (
    <span className="group flex min-h-28 flex-col items-center justify-center gap-2 rounded-2xl border border-cyber-neonGreen/20 bg-white/[0.03] px-3 py-4 text-center text-[0.72rem] font-semibold leading-tight text-white/80 shadow-[0_0_18px_rgba(0,255,170,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyber-neonGreen/55 hover:bg-cyber-neonGreen/10 hover:text-white sm:min-h-32 sm:text-[0.82rem]">
      {icon ? (
        <span className="flex h-14 items-center justify-center sm:h-16">{icon}</span>
      ) : (
        <span className={`${labelAnimationClass(className)} flex h-14 w-14 items-center justify-center rounded-full border border-cyber-gold/40 bg-cyber-gold/10 text-lg font-bold text-cyber-gold sm:h-16 sm:w-16 sm:text-xl`}>
          {label.slice(0, 2)}
        </span>
      )}
      <span className={`${labelAnimationClass(className)} whitespace-nowrap`}>{label}</span>
    </span>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();
  const techSections = [
    {
      title: "Frontend",
      items: [
        ["Next.js", NextJSIcon, iconClassName],
        ["React", ReactIcon, iconClassName],
        ["TypeScript", TypeScriptIcon, iconClassName],
        ["Tailwind CSS", TailwindIcon, iconClassName],
        ["PostCSS", undefined, iconClassName],
      ],
    },
    {
      title: "Animación y visual",
      items: [
        ["Anime.js", AnimeJSIcon, delayedIconClassName(1)],
        ["Three.js", ThreeJSIcon, delayedIconClassName(1)],
        ["Swiper", SwiperJSIcon, delayedIconClassName(1)],
      ],
    },
    {
      title: "Sonidos",
      items: [["Howler.js", HowlerJSIcon, delayedIconClassName(2)]],
    },
    {
      title: "Experiencia de usuario",
      items: [["SweetAlert2", SweetAlert2Icon, delayedIconClassName(2)]],
    },
    {
      title: "Backend",
      items: [
        ["Firebase Admin", FirebaseIcon, delayedIconClassName(3)],
        ["Resend", ResendIcon, delayedIconClassName(3)],
        ["Nodemailer", NodeJSIcon, delayedIconClassName(3)],
        ["Zod", undefined, delayedIconClassName(3)],
      ],
    },
    {
      title: "Complementos",
      items: [
        ["ESLint", undefined, delayedIconClassName(4)],
        ["CoffeeScript", CoffeeScriptIcon, delayedIconClassName(4)],
        ["SVGR", undefined, delayedIconClassName(4)],
      ],
    },
    {
      title: "Despliegue",
      items: [["Vercel", VercelIcon, delayedIconClassName(4)]],
    },
  ] satisfies { title: string; items: [string, React.ComponentType<{ className?: string }> | undefined, string][] }[];

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
        <div className="w-full max-w-full overflow-hidden rounded-xl border border-white/10 bg-black/35 p-4 sm:p-5 md:p-6 text-white/85 leading-7">
          <div className="space-y-8">
            {techSections.map(({ title, items }) => (
              <div key={title} className="space-y-3">
                <strong className="block text-base text-cyber-gold sm:text-lg">{title}</strong>

                <div className={techGridClassName}>
                  {items.map(([label, Icon, className]) => (
                    <TechIcon
                      key={label}
                      label={label}
                      icon={Icon ? <Icon className={className} /> : undefined}
                      className={className}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
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
