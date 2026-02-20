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
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
