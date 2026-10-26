"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

type TerminalLine = { command: string; output: string[] };

export default function DevLabExperience() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [glow, setGlow] = useState(55);
  const [speed, setSpeed] = useState(50);

  const copy = isEs ? {
    back: "Volver",
    title: "DEV LAB",
    subtitle: "Probá la interfaz. Explorá el código. Descubrí el porqué de cada decisión.",
    terminal: "Terminal interactiva",
    hint: "Escribí un comando y presioná Enter.",
    placeholder: "help",
    run: "Ejecutar",
    commands: "Comandos disponibles",
    playground: "Laboratorio visual",
    playgroundText: "Ajustá los parámetros y observá cómo cambia el campo de energía. Es una demostración visual local: no envía datos ni modifica el sitio.",
    intensity: "Intensidad del brillo",
    speed: "Ángulo de rotación",
    reset: "Restablecer",
    explanation: "Qué demuestra",
    explanationText: "El estado de React controla los parámetros en tiempo real. La presentación usa CSS y gradientes para mantener el experimento liviano, adaptable y sin dependencias adicionales.",
    help: ["Comandos: help, about, stack, projects, status, skills, contact, clear", "Probá un comando para explorar este portfolio."],
    about: ["Desarrollador Full Stack con foco en UX/UI, rendimiento y arquitectura mantenible.", "Este laboratorio reúne experimentos pequeños y decisiones de interfaz explicadas."],
    stack: ["Frontend: React, Next.js, TypeScript, Tailwind CSS", "Interacción: estado de React, CSS, accesibilidad y diseño responsive"],
    projects: ["Los proyectos profesionales y personales están en Perfil → Proyectos.", "Este laboratorio complementa esos proyectos; no los duplica."],
    status: ["Sistema: operativo", "Renderizado: React · Estilos: CSS/Tailwind", "Datos: locales · Telemetría propia: ninguna"],
    skills: ["UI: componentes reutilizables, responsive y accesibles", "Estado: interacciones reactivas con React", "Calidad: movimiento reducido y feedback inmediato"],
    contact: ["Podés iniciar una conversación desde la sección Contacto.", "Ruta: /contact · No se envió ningún mensaje."],
    unknown: "Comando no reconocido. Escribí «help» para ver las opciones."
  } : {
    back: "Back",
    title: "DEV LAB",
    subtitle: "Try the interface. Explore the code. Discover the reasoning behind each decision.",
    terminal: "Interactive terminal",
    hint: "Enter a command and press Enter.",
    placeholder: "help",
    run: "Run",
    commands: "Available commands",
    playground: "Visual lab",
    playgroundText: "Adjust the parameters and see the energy field change. This is a local visual demo: it sends no data and does not modify the site.",
    intensity: "Glow intensity",
    speed: "Rotation angle",
    reset: "Reset",
    explanation: "What it demonstrates",
    explanationText: "React state controls the parameters in real time. CSS and gradients keep the experiment lightweight, responsive, and dependency-free.",
    help: ["Commands: help, about, stack, projects, status, skills, contact, clear", "Try a command to explore this portfolio."],
    about: ["Full Stack Developer focused on UX/UI, performance, and maintainable architecture.", "This lab brings together small experiments and explained interface decisions."],
    stack: ["Frontend: React, Next.js, TypeScript, Tailwind CSS", "Interaction: React state, CSS, accessibility, and responsive design"],
    projects: ["Professional and personal projects are available in Profile → Projects.", "This lab complements those projects instead of duplicating them."],
    status: ["System: operational", "Rendering: React · Styling: CSS/Tailwind", "Data: local · No custom telemetry"],
    skills: ["UI: reusable, responsive, accessible components", "State: reactive interactions with React", "Quality: reduced motion and immediate feedback"],
    contact: ["Start a conversation from the Contact section.", "Route: /contact · No message has been sent."],
    unknown: "Command not recognized. Type “help” to see the options."
  };

  function runCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = command.trim().toLowerCase();
    if (!normalized) return;
    if (normalized === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }
    const output = normalized === "help" ? copy.help
      : normalized === "about" ? copy.about
      : normalized === "stack" ? copy.stack
      : normalized === "projects" ? copy.projects
      : normalized === "status" ? copy.status
      : normalized === "skills" ? copy.skills
      : normalized === "contact" ? copy.contact
      : [copy.unknown];
    setHistory((current) => [...current, { command: normalized, output }].slice(-8));
    setCommand("");
  }

  function resetPlayground() {
    setGlow(55);
    setSpeed(50);
  }

  return (
    <div className="space-y-10">
      <div>
        <Link href="/about" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-white/75 transition hover:border-cyber-neonGreen/60 hover:text-cyber-neonGreen">
          <span aria-hidden="true">←</span>{copy.back}
        </Link>
      </div>

      <header className="max-w-3xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyber-neonGreen">EXPERIMENTATION / INTERACTION / CODE</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-cyber-gold sm:text-4xl">{copy.title}<span className="ml-2 text-cyber-neonGreen" aria-hidden="true">_</span></h1>
        <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">{copy.subtitle}</p>
      </header>

      <div className="grid gap-3 sm:grid-cols-3" aria-label={isEs ? "Resumen del laboratorio" : "Lab overview"}>
        {[
          { value: "08", label: isEs ? "Comandos disponibles" : "Available commands", detail: "CLI / INPUT" },
          { value: "02", label: isEs ? "Parámetros en vivo" : "Live parameters", detail: "STATE / CSS" },
          { value: "0", label: isEs ? "Dependencias nuevas" : "New dependencies", detail: "LIGHTWEIGHT" },
        ].map((item) => (
          <div key={item.detail} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-2xl font-bold tracking-tight text-cyber-gold">{item.value}</span>
              <span className="font-mono text-[9px] tracking-[0.18em] text-cyber-neonGreen/70">{item.detail}</span>
            </div>
            <p className="mt-1 text-xs text-white/60">{item.label}</p>
          </div>
        ))}
      </div>

      <section className="overflow-hidden rounded-2xl border border-cyber-neonGreen/25 bg-[#080b0d] shadow-[0_0_36px_rgba(5,247,183,0.06)]" aria-labelledby="dev-lab-terminal-title">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <h2 id="dev-lab-terminal-title" className="ml-2 text-xs font-semibold text-white/75">{copy.terminal}</h2>
        </div>
        <div className="space-y-4 p-4 sm:p-6">
          <p className="text-xs text-white/45">{copy.hint}</p>
          <div className="min-h-36 space-y-3 font-mono text-xs leading-relaxed sm:text-sm" aria-live="polite">
            {history.length === 0 && <p className="text-white/45">{isEs ? "Sesión iniciada. Esperando comando…" : "Session started. Waiting for command…"}</p>}
            {history.map((entry, index) => (
              <div key={index}>
                <p className="break-words text-cyber-neonGreen"><span aria-hidden="true">$ </span>{entry.command}</p>
                {entry.output.map((line, lineIndex) => <p key={lineIndex} className="mt-1 break-words text-white/70">{line}</p>)}
              </div>
            ))}
          </div>
          <form onSubmit={runCommand} className="flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row">
            <label htmlFor="dev-lab-command" className="sr-only">{copy.terminal}</label>
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/15 bg-black/50 px-3">
              <span className="text-cyber-neonGreen" aria-hidden="true">$</span>
              <input id="dev-lab-command" value={command} onChange={(event) => setCommand(event.target.value)} placeholder={copy.placeholder} aria-label={isEs ? "Comando de terminal" : "Terminal command"} autoComplete="off" spellCheck={false} className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30" />
            </div>
            <button type="submit" className="rounded-lg border border-cyber-neonGreen/50 px-4 py-3 text-sm font-semibold text-cyber-neonGreen transition hover:bg-cyber-neonGreen/10">{copy.run}</button>
          </form>
          <p className="text-xs leading-relaxed text-white/45">{copy.commands}: <span className="text-white/70">help · about · stack · projects · status · skills · contact · clear</span></p>
          <div className="flex flex-wrap gap-2" aria-label={isEs ? "Comandos rápidos" : "Quick commands"}>
            {["help", "about", "stack", "projects", "status", "skills", "contact", "clear"].map((quickCommand) => (
              <button
                key={quickCommand}
                type="button"
                onClick={() => setCommand(quickCommand)}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-white/65 transition hover:border-cyber-neonGreen/50 hover:text-cyber-neonGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-neonGreen"
              >
                {quickCommand}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.8fr)]" aria-labelledby="dev-lab-playground-title">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4 sm:p-6">
          <div className="mb-5">
            <h2 id="dev-lab-playground-title" className="text-xl font-semibold text-cyber-gold">{copy.playground}</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">{copy.playgroundText}</p>
          </div>
          <div className="relative isolate flex min-h-64 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#070a10] p-6">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(5,247,183,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(5,247,183,0.12) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            <div className="absolute h-40 w-40 rounded-full blur-3xl transition-all duration-300" style={{ background: "rgba(5,247,183,0.75)", opacity: glow / 100, transform: `scale(${0.7 + speed / 125})`, animation: "none" }} />
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-cyber-neonGreen/50 bg-black/40 shadow-[0_0_35px_rgba(5,247,183,0.15)]" style={{ boxShadow: `0 0 ${glow / 2}px rgba(5,247,183,${glow / 150})`, transition: "box-shadow 200ms ease" }}>
              <div className="h-16 w-16 rounded-full border border-cyber-neonGreen/70" style={{ transform: `rotate(${speed * 3.6}deg)`, transition: "transform 200ms ease" }}>
                <span className="block h-2 w-2 -translate-x-1 -translate-y-1 rounded-full bg-cyber-neonGreen" />
              </div>
              <span className="absolute text-[9px] uppercase tracking-[0.22em] text-white/70">signal</span>
            </div>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-white/75">{copy.intensity}<span className="ml-2 text-cyber-neonGreen">{glow}%</span>
              <input type="range" min="10" max="100" value={glow} onChange={(event) => setGlow(Number(event.target.value))} className="mt-3 block w-full accent-emerald-400" />
            </label>
            <label className="block text-sm text-white/75">{copy.speed}<span className="ml-2 text-cyber-neonGreen">{speed}%</span>
              <input type="range" min="0" max="100" value={speed} onChange={(event) => setSpeed(Number(event.target.value))} className="mt-3 block w-full accent-emerald-400" />
            </label>
          </div>
          <button type="button" onClick={resetPlayground} className="mt-5 rounded-lg border border-white/15 px-4 py-2 text-sm text-white/70 transition hover:border-cyber-neonGreen/50 hover:text-cyber-neonGreen">{copy.reset}</button>
        </div>

        <aside className="rounded-2xl border border-cyber-gold/20 bg-black/25 p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyber-neonGreen">{copy.explanation}</p>
          <h3 className="mt-3 text-lg font-semibold text-cyber-gold">{isEs ? "Estado → interfaz" : "State → interface"}</h3>
          <p className="mt-3 text-sm leading-7 text-white/70">{copy.explanationText}</p>
          <div className="mt-5 rounded-lg border border-white/10 bg-black/35 p-3 font-mono text-xs leading-6 text-white/65">
            <p><span className="text-cyber-neonGreen">const</span> glow = <span className="text-cyber-gold">useState</span>(55)</p>
            <p><span className="text-cyber-neonGreen">onChange</span> → setGlow(value)</p>
            <p><span className="text-cyber-neonGreen">render</span> → live visual feedback</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
