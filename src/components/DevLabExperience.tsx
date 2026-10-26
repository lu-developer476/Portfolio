"use client";

import { useState } from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useLanguage } from "@/lib/i18n";

type ToolId = "json" | "base64" | "url" | "uuid" | "timestamp" | "hash" | "case";
type ToolDefinition = { id: ToolId; icon: string; name: string; description: string; tag: string };
type HashAlgorithm = "SHA-256" | "SHA-384" | "SHA-512";
type CaseMode = "upper" | "lower" | "title" | "camel" | "snake" | "kebab";

const tools: Record<"es" | "en", ToolDefinition[]> = {
  es: [
    { id: "json", icon: "{ }", name: "JSON Toolkit", description: "Validá, formateá y compactá JSON.", tag: "DATA" },
    { id: "base64", icon: "B64", name: "Base64", description: "Codificá o decodificá texto al instante.", tag: "ENCODING" },
    { id: "url", icon: "%", name: "URL Encoder", description: "Codificá o decodificá componentes de URL.", tag: "WEB" },
    { id: "uuid", icon: "ID", name: "UUID Generator", description: "Generá identificadores únicos v4.", tag: "UTILITY" },
    { id: "timestamp", icon: "TS", name: "Timestamp", description: "Convertí fechas a Unix y viceversa.", tag: "TIME" },
    { id: "hash", icon: "#", name: "Hash Generator", description: "Generá hashes SHA-256, SHA-384 y SHA-512.", tag: "CRYPTO" },
    { id: "case", icon: "Aa", name: "Case Converter", description: "Convertí texto a camelCase, snake_case y más.", tag: "TEXT" },
  ],
  en: [
    { id: "json", icon: "{ }", name: "JSON Toolkit", description: "Validate, format, and minify JSON.", tag: "DATA" },
    { id: "base64", icon: "B64", name: "Base64", description: "Encode or decode text instantly.", tag: "ENCODING" },
    { id: "url", icon: "%", name: "URL Encoder", description: "Encode or decode URL components.", tag: "WEB" },
    { id: "uuid", icon: "ID", name: "UUID Generator", description: "Generate unique v4 identifiers.", tag: "UTILITY" },
    { id: "timestamp", icon: "TS", name: "Timestamp", description: "Convert dates to and from Unix time.", tag: "TIME" },
    { id: "hash", icon: "#", name: "Hash Generator", description: "Generate SHA-256, SHA-384, and SHA-512 hashes.", tag: "CRYPTO" },
    { id: "case", icon: "Aa", name: "Case Converter", description: "Convert text to camelCase, snake_case, and more.", tag: "TEXT" },
  ],
};

const samples: Record<ToolId, string> = {
  json: '{\n  "name": "Dev Lab",\n  "stack": ["React", "TypeScript"],\n  "active": true\n}',
  base64: "Build something useful.",
  url: "search=dev lab&mode=fast",
  uuid: "",
  timestamp: "2026-10-26T12:00:00Z",
  hash: "Text to hash",
  case: "Convert this text to camelCase",
};

