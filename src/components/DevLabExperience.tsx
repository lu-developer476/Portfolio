"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

type ToolId = "json" | "base64" | "url" | "uuid" | "timestamp";
type ToolDefinition = { id: ToolId; icon: string; name: string; description: string; tag: string };

const tools: Record<"es" | "en", ToolDefinition[]> = {
  es: [
    { id: "json", icon: "{ }", name: "JSON Toolkit", description: "Validá, formateá y compactá JSON.", tag: "DATA" },
    { id: "base64", icon: "B64", name: "Base64", description: "Codificá o decodificá texto al instante.", tag: "ENCODING" },
    { id: "url", icon: "%", name: "URL Encoder", description: "Codificá o decodificá componentes de URL.", tag: "WEB" },
    { id: "uuid", icon: "ID", name: "UUID Generator", description: "Generá identificadores únicos v4.", tag: "UTILITY" },
    { id: "timestamp", icon: "TS", name: "Timestamp", description: "Convertí fechas a Unix y viceversa.", tag: "TIME" },
  ],
  en: [
    { id: "json", icon: "{ }", name: "JSON Toolkit", description: "Validate, format, and minify JSON.", tag: "DATA" },
    { id: "base64", icon: "B64", name: "Base64", description: "Encode or decode text instantly.", tag: "ENCODING" },
    { id: "url", icon: "%", name: "URL Encoder", description: "Encode or decode URL components.", tag: "WEB" },
    { id: "uuid", icon: "ID", name: "UUID Generator", description: "Generate unique v4 identifiers.", tag: "UTILITY" },
    { id: "timestamp", icon: "TS", name: "Timestamp", description: "Convert dates to and from Unix time.", tag: "TIME" },
  ],
};

const samples: Record<ToolId, string> = {
  json: '{\n  "name": "Dev Lab",\n  "stack": ["React", "TypeScript"],\n  "active": true\n}',
  base64: "Build something useful.",
  url: "search=dev lab&mode=fast",
  uuid: "",
  timestamp: "2026-10-26T12:00:00Z",
};

