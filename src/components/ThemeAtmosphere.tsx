"use client";

import { useEffect, useRef, useState } from "react";

type ThemeMode = "dark" | "light" | "beige" | "cloud" | "galaxy";

function readTheme(): ThemeMode {
  if (typeof document === "undefined") return "dark";
  const value = document.documentElement.dataset.theme;
  return value === "light" || value === "beige" || value === "cloud" || value === "galaxy"
    ? value
    : "dark";
}

export default function ThemeAtmosphere() {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    setTheme(readTheme());

    const observer = new MutationObserver(() => setTheme(readTheme()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });

    return () => observer.disconnect();
  }, []);

  if (theme === "light") {
    return (
      <div className="theme-atmosphere spring-atmosphere" aria-hidden>
        <div className="spring-glow spring-glow-a" />
        <div className="spring-glow spring-glow-b" />
        <div className="spring-mist spring-mist-a" />
        <div className="spring-mist spring-mist-b" />
        <div className="spring-rain spring-rain-back" />
        <div className="spring-rain spring-rain-front" />
        <div className="spring-source">
          <span className="spring-bubble spring-bubble-a" />
          <span className="spring-bubble spring-bubble-b" />
          <span className="spring-bubble spring-bubble-c" />
        </div>
        <div className="spring-wave spring-wave-a" />
        <div className="spring-wave spring-wave-b" />
        <div className="spring-wave spring-wave-c" />
      </div>
    );
  }

  if (theme === "beige") {
    return (
      <div className="theme-atmosphere desert-atmosphere" aria-hidden>
        <div className="desert-sun" />
        <div className="desert-dune desert-dune-back" />
        <div className="desert-dune desert-dune-front" />
        <div className="sand-haze sand-haze-a" />
        <div className="sand-haze sand-haze-b" />
        <div className="sand-squall sand-squall-back" />
        <div className="sand-squall sand-squall-front" />
        <div className="sand-vortex sand-vortex-a" />
        <div className="sand-vortex sand-vortex-b" />
      </div>
    );
  }

  if (theme === "cloud") {
    return (
      <div className="theme-atmosphere cloud-atmosphere" aria-hidden>
        {/* Nubes en movimiento (blancas y grises) */}
        <div className="cloud-layer cloud-slow">
          <span className="cloud cloud-white" style={{ top: "12%", left: "-20%" }} />
          <span className="cloud cloud-gray" style={{ top: "58%", left: "10%" }} />
          <span className="cloud cloud-white" style={{ top: "78%", left: "45%" }} />
        </div>
        <div className="cloud-layer cloud-mid">
          <span className="cloud cloud-gray" style={{ top: "26%", left: "5%" }} />
          <span className="cloud cloud-white" style={{ top: "44%", left: "55%" }} />
          <span className="cloud cloud-gray" style={{ top: "8%", left: "70%" }} />
        </div>
        <div className="cloud-layer cloud-fast">
          <span className="cloud cloud-white" style={{ top: "35%", left: "25%" }} />
          <span className="cloud cloud-gray" style={{ top: "66%", left: "80%" }} />
        </div>

        {/* Neblina */}
        <div className="fog-layer fog-a" />
        <div className="fog-layer fog-b" />
        <div className="fog-layer fog-c" />

      </div>
    );
  }

  if (theme === "galaxy") {
    return (
      <div className="theme-atmosphere" aria-hidden>
        <GalaxyVoid />
      </div>
    );
  }

  return null;
}

function GalaxyVoid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    type Star = {
      x: number;
      y: number;
      z: number;
      size: number;
      twinkle: number;
      speed: number;
    };

    let stars: Star[] = [];

    const buildStars = () => {
      const count = isMobile ? 140 : 320;
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        size: Math.random() * 1.6 + 0.3,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.015 + 0.004
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    };

    const drawNebula = () => {
      const nebula = [
        { x: width * 0.2, y: height * 0.3, r: Math.max(width, height) * 0.45, c: "rgba(90, 140, 60, 0.10)" },
        { x: width * 0.8, y: height * 0.25, r: Math.max(width, height) * 0.4, c: "rgba(120, 90, 180, 0.09)" },
        { x: width * 0.55, y: height * 0.85, r: Math.max(width, height) * 0.5, c: "rgba(60, 120, 90, 0.10)" }
      ];
      for (const n of nebula) {
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        grad.addColorStop(0, n.c);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }
    };

    let raf = 0;
    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      drawNebula();

      for (const star of stars) {
        star.twinkle += star.speed;
        const alpha = 0.35 + Math.sin(star.twinkle) * 0.35 + star.z * 0.25;
        const hue = star.z > 0.75 ? "215, 232, 74" : "235, 245, 200";
        ctx.beginPath();
        ctx.fillStyle = `rgba(${hue}, ${Math.max(0.05, Math.min(1, alpha))})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        if (!reduceMotion) {
          star.y += star.z * 0.12 + 0.02;
          if (star.y > height) {
            star.y = -2;
            star.x = Math.random() * width;
          }
        }
      }

      t += 1;
      raf = requestAnimationFrame(render);
    };

    resize();

    if (reduceMotion) {
      // Single static frame.
      ctx.clearRect(0, 0, width, height);
      drawNebula();
      for (const star of stars) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(235, 245, 200, ${0.3 + star.z * 0.4})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      render();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="galaxy-canvas" />;
}
