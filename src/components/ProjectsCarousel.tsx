"use client";

import { projects, type Project } from "@/config/projects";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useHoverSound } from "@/lib/useHoverSound";
import { useLanguage } from "@/lib/i18n";

type ProjectsCarouselProps = {
  expanded?: boolean;
  items?: Project[];
};

export default function ProjectsCarousel({ expanded = false, items = projects }: ProjectsCarouselProps) {
  const list = expanded ? items : items.slice(0, 5);
  const { play } = useHoverSound("zoom");
  const { language, t } = useLanguage();

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={24}
      slidesPerView={1}
      className="projects-arrow-carousel"
    >
      {list.map((p) => {
        const CardContent = (
          <article
            className={`project-card group h-full rounded-2xl border bg-black/40 p-6 transition-all duration-300
            ${
              p.demo
                ? "project-card-live cursor-pointer border-white/100 hover:border-cyber-neonGreen/60 hover:shadow-neonGreen hover:bg-black/50"
                : "border-white/100 hover:border-cyber-gold/40 hover:bg-black/50"
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-cyber-gold transition group-hover:text-white">
                {language === "en"
                  ? t.projects.titles[p.slug as keyof typeof t.projects.titles] ?? p.title
                  : p.title}
              </h3>

              <span className="text-[11px] tracking-wider text-white/100 border border-white/100 px-2 py-1 rounded-md">
                {p.year}
              </span>
            </div>

            {/* Live preview */}
            {p.demo && (
              <div className="mt-5 overflow-hidden rounded-xl border border-cyber-neonGreen/35 bg-black/70 shadow-inner shadow-cyber-neonGreen/10">
                <div className="flex items-center justify-between border-b border-cyber-neonGreen/20 bg-black/80 px-3 py-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyber-neonGreen">
                    Live preview
                  </span>
                  <span className="h-2 w-2 rounded-full bg-cyber-neonGreen shadow-neonGreen" />
                </div>

                <div className="relative h-64 bg-cyber-black md:h-80">
                  <iframe
                    src={p.demo}
                    title={`Vista previa en vivo de ${p.title}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none h-full w-full border-0 bg-white"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </div>
            )}

            {/* Description */}
            <p className="light-electric-blue mt-4 text-sm leading-relaxed text-white/100">
              {language === "en"
                ? t.projects.descriptions[p.slug as keyof typeof t.projects.descriptions] ?? p.description
                : p.description}
            </p>

            {/* Tags */}
            {p.tags && p.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-1 rounded-md border border-white/100 bg-black/60 text-white/100 transition group-hover:border-white/100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Live badge */}
            {p.demo && (
              <div className="live-badge mt-5 text-xs font-semibold text-cyber-neonGreen tracking-wider">
                {t.projects.live}
              </div>
            )}
          </article>
        );

        return (
          <SwiperSlide key={p.slug}>
            {p.demo ? (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="block h-full"
                onMouseEnter={play}
              >
                {CardContent}
              </a>
            ) : (
              CardContent
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