export default function DevLabExperience() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const locale = isEs ? "es" : "en";
  const [activeTool, setActiveTool] = useState<ToolId>("json");
  const [input, setInput] = useState(samples.json);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [base64Mode, setBase64Mode] = useState<"encode" | "decode">("encode");
  const [urlMode, setUrlMode] = useState<"encode" | "decode">("encode");
  const [jsonMode, setJsonMode] = useState<"pretty" | "minify">("pretty");
  const [uuidCount, setUuidCount] = useState("3");

  const copy = isEs ? {
    back: "Volver al perfil", kicker: "CAJA DE HERRAMIENTAS PARA DEVELOPERS",
    intro: "Herramientas pequeñas, útiles y ejecutadas en tu navegador. Sin cuentas, sin backend y sin enviar tus datos.",
    tools: "Herramientas", select: "Seleccioná una herramienta para empezar.",
    input: "ENTRADA", output: "RESULTADO", run: "Procesar", copy: "Copiar resultado",
    copied: "Copiado al portapapeles", reset: "Restablecer", sample: "Cargar ejemplo",
    pretty: "Formatear", minify: "Compactar", encode: "Codificar", decode: "Decodificar",
    generate: "Generar UUID", count: "Cantidad", convert: "Convertir fecha",
    now: "Usar fecha actual", valid: "JSON válido", chars: "caracteres",
    empty: "El resultado aparecerá acá.", local: "100% local · No se envían datos",
    jsonHint: "Pegá JSON para validar, formatear o compactar.", base64Hint: "Trabaja con texto UTF-8. No es cifrado: no uses Base64 para proteger secretos.",
    urlHint: "Codifica o decodifica un componente de URL, no una URL completa.", uuidHint: "Generá UUID v4 aleatorios para pruebas, mocks o datos de desarrollo.",
    timestampHint: "Ingresá una fecha ISO 8601 o un timestamp Unix en segundos/milisegundos.",
    timestampPlaceholder: "2026-10-26T12:00:00Z o 1793016000",
    jsonError: "JSON inválido. Revisá la sintaxis y las comillas.",
    base64Error: "No se pudo decodificar Base64. Verificá la entrada.",
    urlError: "No se pudo decodificar el componente URL.",
    dateError: "Fecha o timestamp no válido.",
    ready: "Listo para procesar.", featureTitle: "Hecho para el flujo de trabajo real",
    feature1: "Resultados inmediatos", feature1d: "Sin esperas de red ni servicios externos.",
    feature2: "Privacidad por diseño", feature2d: "El procesamiento ocurre del lado del cliente.",
    feature3: "Herramientas concretas", feature3d: "Utilidades comunes para tareas cotidianas de desarrollo.",
    foot: "Un laboratorio tiene que resolver problemas. Empecemos por los pequeños."
  } : {
    back: "Back to profile", kicker: "A DEVELOPER'S TOOLBOX",
    intro: "Small, useful tools running right in your browser. No accounts, no backend, and no data sent away.",
    tools: "Tools", select: "Select a tool to get started.",
    input: "INPUT", output: "OUTPUT", run: "Process", copy: "Copy result",
    copied: "Copied to clipboard", reset: "Reset", sample: "Load example",
    pretty: "Format", minify: "Minify", encode: "Encode", decode: "Decode",
    generate: "Generate UUIDs", count: "Count", convert: "Convert date",
    now: "Use current time", valid: "Valid JSON", chars: "characters",
    empty: "Your result will appear here.", local: "100% local · No data sent",
    jsonHint: "Paste JSON to validate, format, or minify it.", base64Hint: "Works with UTF-8 text. Base64 is not encryption—never use it to protect secrets.",
    urlHint: "Encodes or decodes a URL component, not a complete URL.", uuidHint: "Generate random v4 UUIDs for tests, mocks, or development data.",
    timestampHint: "Enter an ISO 8601 date or a Unix timestamp in seconds/milliseconds.",
    timestampPlaceholder: "2026-10-26T12:00:00Z or 1793016000",
    jsonError: "Invalid JSON. Check the syntax and quotation marks.",
    base64Error: "Could not decode Base64. Check the input.",
    urlError: "Could not decode the URL component.",
    dateError: "Invalid date or timestamp.",
    ready: "Ready to process.", featureTitle: "Built for real workflows",
    feature1: "Instant results", feature1d: "No network wait or external services.",
    feature2: "Privacy by design", feature2d: "All processing happens on the client side.",
    feature3: "Practical utilities", feature3d: "Common helpers for everyday development tasks.",
    foot: "A lab should solve problems. Start with the small ones."
  };

  const selected = tools[locale].find((tool) => tool.id === activeTool)!;

  function chooseTool(id: ToolId) {
    setActiveTool(id);
    setInput(samples[id]);
    setOutput("");
    setError("");
    setNotice("");
    if (id === "base64") setBase64Mode("encode");
    if (id === "url") setUrlMode("encode");
    if (id === "json") setJsonMode("pretty");
  }

  function loadSample() {
    setInput(activeTool === "uuid" ? "" : activeTool === "timestamp" ? new Date().toISOString() : samples[activeTool]);
    setOutput("");
    setError("");
    setNotice("");
  }

  function process() {
    setError("");
    setNotice("");
    try {
      if (activeTool === "json") {
        const parsed: unknown = JSON.parse(input);
        setOutput(jsonMode === "pretty" ? JSON.stringify(parsed, null, 2) : JSON.stringify(parsed));
        setNotice(copy.valid);
      } else if (activeTool === "base64") {
        if (base64Mode === "encode") {
          const bytes = new TextEncoder().encode(input);
          let binary = "";
          bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
          setOutput(btoa(binary));
        } else {
          const binary = atob(input.trim());
          const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
          setOutput(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
        }
      } else if (activeTool === "url") {
        setOutput(urlMode === "encode" ? encodeURIComponent(input) : decodeURIComponent(input));
      } else if (activeTool === "uuid") {
        const count = Math.max(1, Math.min(20, Number(uuidCount) || 1));
        setOutput(Array.from({ length: count }, () => crypto.randomUUID()).join("\n"));
      } else {
        const raw = input.trim();
        const numeric = /^-?\d+(\.\d+)?$/.test(raw);
        const date = numeric ? new Date(Number(raw) * (raw.replace(/\D/g, "").length <= 10 ? 1000 : 1)) : new Date(raw);
        if (!raw || Number.isNaN(date.getTime())) throw new Error("invalid-date");
        setOutput(`ISO 8601  ${date.toISOString()}\nUnix (s)  ${Math.floor(date.getTime() / 1000)}\nUnix (ms) ${date.getTime()}\nUTC       ${date.toUTCString()}`);
      }
      setNotice(activeTool === "json" ? copy.valid : copy.ready);
    } catch {
      setOutput("");
      setError(activeTool === "json" ? copy.jsonError : activeTool === "base64" ? copy.base64Error : activeTool === "url" ? copy.urlError : copy.dateError);
    }
  }

  async function copyOutput() {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setNotice(copy.copied);
    } catch {
      setError(isEs ? "El navegador no permitió copiar el resultado." : "The browser did not allow clipboard access.");
    }
  }

  return (
    <div className="space-y-10 sm:space-y-14">
      <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/70 transition hover:border-cyber-neonGreen/50 hover:text-cyber-neonGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-neonGreen">
        <span aria-hidden="true">←</span>{copy.back}
      </Link>

      <header className="relative overflow-hidden rounded-3xl border border-cyber-neonGreen/20 bg-[#080b0d] px-5 py-8 sm:px-9 sm:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyber-neonGreen/10 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[.22em] text-cyber-neonGreen"><span className="h-1.5 w-1.5 rounded-full bg-cyber-neonGreen shadow-[0_0_12px_rgba(5,247,183,.8)]" />{copy.kicker}</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-.06em] text-white sm:text-6xl">DEV <span className="text-cyber-gold">LAB</span></h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">{copy.intro}</p>
          <div className="mt-7 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider text-white/50">
            <span className="rounded-full border border-white/10 px-3 py-1.5">Client-side</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5">5 utilities</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5">No dependencies</span>
          </div>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]" aria-label={copy.tools}>
        <aside className="min-w-0">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-[.18em] text-white/65">{copy.tools}</h2>
            <span className="font-mono text-[10px] text-white/30">05 MODULES</span>
          </div>
          <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1" aria-label={copy.tools}>
            {tools[locale].map((tool, index) => (
              <button key={tool.id} type="button" onClick={() => chooseTool(tool.id)} aria-current={activeTool === tool.id ? "page" : undefined} className={`group min-w-0 rounded-xl border p-3 text-left transition sm:p-4 ${activeTool === tool.id ? "border-cyber-neonGreen/45 bg-cyber-neonGreen/[0.07]" : "border-white/[0.08] bg-black/20 hover:border-white/20"}`}>
                <div className="flex items-center justify-between gap-2">
                  <span className={`flex h-8 min-w-8 items-center justify-center rounded-lg border px-1 font-mono text-[10px] ${activeTool === tool.id ? "border-cyber-neonGreen/30 text-cyber-neonGreen" : "border-white/10 text-white/50"}`}>{tool.icon}</span>
                  <span className="font-mono text-[9px] text-white/25">0{index + 1}</span>
                </div>
                <span className="mt-3 block text-xs font-semibold text-white/85 sm:text-sm">{tool.name}</span>
                <span className="mt-1 hidden text-xs leading-5 text-white/45 lg:block">{tool.description}</span>
                <span className="mt-2 hidden font-mono text-[9px] tracking-wider text-cyber-neonGreen/60 lg:block">{tool.tag}</span>
              </button>
            ))}
          </nav>
          <div className="mt-4 rounded-xl border border-white/[0.08] bg-black/20 p-4">
            <p className="font-mono text-[9px] uppercase tracking-[.2em] text-cyber-neonGreen">PRIVACY / 100%</p>
            <p className="mt-2 text-xs leading-5 text-white/45">{copy.local}</p>
          </div>
        </aside>

        <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#080b0d]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyber-neonGreen/25 bg-cyber-neonGreen/[0.06] font-mono text-xs text-cyber-neonGreen">{selected.icon}</span>
              <div className="min-w-0">
                <h2 className="font-semibold text-white">{selected.name}</h2>
                <p className="mt-0.5 text-xs text-white/40">{selected.description}</p>
              </div>
            </div>
            <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] tracking-wider text-white/40">{selected.tag}</span>
          </div>

          <div className="space-y-4 p-4 sm:p-6">
            <p className="text-xs leading-5 text-white/45">
              {activeTool === "json" ? copy.jsonHint : activeTool === "base64" ? copy.base64Hint : activeTool === "url" ? copy.urlHint : activeTool === "uuid" ? copy.uuidHint : copy.timestampHint}
            </p>

            {activeTool === "json" && (
              <div className="flex flex-wrap gap-2" role="group" aria-label={isEs ? "Modo JSON" : "JSON mode"}>
                <button type="button" onClick={() => setJsonMode("pretty")} aria-pressed={jsonMode === "pretty"} className={`rounded-lg border px-3 py-2 text-xs transition ${jsonMode === "pretty" ? "border-cyber-neonGreen/40 text-cyber-neonGreen" : "border-white/10 text-white/50"}`}>{copy.pretty}</button>
                <button type="button" onClick={() => setJsonMode("minify")} aria-pressed={jsonMode === "minify"} className={`rounded-lg border px-3 py-2 text-xs transition ${jsonMode === "minify" ? "border-cyber-neonGreen/40 text-cyber-neonGreen" : "border-white/10 text-white/50"}`}>{copy.minify}</button>
              </div>
            )}
            {activeTool === "base64" && (
              <div className="flex gap-2">
                {(["encode", "decode"] as const).map((mode) => <button key={mode} type="button" onClick={() => setBase64Mode(mode)} aria-pressed={base64Mode === mode} className={`rounded-lg border px-3 py-2 text-xs transition ${base64Mode === mode ? "border-cyber-neonGreen/40 text-cyber-neonGreen" : "border-white/10 text-white/50"}`}>{copy[mode]}</button>)}
              </div>
            )}
            {activeTool === "url" && (
              <div className="flex gap-2">
                {(["encode", "decode"] as const).map((mode) => <button key={mode} type="button" onClick={() => setUrlMode(mode)} aria-pressed={urlMode === mode} className={`rounded-lg border px-3 py-2 text-xs transition ${urlMode === mode ? "border-cyber-neonGreen/40 text-cyber-neonGreen" : "border-white/10 text-white/50"}`}>{copy[mode]}</button>)}
              </div>
            )}
            {activeTool === "uuid" && (
              <label className="flex max-w-xs items-center justify-between gap-4 text-xs text-white/65">{copy.count}
                <select value={uuidCount} onChange={(event) => setUuidCount(event.target.value)} className="rounded-lg border border-white/10 bg-[#101317] px-3 py-2 text-white outline-none focus:border-cyber-neonGreen/50">
                  {[1, 3, 5, 10, 20].map((count) => <option key={count} value={count}>{count}</option>)}
                </select>
              </label>
            )}

            {activeTool === "timestamp" && (
              <button type="button" onClick={() => setInput(new Date().toISOString())} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/60 transition hover:border-cyber-neonGreen/40 hover:text-cyber-neonGreen">{copy.now}</button>
            )}

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label htmlFor="dev-lab-input" className="font-mono text-[10px] font-semibold tracking-[.18em] text-white/50">{copy.input}</label>
                <button type="button" onClick={loadSample} className="text-[10px] text-cyber-neonGreen/75 transition hover:text-cyber-neonGreen">{copy.sample}</button>
              </div>
              <textarea id="dev-lab-input" value={input} onChange={(event) => { setInput(event.target.value); setError(""); setNotice(""); }} spellCheck={false} placeholder={activeTool === "timestamp" ? copy.timestampPlaceholder : ""} className="min-h-48 w-full resize-y rounded-xl border border-white/10 bg-black/35 p-4 font-mono text-xs leading-6 text-white/80 outline-none transition placeholder:text-white/25 focus:border-cyber-neonGreen/40 sm:min-h-56" />
              <div className="mt-1 text-right font-mono text-[9px] text-white/25">{input.length} {copy.chars}</div>
            </div>

            <button type="button" onClick={process} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyber-neonGreen/45 bg-cyber-neonGreen/[0.07] px-4 py-3 text-sm font-semibold text-cyber-neonGreen transition hover:bg-cyber-neonGreen/[0.13] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-neonGreen sm:w-auto">
              <span aria-hidden="true">▶</span>{activeTool === "uuid" ? copy.generate : activeTool === "timestamp" ? copy.convert : copy.run}
            </button>

            {error && <p role="alert" className="rounded-lg border border-rose-400/20 bg-rose-400/[0.06] px-3 py-2 text-xs leading-5 text-rose-300">{error}</p>}
            {notice && !error && <p role="status" className="text-xs text-cyber-neonGreen/80">{notice}</p>}

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label htmlFor="dev-lab-output" className="font-mono text-[10px] font-semibold tracking-[.18em] text-white/50">{copy.output}</label>
                <button type="button" onClick={copyOutput} disabled={!output} className="rounded-lg border border-white/10 px-3 py-1.5 text-[10px] text-white/60 transition hover:border-cyber-neonGreen/40 hover:text-cyber-neonGreen disabled:cursor-not-allowed disabled:opacity-30">{copy.copy}</button>
              </div>
              <textarea id="dev-lab-output" value={output} readOnly placeholder={copy.empty} className="min-h-40 w-full resize-y rounded-xl border border-white/[0.07] bg-black/45 p-4 font-mono text-xs leading-6 text-cyber-neonGreen/90 outline-none placeholder:text-white/25 sm:min-h-48" />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-cyber-neonGreen">WHY THIS LAB</p>
            <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">{copy.featureTitle}</h2>
          </div>
          <span className="font-mono text-[10px] text-white/30">LOCAL FIRST / BUILT FOR DEVELOPERS</span>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { n: "01", title: copy.feature1, description: copy.feature1d },
            { n: "02", title: copy.feature2, description: copy.feature2d },
            { n: "03", title: copy.feature3, description: copy.feature3d },
          ].map((item) => (
            <article key={item.n} className="rounded-xl border border-white/[0.08] bg-black/20 p-5">
              <span className="font-mono text-xs text-cyber-gold">{item.n} / 03</span>
              <h3 className="mt-4 text-sm font-semibold text-white/85">{item.title}</h3>
              <p className="mt-2 text-xs leading-6 text-white/45">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="border-t border-white/10 pt-5">
        <p className="text-xs leading-6 text-white/40">{copy.foot}</p>
      </div>
    </div>
  );
}
