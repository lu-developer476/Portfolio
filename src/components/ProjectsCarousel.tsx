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
      spaceBetween={16}
      slidesPerView={1.05}
      breakpoints={{
        640: { slidesPerView: 2.05 },
        1024: { slidesPerView: 3.05 }
      }}
      className="!pb-10"
    >
      {list.map((p) => (
        <SwiperSlide key={p.slug}>
          <article className="h-full rounded-xl border border-white/10 bg-black/35 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-cyber-gold">{p.title}</h3>
              <span className="text-xs text-white/60">{p.year}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/80">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-xs text-white/75">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.github ? (
                <CyberButton href={p.github} external variant="green">
                  Repo
                </CyberButton>
              ) : null}
              {p.demo ? (
                <CyberButton href={p.demo} external variant="red">
                  Demo
                </CyberButton>
              ) : null}
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
