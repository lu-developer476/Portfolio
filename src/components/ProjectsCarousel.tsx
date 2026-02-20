"use client";

import { projects } from "@/config/projects";
import CyberButton from "./CyberButton";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function ProjectsCarousel({ expanded = false }: { expanded?: boolean }) {
  const list = expanded ? projects : projects.slice(0, 6);

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
      {list.map((p) => (
        <SwiperSlide key={p.slug}>
          <article className="group h-full rounded-2xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:border-cyber-gold/40 hover:bg-black/50">
            
            {/* Header */}
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-cyber-gold group-hover:text-white transition">
                {p.title}
              </h3>

              <span className="text-[11px] tracking-wider text-white/50 border border-white/10 px-2 py-1 rounded-md">
                {p.year}
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              {p.description}
            </p>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] tracking-wide px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-cyber-gold/40 hover:text-white"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {p.github && (
                <CyberButton href={p.github} external variant="green">
                  Repo
                </CyberButton>
              )}

              {p.demo && (
                <CyberButton href={p.demo} external variant="red">
                  Demo
                </CyberButton>
              )}
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
