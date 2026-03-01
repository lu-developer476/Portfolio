"use client";

import { projects } from "@/config/projects";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useHoverSound } from "@/lib/useHoverSound";

export default function ProjectsCarousel({ expanded = false }: { expanded?: boolean }) {
  const list = expanded ? projects : projects.slice(0, 6);
  const { play } = useHoverSound("zoom");

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={24}
      slidesPerView={1.05}
      breakpoints={{
        640: { slidesPerView: 2.05 },
        1024: { slidesPerView: 3.05 }
      }}
      className="!pb-10"
    >
      {list.map((p) => {
        const CardContent = (
          <article
            className={`group h-full rounded-2xl border bg-black/40 p-6 transition-all duration-300
            ${
              p.demo
                ? "cursor-pointer border-white/100 hover:border-cyber-neonGreen/60 hover:shadow-neonGreen hover:bg-black/50"
                : "border-white/100 hover:border-cyber-gold/40 hover:bg-black/50"
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-cyber-gold transition group-hover:text-white">
                {p.title}
              </h3>

              <span className="text-[11px] tracking-wider text-white/100 border border-white/100 px-2 py-1 rounded-md">
                {p.year}
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-white/100">
              {p.description}
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
              <div className="mt-5 text-xs font-semibold text-cyber-neonGreen tracking-wider">
                ● LIVE
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
