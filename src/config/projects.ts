export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "irbis-supplies",
    title: "Irbis Supplies",
    year: "2026",
    description: "E-commerce React con estética cyberpunk. Carrito y experiencia de compra enfocada en UX.",
    tags: ["React", "UI", "E-commerce"],
    github: "https://github.com/tu-usuario/irbis-supplies",
    demo: "https://tu-demo.vercel.app"
  },
  {
    slug: "dinosauria",
    title: "Dinosauria",
    year: "2026",
    description: "Catálogo de especies con navegación rápida, cards y filtros (ideal para sumar más universos).",
    tags: ["Next.js", "Tailwind", "UX"],
    github: "https://github.com/tu-usuario/dinosauria"
  },
  {
    slug: "calcu-len",
    title: "Calcu-len",
    year: "2026",
    description: "Herramienta de cálculo con UI clara y foco en validaciones (menos bugs, más control).",
    tags: ["TypeScript", "Form UX"]
  },
  {
    slug: "ax-notes",
    title: "AX & Agentic UI Notes",
    year: "2026",
    description: "Micro-site para explicar conceptos de Agent Experience con ejemplos simples y visuales.",
    tags: ["Content", "UI", "Motion"]
  },
  {
    slug: "mine-sweeper",
    title: "Buscaminas (Web)",
    year: "2026",
    description: "Juego clásico: feedback inmediato y animaciones sutiles. Ideal para mostrar lógica + UI.",
    tags: ["JS", "Game UI", "State"]
  },
  {
    slug: "portfolio",
    title: "Este portfolio",
    year: "2026",
    description: "Next.js + Tailwind + Three.js + Anime.js + Swiper + Firebase + SweetAlert2.",
    tags: ["Next.js", "Three.js", "Firebase"]
  }
];
