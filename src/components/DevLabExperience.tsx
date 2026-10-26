"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

type TerminalLine = { command: string; output: string[] };
type Accent = "mint" | "violet" | "amber";

const accents: Record<Accent, { label: string; rgb: string; hex: string }> = {
  mint: { label: "Neon mint", rgb: "5,247,183", hex: "#05F7B7" },
  violet: { label: "Electric violet", rgb: "167,139,250", hex: "#A78BFA" },
  amber: { label: "Cyber amber", rgb: "250,204,21", hex: "#FACC15" },
};

export default function DevLabExperience() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [glow, setGlow] = useState(58);
  const [blur, setBlur] = useState(32);
  const [rotation, setRotation] = useState(35);
  const [accent, setAccent] = useState<Accent>("mint");
  const [copied, setCopied] = useState(false);
  const activeAccent = accents[accent];

  const cssSnippet = useMemo(
    () => `.signal-orb {\n  --signal-color: ${activeAccent.hex};\n  box-shadow: 0 0 ${glow}px rgba(${activeAccent.rgb}, .38);\n  filter: blur(${Math.round(blur / 8)}px);\n  transform: rotate(${rotation}deg);\n  transition: all 240ms ease;\n}`,
    [activeAccent, glow, blur, rotation]
  );

  const copy = isEs ? {
    back: "Volver al perfil",
    eyebrow: "ESPACIO DE EXPERIMENTACIÓN · 001",
    subtitle: "Un entorno interactivo para probar ideas de interfaz, inspeccionar decisiones y ver cómo el estado se convierte en experiencia.",
    terminal: "Terminal de exploración",
    terminalHint: "No ejecuta comandos del sistema. Responde a comandos locales de demostración.",
    run: "Ejecutar",
    waiting: "Sesión lista. Elegí un comando o escribí help.",
    commands: "Comandos",
    playground: "Signal playground",
    playgroundText: "Manipulá los parámetros en tiempo real. El CSS resultante se actualiza con cada ajuste y podés copiarlo para reutilizarlo.",
    glow: "Intensidad del halo",
    blur: "Desenfoque",
    rotation: "Rotación",
    palette: "Paleta de señal",
    reset: "Restablecer",
    copyCss: "Copiar CSS",
    copied: "CSS copiado",
    inspect: "INSPECTOR / CSS OUTPUT",
    capabilities: "Qué podés explorar",
    cap1: "Interacción real",
    cap1d: "Estado de React conectado a controles y resultado visual.",
    cap2: "CSS generado",
    cap2d: "Un snippet legible que refleja la configuración actual.",
    cap3: "Sin backend",
    cap3d: "Los experimentos viven en el navegador; no se envían datos.",
    note: "Diseñado para experimentar, no para ocultar complejidad detrás de una animación.",
    about: ["Soy Lucas Montenegro, desarrollador Full Stack enfocado en experiencias web, UX/UI y código mantenible.", "Este espacio muestra pequeñas decisiones técnicas en acción."],
    stack: ["Frontend: React, Next.js, TypeScript y Tailwind CSS.", "UI: estado local, estilos dinámicos y componentes accesibles."],
    projects: ["Explorá proyectos y experiencia desde Perfil → Proyectos.", "Este laboratorio complementa los casos de trabajo, no los reemplaza."],
    skills: ["Componentes reutilizables y diseño responsive.", "Feedback inmediato, estados visibles y controles accesibles."],
    status: ["Estado: operativo", "Ejecución: local en el navegador", "Red: no requerida para los experimentos"],
    contact: ["Podés escribirme desde la sección Contacto.", "Ruta: /contact · No se envió ningún mensaje."],
    help: ["Comandos: help, about, stack, projects, skills, status, contact, clear", "Usá los botones rápidos para completar el campo de entrada."],
    unknown: "Comando no reconocido. Escribí help para ver las opciones."
  } : {
    back: "Back to profile",
    eyebrow: "EXPERIMENTATION SPACE · 001",
    subtitle: "An interactive environment to test interface ideas, inspect decisions, and see how state becomes experience.",
    terminal: "Exploration terminal",
    terminalHint: "This does not execute system commands. It responds to local demo commands.",
    run: "Run",
    waiting: "Session ready. Choose a command or type help.",
    commands: "Commands",
    playground: "Signal playground",
    playgroundText: "Adjust parameters in real time. The generated CSS updates with every change and can be copied for reuse.",
    glow: "Glow intensity",
    blur: "Blur",
    rotation: "Rotation",
    palette: "Signal palette",
    reset: "Reset",
    copyCss: "Copy CSS",
    copied: "CSS copied",
    inspect: "INSPECTOR / CSS OUTPUT",
    capabilities: "What you can explore",
    cap1: "Real interaction",
    cap1d: "React state connects controls to a live visual result.",
    cap2: "Generated CSS",
    cap2d: "A readable snippet reflects the current configuration.",
    cap3: "No backend",
    cap3d: "Experiments stay in the browser; no data is sent.",
    note: "Built to explore implementation choices, not hide complexity behind an animation.",
    about: ["I'm Lucas Montenegro, a Full Stack Developer focused on web experiences, UX/UI, and maintainable code.", "This space puts small technical decisions into action."],
    stack: ["Frontend: React, Next.js, TypeScript, and Tailwind CSS.", "UI: local state, dynamic styles, and accessible components."],
    projects: ["Explore projects and experience from Profile → Projects.", "This lab complements real-world cases instead of replacing them."],
    skills: ["Reusable components and responsive design.", "Immediate feedback, visible states, and accessible controls."],
    status: ["Status: operational", "Execution: local in the browser", "Network: not required for experiments"],
    contact: ["Start a conversation from the Contact section.", "Route: /contact · No message has been sent."],
    help: ["Commands: help, about, stack, projects, skills, status, contact, clear", "Use a quick command button to fill the input."],
    unknown: "Command not recognized. Type help to see available options."
  };

  function runCommand(event?: FormEvent<HTMLFormElement>, selectedCommand?: string) {
    event?.preventDefault();
    const normalized = (selectedCommand ?? command).trim().toLowerCase();
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
      : normalized === "skills" ? copy.skills
      : normalized === "status" ? copy.status
      : normalized === "contact" ? copy.contact
      : [copy.unknown];
    setHistory((current) => [...current, { command: normalized, output }].slice(-7));
    setCommand("");
  }

  async function copyCss() {
    try {
      await navigator.clipboard.writeText(cssSnippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  function resetPlayground() {
    setGlow(58);
    setBlur(32);
    setRotation(35);
    setAccent("mint");
  }

  const quickCommands = ["help", "about", "stack", "projects", "skills", "status", "contact", "clear"];

  return (
    <div className="space-y-10 sm:space-y-14">
      <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/70 transition hover:border-cyber-neonGreen/50 hover:text-cyber-neonGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-neonGreen">
        <span aria-hidden="true">←</span>{copy.back}
      </Link>

      <header className="relative overflow-hidden rounded-3xl border border-cyber-neonGreen/20 bg-[#080b0d] px-5 py-8 sm:px-9 sm:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full blur-3xl" style={{ background: `rgba(${activeAccent.rgb}, .12)` }} />
        <div className="relative max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[.24em] text-cyber-neonGreen">
            <span className="h-1.5 w-1.5 rounded-full bg-cyber-neonGreen shadow-[0_0_12px_rgba(5,247,183,.8)]" />
            {copy.eyebrow}
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-[-.06em] text-white sm:text-6xl">DEV <span className="text-cyber-gold">LAB</span><span className="text-cyber-neonGreen">.</span></h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">{copy.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-wider text-white/55">
            <span className="rounded-full border border-white/10 px-3 py-1.5">React / State</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5">CSS / Live preview</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5">Client-side</span>
          </div>
        </div>
      </header>

      <section className="grid gap-3 md:grid-cols-3" aria-label={isEs ? "Capacidades del laboratorio" : "Lab capabilities"}>
        {[
          { number: "01", title: copy.cap1, description: copy.cap1d },
          { number: "02", title: copy.cap2, description: copy.cap2d },
          { number: "03", title: copy.cap3, description: copy.cap3d },
        ].map((item) => (
          <article key={item.number} className="group rounded-2xl border border-white/10 bg-black/25 p-5 transition-colors hover:border-cyber-neonGreen/30">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-cyber-neonGreen">{item.number} / 03</span>
              <span aria-hidden="true" className="text-white/25 transition group-hover:text-cyber-gold">↗</span>
            </div>
            <h2 className="mt-5 text-base font-semibold text-white">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#080b0d] shadow-[0_18px_60px_rgba(0,0,0,.18)]" aria-labelledby="dev-lab-terminal-title">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <h2 id="dev-lab-terminal-title" className="ml-2 text-xs font-semibold text-white/80">{copy.terminal}</h2>
          </div>
          <span className="font-mono text-[10px] text-white/35">LOCAL_SESSION // 127.0.0.1</span>
        </div>
        <div className="space-y-5 p-4 sm:p-6">
          <p className="text-xs leading-5 text-white/45">{copy.terminalHint}</p>
          <div className="min-h-32 space-y-3 rounded-xl border border-white/[0.06] bg-black/35 p-4 font-mono text-xs leading-6 sm:text-sm" aria-live="polite" aria-relevant="additions text">
            {history.length === 0 && <p className="text-white/40">{copy.waiting}</p>}
            {history.map((entry, index) => (
              <div key={`${entry.command}-${index}`}>
                <p className="break-words text-cyber-neonGreen"><span aria-hidden="true">$ </span>{entry.command}</p>
                {entry.output.map((line, lineIndex) => <p key={lineIndex} className="mt-1 break-words text-white/65">{line}</p>)}
              </div>
            ))}
          </div>
          <form onSubmit={(event) => runCommand(event)} className="flex flex-col gap-2 sm:flex-row">
            <label htmlFor="dev-lab-command" className="sr-only">{copy.terminal}</label>
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-3 focus-within:border-cyber-neonGreen/50">
              <span className="font-mono text-cyber-neonGreen" aria-hidden="true">›</span>
              <input id="dev-lab-command" value={command} onChange={(event) => setCommand(event.target.value)} placeholder="help" aria-label={isEs ? "Comando de demostración" : "Demo command"} autoComplete="off" spellCheck={false} className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/25" />
            </div>
            <button type="submit" className="rounded-xl border border-cyber-neonGreen/40 px-5 py-3 text-sm font-semibold text-cyber-neonGreen transition hover:bg-cyber-neonGreen/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-neonGreen">{copy.run}</button>
          </form>
          <div className="flex flex-wrap gap-2" aria-label={isEs ? "Comandos rápidos" : "Quick commands"}>
            {quickCommands.map((quickCommand) => (
              <button key={quickCommand} type="button" onClick={() => runCommand(undefined, quickCommand)} className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] text-white/55 transition hover:border-cyber-neonGreen/40 hover:text-cyber-neonGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-neonGreen">
                {quickCommand}
              </button>
            ))}
          </div>
          <p className="text-[10px] leading-5 text-white/35">{copy.commands}: <span className="text-white/55">{quickCommands.join(" · ")}</span></p>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(19rem,.85fr)]" aria-labelledby="dev-lab-playground-title">
        <div className="min-w-0 rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-6">
          <div className="mb-6">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-cyber-neonGreen">INTERACTIVE / 02</p>
            <h2 id="dev-lab-playground-title" className="mt-2 text-2xl font-bold tracking-tight text-white">{copy.playground}</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">{copy.playgroundText}</p>
          </div>

          <div className="relative isolate flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#070a10] p-6 sm:min-h-72">
            <div className="absolute inset-0 opacity-40" aria-hidden="true" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            <div className="absolute inset-0" aria-hidden="true" style={{ background: `radial-gradient(circle at 50% 50%, rgba(${activeAccent.rgb}, .12), transparent 60%)` }} />
            <div className="absolute h-40 w-40 rounded-full transition-all duration-200" aria-hidden="true" style={{ background: activeAccent.hex, opacity: glow / 180, filter: `blur(${blur}px)`, transform: `scale(${.7 + glow / 120}) rotate(${rotation}deg)` }} />
            <div className="signal-orb relative flex h-36 w-36 items-center justify-center rounded-full border bg-black/35 sm:h-40 sm:w-40" style={{ borderColor: `rgba(${activeAccent.rgb}, .55)`, boxShadow: `0 0 ${glow}px rgba(${activeAccent.rgb}, .22)`, transform: `rotate(${rotation}deg)`, transition: "all 240ms ease" }}>
              <div className="absolute inset-3 rounded-full border border-dashed" style={{ borderColor: `rgba(${activeAccent.rgb}, .35)` }} />
              <div className="h-16 w-16 rounded-full border-2" style={{ borderColor: activeAccent.hex, boxShadow: `0 0 ${Math.round(glow / 2)}px rgba(${activeAccent.rgb}, .45)`, filter: `blur(${Math.round(blur / 10)}px)` }} />
              <span className="absolute bottom-5 font-mono text-[9px] uppercase tracking-[.25em] text-white/60">signal / {rotation}°</span>
            </div>
            <span className="absolute left-3 top-3 font-mono text-[9px] text-white/30">X: 050 / Y: 050</span>
            <span className="absolute bottom-3 right-3 font-mono text-[9px] text-white/30">{activeAccent.hex}</span>
          </div>

          <div className="mt-6 space-y-5">
            <label className="block text-xs text-white/70">
              <span className="flex items-center justify-between gap-3"><span>{copy.glow}</span><output className="font-mono text-cyber-neonGreen">{glow}px</output></span>
              <input aria-label={copy.glow} type="range" min="8" max="100" value={glow} onChange={(event) => setGlow(Number(event.target.value))} className="mt-3 block w-full cursor-pointer accent-emerald-400" />
            </label>
            <label className="block text-xs text-white/70">
              <span className="flex items-center justify-between gap-3"><span>{copy.blur}</span><output className="font-mono text-cyber-neonGreen">{blur}px</output></span>
              <input aria-label={copy.blur} type="range" min="0" max="64" value={blur} onChange={(event) => setBlur(Number(event.target.value))} className="mt-3 block w-full cursor-pointer accent-emerald-400" />
            </label>
            <label className="block text-xs text-white/70">
              <span className="flex items-center justify-between gap-3"><span>{copy.rotation}</span><output className="font-mono text-cyber-neonGreen">{rotation}°</output></span>
              <input aria-label={copy.rotation} type="range" min="0" max="360" value={rotation} onChange={(event) => setRotation(Number(event.target.value))} className="mt-3 block w-full cursor-pointer accent-emerald-400" />
            </label>
            <fieldset>
              <legend className="mb-3 text-xs text-white/70">{copy.palette}</legend>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(accents) as Accent[]).map((key) => (
                  <button key={key} type="button" onClick={() => setAccent(key)} aria-pressed={accent === key} className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-neonGreen ${accent === key ? "border-white/50 bg-white/10 text-white" : "border-white/10 text-white/55 hover:border-white/25"}`}>
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: accents[key].hex, boxShadow: `0 0 10px ${accents[key].hex}` }} />
                    {accents[key].label}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
          <button type="button" onClick={resetPlayground} className="mt-6 rounded-xl border border-white/10 px-4 py-2.5 text-xs text-white/60 transition hover:border-cyber-neonGreen/40 hover:text-cyber-neonGreen">{copy.reset}</button>
        </div>

        <aside className="flex min-w-0 flex-col rounded-2xl border border-cyber-gold/15 bg-[#090a0d] p-4 sm:p-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-cyber-gold">{copy.inspect}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">.signal-orb</h3>
            <p className="mt-2 text-sm leading-6 text-white/50">{isEs ? "El resultado cambia junto con los controles. Este es el CSS equivalente a los parámetros seleccionados." : "The result changes alongside the controls. This is the CSS equivalent of the selected parameters."}</p>
          </div>
          <pre className="mt-5 min-w-0 flex-1 overflow-x-auto rounded-xl border border-white/[0.07] bg-black/45 p-4 text-[11px] leading-6 text-white/70"><code>{cssSnippet}</code></pre>
          <button type="button" onClick={copyCss} className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-cyber-neonGreen/35 px-4 py-3 text-xs font-semibold text-cyber-neonGreen transition hover:bg-cyber-neonGreen/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-neonGreen">
            <span aria-hidden="true">{copied ? "✓" : "⧉"}</span>{copied ? copy.copied : copy.copyCss}
          </button>
          <p className="mt-5 border-t border-white/[0.07] pt-4 text-xs leading-6 text-white/40">{copy.note}</p>
        </aside>
      </section>

      <footer className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-white/40">{isEs ? "Una idea, una variable y feedback visible. Así se construye una interfaz que se puede entender." : "One idea, one variable, visible feedback. That's how you build an interface people can understand."}</p>
        <Link href="/contact" className="shrink-0 text-xs font-semibold text-cyber-gold transition hover:text-cyber-neonGreen">{isEs ? "Hablemos de tu proyecto" : "Let's talk about your project"} <span aria-hidden="true">↗</span></Link>
      </footer>
    </div>
  );
}