export default function DevLabExperience() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const locale = isEs ? "es" : "en";
  const [activeTool, setActiveTool] = useState<ToolId>("json");
  const [expandedTool, setExpandedTool] = useState<ToolId | null>(null);
  const [input, setInput] = useState(samples.json);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [base64Mode, setBase64Mode] = useState<"encode" | "decode">("encode");
  const [urlMode, setUrlMode] = useState<"encode" | "decode">("encode");
  const [jsonMode, setJsonMode] = useState<"pretty" | "minify">("pretty");
  const [uuidCount, setUuidCount] = useState("3");
  const [hashAlgorithm, setHashAlgorithm] = useState<HashAlgorithm>("SHA-256");
  const [caseMode, setCaseMode] = useState<CaseMode>("camel");

  const copy = isEs ? {
    back: "Volver",
    intro: "Útiles y ejecutadas en tu navegador",
    tools: "Herramientas", select: "Seleccioná una herramienta para empezar.",
    privacyLabel: "PRIVACIDAD",
    input: "ENTRADA", output: "RESULTADO", run: "Procesar", copy: "Copiar resultado",
    copied: "Copiado al portapapeles", reset: "Restablecer", sample: "Cargar ejemplo",
    pretty: "Formatear", minify: "Compactar", encode: "Codificar", decode: "Decodificar",
    generate: "Generar UUID", count: "Cantidad", convert: "Convertir fecha",
    now: "Usar fecha actual", valid: "JSON válido", chars: "caracteres",
    empty: "El resultado aparecerá acá.", local: "100% local",
    jsonHint: "Pegá JSON para validar, formatear o compactar.", base64Hint: "Trabaja con texto UTF-8. No es cifrado: no uses Base64 para proteger secretos.",
    urlHint: "Codifica o decodifica un componente de URL, no una URL completa.", uuidHint: "Generá UUID v4 aleatorios para pruebas, mocks o datos de desarrollo.",
    timestampHint: "Ingresá una fecha ISO 8601 o un timestamp Unix en segundos/milisegundos.",
    timestampPlaceholder: "2026-10-26T12:00:00Z o 1793016000",
    jsonError: "JSON inválido. Revisá la sintaxis y las comillas.",
    base64Error: "No se pudo decodificar Base64. Verificá la entrada.",
    urlError: "No se pudo decodificar el componente URL.",
    dateError: "Fecha o timestamp no válido.",
    welcomeTitle: "ACCESO CONCEDIDO", ready: "Listo para procesar.", processError: "No se pudo procesar el texto.", featureTitle: "Herramientas",
    hashHint: "Generá el hash de un texto en tu navegador.", caseHint: "Elegí un formato y convertí el texto al instante.",
    hashError: "No se pudo generar el hash. Probá de nuevo.", caseModes: { upper: "MAYÚSCULAS", lower: "minúsculas", title: "Título", camel: "camelCase", snake: "snake_case", kebab: "kebab-case" },
    feature1: "Resultados inmediatos", feature1d: "Sin esperas de red ni servicios externos.",
    feature2: "Privacidad por diseño", feature2d: "El procesamiento ocurre del lado del cliente.",
      } : {
    back: "Back",
    intro: "Useful tools running in your browser",
    tools: "Tools", select: "Select a tool to get started.",
    privacyLabel: "PRIVACY",
    input: "INPUT", output: "OUTPUT", run: "Process", copy: "Copy result",
    copied: "Copied to clipboard", reset: "Reset", sample: "Load example",
    pretty: "Format", minify: "Minify", encode: "Encode", decode: "Decode",
    generate: "Generate UUIDs", count: "Count", convert: "Convert date",
    now: "Use current time", valid: "Valid JSON", chars: "characters",
    empty: "Your result will appear here.", local: "100% local",
    jsonHint: "Paste JSON to validate, format, or minify it.", base64Hint: "Works with UTF-8 text. Base64 is not encryption—never use it to protect secrets.",
    urlHint: "Encodes or decodes a URL component, not a complete URL.", uuidHint: "Generate random v4 UUIDs for tests, mocks, or development data.",
    timestampHint: "Enter an ISO 8601 date or a Unix timestamp in seconds/milliseconds.",
    timestampPlaceholder: "2026-10-26T12:00:00Z or 1793016000",
    jsonError: "Invalid JSON. Check the syntax and quotation marks.",
    base64Error: "Could not decode Base64. Check the input.",
    urlError: "Could not decode the URL component.",
    dateError: "Invalid date or timestamp.",
    welcomeTitle: "ACCESS GRANTED", ready: "Ready to process.", processError: "Could not process the text.", featureTitle: "Tools",
    hashHint: "Generate a text hash right in your browser.", caseHint: "Choose a format and convert text instantly.",
    hashError: "Could not generate the hash. Try again.", caseModes: { upper: "UPPERCASE", lower: "lowercase", title: "Title Case", camel: "camelCase", snake: "snake_case", kebab: "kebab-case" },
    feature1: "Instant results", feature1d: "No network wait or external services.",
    feature2: "Privacy by design", feature2d: "All processing happens on the client side.",
      };


  const explanations: Record<ToolId, { what: string; why: string; when: string; useful: string }> = isEs ? {
    json: { what: "JSON es un formato de texto para representar datos estructurados, como objetos, listas, números y valores booleanos.", why: "La herramienta comprueba que la sintaxis sea válida y permite ordenar los datos con sangría o quitar espacios innecesarios.", when: "Usala al revisar respuestas de APIs, archivos de configuración o datos que no se pueden leer fácilmente.", useful: "Sirve para detectar errores de comas, comillas o llaves y para preparar ejemplos. No valida que los datos cumplan las reglas de tu aplicación." },
    base64: { what: "Base64 representa bytes usando un conjunto limitado de caracteres; no cifra ni oculta de forma segura el contenido.", why: "Algunos sistemas necesitan transportar datos binarios o texto en formatos que aceptan un conjunto de caracteres restringido.", when: "Es útil al inspeccionar valores codificados en APIs, tokens de prueba o contenido embebido, si sabés que el dato está en Base64.", useful: "Permite convertir texto UTF-8 de ida y vuelta rápidamente. No introduzcas contraseñas ni datos sensibles pensando que quedan protegidos." },
    url: { what: "La codificación de componentes URL transforma caracteres especiales para que puedan viajar correctamente dentro de una URL.", why: "Espacios, ampersands y otros caracteres pueden alterar el significado de los parámetros si no se codifican cuando corresponde.", when: "Usala al construir parámetros de búsqueda, enlaces o solicitudes HTTP que incluyan texto ingresado por usuarios.", useful: "Ayuda a evitar que un valor rompa la estructura de una URL. Esta herramienta procesa un componente, no una URL completa." },
    uuid: { what: "Un UUID v4 es un identificador de 128 bits generado de forma aleatoria, con una estructura estandarizada.", why: "Permite asignar identificadores a registros, objetos de prueba o recursos sin tener que consultar un contador central.", when: "Es práctico para datos ficticios, prototipos, mocks y pruebas locales. En producción, revisá también los requisitos de unicidad y diseño de tu sistema.", useful: "Genera hasta 20 identificadores por vez. No reemplaza una estrategia de claves ni garantiza por sí solo la autorización o seguridad de un recurso." },
    timestamp: { what: "Unix timestamp representa un instante como la cantidad de segundos o milisegundos transcurridos desde el 1 de enero de 1970 UTC.", why: "Los sistemas suelen intercambiar fechas como números o marcas de tiempo, mientras que las personas necesitan verlas como fechas legibles.", when: "Usala al depurar logs, comparar fechas de APIs o interpretar valores numéricos que representan tiempo.", useful: "Convierte entre fechas ISO 8601 y timestamps, y muestra la fecha UTC. Confirmá si el dato original usa segundos o milisegundos y qué zona horaria espera tu sistema." },
    hash: { what: "Un hash criptográfico transforma datos de cualquier tamaño en una huella de longitud fija; esta herramienta ofrece SHA-256, SHA-384 y SHA-512.", why: "Las huellas permiten comparar contenido y detectar cambios sin comparar el texto completo.", when: "Sirve para ejemplos, pruebas de integridad y entender cómo cambia una huella al modificar la entrada.", useful: "El mismo texto produce el mismo hash con el mismo algoritmo. Un hash no es cifrado y no sirve por sí solo para almacenar contraseñas; para eso se usan funciones específicas como Argon2id, scrypt o bcrypt." },
    case: { what: "La conversión de mayúsculas y minúsculas cambia cómo se escribe un texto y puede separar palabras para aplicar convenciones como camelCase, snake_case o kebab-case.", why: "Los lenguajes, frameworks y APIs suelen adoptar convenciones de nombres distintas para variables, propiedades, archivos o identificadores.", when: "Usala al adaptar nombres entre una API, una base de datos, CSS o código JavaScript/TypeScript.", useful: "Acelera tareas repetitivas, pero no entiende el significado del texto ni resuelve todas las reglas de nombres propios, siglas o casos especiales." },
  } : {
    json: { what: "JSON is a text format for structured data, including objects, arrays, numbers, and boolean values.", why: "This tool checks syntax and lets you indent data for readability or remove unnecessary whitespace.", when: "Use it when inspecting API responses, configuration files, or data that is difficult to read.", useful: "It can reveal missing commas, quotes, or braces. It does not validate your application's business rules." },
    base64: { what: "Base64 represents bytes using a limited set of characters; it does not encrypt or securely hide content.", why: "Some systems need to carry binary data or text through formats with restricted character sets.", when: "Useful when inspecting encoded API values, test tokens, or embedded content if you know the data is Base64.", useful: "It converts UTF-8 text back and forth. Do not enter secrets assuming they will be protected." },
    url: { what: "URL component encoding transforms special characters so they can be safely represented inside a URL.", why: "Spaces, ampersands, and other characters can change parameter meaning if they are not encoded appropriately.", when: "Use it when building query parameters, links, or HTTP requests containing user-provided text.", useful: "It helps prevent a value from breaking URL structure. This tool handles a component, not a complete URL." },
    uuid: { what: "A UUID v4 is a randomly generated 128-bit identifier with a standardized structure.", why: "It lets you assign identifiers to records, test objects, or resources without relying on a central counter.", when: "Useful for sample data, prototypes, mocks, and local tests. Production systems still need appropriate uniqueness and data-model decisions.", useful: "Generates up to 20 identifiers at a time. It does not replace a key strategy or provide authorization or security by itself." },
    timestamp: { what: "A Unix timestamp represents a moment as seconds or milliseconds since January 1, 1970 UTC.", why: "Systems often exchange dates as numbers, while people need to read them as calendar dates.", when: "Use it to debug logs, compare API dates, or interpret numeric time values.", useful: "Converts ISO 8601 dates and timestamps and shows UTC. Confirm whether the input uses seconds or milliseconds and which time zone your system expects." },
    hash: { what: "A cryptographic hash maps input data to a fixed-length fingerprint; this tool supports SHA-256, SHA-384, and SHA-512.", why: "Fingerprints help compare content and detect changes without comparing the full text.", when: "Useful for examples, integrity checks, and seeing how a small input change affects a hash.", useful: "The same input and algorithm produce the same hash. Hashing is not encryption and this is not suitable for password storage; use dedicated functions such as Argon2id, scrypt, or bcrypt." },
    case: { what: "Case conversion changes letter casing and can split words into conventions such as camelCase, snake_case, or kebab-case.", why: "Languages, frameworks, and APIs often use different naming conventions for variables, properties, files, or identifiers.", when: "Use it when adapting names between an API, database, CSS, or JavaScript/TypeScript code.", useful: "It speeds up repetitive work but cannot infer meaning or handle every proper noun, acronym, or naming edge case." },
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
    if (id === "hash") setHashAlgorithm("SHA-256");
    if (id === "case") setCaseMode("camel");
  }

  function loadSample() {
    setInput(activeTool === "uuid" ? "" : activeTool === "timestamp" ? new Date().toISOString() : samples[activeTool]);
    setOutput("");
    setError("");
    setNotice("");
  }

  async function process() {
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
      } else if (activeTool === "timestamp") {
        const raw = input.trim();
        const numeric = /^-?\d+(\.\d+)?$/.test(raw);
        const date = numeric ? new Date(Number(raw) * (raw.replace(/\D/g, "").length <= 10 ? 1000 : 1)) : new Date(raw);
        if (!raw || Number.isNaN(date.getTime())) throw new Error("invalid-date");
        setOutput(`ISO 8601  ${date.toISOString()}\nUnix (s)  ${Math.floor(date.getTime() / 1000)}\nUnix (ms) ${date.getTime()}\nUTC       ${date.toUTCString()}`);
      } else if (activeTool === "hash") {
        const digest = await crypto.subtle.digest(hashAlgorithm, new TextEncoder().encode(input));
        setOutput(Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join(""));
      } else {
        const words = input.trim().replace(/([\p{Ll}\d])(\p{Lu})/gu, "$1 $2").split(/[^\p{L}\p{N}]+/u).filter(Boolean);
        const lowerWords = words.map((word) => word.toLocaleLowerCase());
        const titleWords = words.map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase());
        const result = caseMode === "upper" ? input.toLocaleUpperCase()
          : caseMode === "lower" ? input.toLocaleLowerCase()
          : caseMode === "title" ? titleWords.join(" ")
          : caseMode === "snake" ? lowerWords.join("_")
          : caseMode === "kebab" ? lowerWords.join("-")
          : lowerWords.map((word, index) => index === 0 ? word : word.charAt(0).toLocaleUpperCase() + word.slice(1)).join("");
        setOutput(result);
      }
      setNotice(activeTool === "json" ? copy.valid : copy.ready);
    } catch {
      setOutput("");
      setError(activeTool === "json" ? copy.jsonError : activeTool === "base64" ? copy.base64Error : activeTool === "url" ? copy.urlError : activeTool === "timestamp" ? copy.dateError : activeTool === "hash" ? copy.hashError : copy.processError);
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

      <header className="relative flex min-h-40 items-center justify-center overflow-hidden rounded-3xl border border-cyber-neonGreen/20 bg-[#080b0d] px-5 py-8 text-center sm:min-h-48 sm:px-9 sm:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyber-neonGreen/10 blur-3xl" />
        <div className="relative mx-auto w-full">
          <h1 className="text-4xl font-black tracking-[-.06em] text-cyber-neonGreen [text-shadow:0_0_6px_rgba(57,255,20,0.35),0_0_14px_rgba(57,255,20,0.18)] motion-safe:animate-[pulse_3s_ease-in-out_infinite] sm:text-6xl">{copy.welcomeTitle}</h1>

        </div>
      </header>

      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">{copy.featureTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">{copy.intro}</p>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { n: "01", title: copy.feature1, description: copy.feature1d },
            { n: "02", title: copy.feature2, description: copy.feature2d },
          ].map((item) => (
            <article key={item.n} className="rounded-xl border border-white/[0.08] bg-black/20 p-5">
              <span className="font-mono text-xs text-cyber-gold">{item.n} / 02</span>
              <h3 className="mt-4 text-sm font-semibold text-white/85">{item.title}</h3>
              <p className="mt-2 text-xs leading-6 text-white/45">{item.description}</p>
            </article>
          ))}
        </div>
      </section>


      <section className="space-y-6" aria-label={copy.tools}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={12}
          slidesPerView={1.15}
          breakpoints={{
            480: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
          className="projects-arrow-carousel dev-lab-tools-carousel"
          aria-label={copy.tools}
        >
          {tools[locale].map((tool, index) => (
            <SwiperSlide key={tool.id}>
              <div className="h-full rounded-xl border border-white/[0.08] bg-black/20 p-4">
                <div className="flex items-start gap-2">
                  <button type="button" onClick={() => chooseTool(tool.id)} aria-current={activeTool === tool.id ? "page" : undefined} className="group min-w-0 flex-1 text-left">
                    <div className="flex items-center justify-between gap-2">
                      <span className={"flex h-8 min-w-8 items-center justify-center rounded-lg border px-1 font-mono text-[10px] " + (activeTool === tool.id ? "border-cyber-neonGreen/30 text-cyber-neonGreen" : "border-white/10 text-white/50")}>{tool.icon}</span>
                      <span className="font-mono text-[9px] text-white/25">0{index + 1}</span>
                    </div>
                    <span className="mt-3 block text-sm font-semibold text-white/85">{tool.name}</span>
                    <span className="mt-1 block text-xs leading-5 text-white/45">{tool.description}</span>
                    <span className="mt-2 block font-mono text-[9px] tracking-wider text-cyber-neonGreen/60">{tool.tag}</span>
                  </button>
                  <button type="button" onClick={() => setExpandedTool(expandedTool === tool.id ? null : tool.id)} aria-expanded={expandedTool === tool.id} aria-label={isEs ? (expandedTool === tool.id ? "Ocultar explicación de " : "Explicar ") + tool.name : (expandedTool === tool.id ? "Hide explanation for " : "Explain ") + tool.name} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyber-gold/50 text-lg font-semibold text-cyber-gold transition hover:bg-cyber-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-gold">{expandedTool === tool.id ? "−" : "+"}</button>
                </div>
                {expandedTool === tool.id && (
                  <div className="mt-4 space-y-3 border-t border-cyber-gold/20 pt-3 text-xs leading-5 text-white/65">
                    <p><strong className="text-cyber-gold">{isEs ? "Qué es" : "What it is"}:</strong> {explanations[tool.id].what}</p>
                    <p><strong className="text-cyber-gold">{isEs ? "Por qué se usa" : "Why it is used"}:</strong> {explanations[tool.id].why}</p>
                    <p><strong className="text-cyber-gold">{isEs ? "Cuándo usarla" : "When to use it"}:</strong> {explanations[tool.id].when}</p>
                    <p><strong className="text-cyber-gold">{isEs ? "En qué ayuda" : "How it helps"}:</strong> {explanations[tool.id].useful}</p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[.18em] text-cyber-neonGreen">{copy.privacyLabel}</p>
          <p className="text-xs leading-5 text-white/70">{copy.local}</p>
        </div>

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
              {activeTool === "json" ? copy.jsonHint : activeTool === "base64" ? copy.base64Hint : activeTool === "url" ? copy.urlHint : activeTool === "uuid" ? copy.uuidHint : activeTool === "timestamp" ? copy.timestampHint : activeTool === "hash" ? copy.hashHint : copy.caseHint}
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
            {activeTool === "hash" && (
              <label className="flex max-w-xs items-center justify-between gap-4 text-xs text-white/65">
                {isEs ? "Algoritmo" : "Algorithm"}
                <select value={hashAlgorithm} onChange={(event) => setHashAlgorithm(event.target.value as HashAlgorithm)} className="rounded-lg border border-white/10 bg-[#101317] px-3 py-2 text-white outline-none focus:border-cyber-neonGreen/50">
                  {(["SHA-256", "SHA-384", "SHA-512"] as const).map((algorithm) => <option key={algorithm} value={algorithm}>{algorithm}</option>)}
                </select>
              </label>
            )}
            {activeTool === "case" && (
              <label className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/65">
                {isEs ? "Formato" : "Format"}
                <select value={caseMode} onChange={(event) => setCaseMode(event.target.value as CaseMode)} className="max-w-full rounded-lg border border-white/10 bg-[#101317] px-3 py-2 text-white outline-none focus:border-cyber-neonGreen/50">
                  {(["upper", "lower", "title", "camel", "snake", "kebab"] as const).map((mode) => <option key={mode} value={mode}>{copy.caseModes[mode]}</option>)}
                </select>
              </label>
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


    </div>
  );
}
