export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  demo?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: "chint",
    title: "CHINT",
    year: "2024",
    description: "Proyecto web reversionado desde cero enfocado en el análisis crítico de la convergencia entre inteligencia artificial y la transformación social en la actualidad. Desplegado en Netlify.",
    tags: ["HTML", "CSS"],
    demo: "https://chint.netlify.app/",
  },
  {
    slug: "irbis-supplies",
    title: "Irbis Supplies",
    year: "2024",
    description: "Tienda online ficticia refactorizada progresivamente desde JavaScript Vanilla con TypeScript y CoffeeScript, incorporando arquitectura modular. Desplegado en Netlify.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "CoffeeScript", "UX/UI"],
    demo: "https://irbis-supplies.netlify.app/",
  },
  {
    slug: "art-synt",
    title: "Art-Synt",
    year: "2024",
    description: "Tienda online ficticia. Utiliza Firebase como base de datos. Desplegado en Vercel.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Firebase", "UX/UI"],
    demo: "https://art-synt.vercel.app/",
  },
  {
    slug: "inteligencia-artificial",
    title: "Inteligencia Artificial",
    year: "2025",
    description: "Fast Prompting para generar textos e imágenes de calidad utilizando IA, reduciendo costos y mejorando consistencia. Implementado en Jupyter Notebook con un caso de uso concreto.",
    tags: ["IA"],
  },
  {
    slug: "ai-automation",
    title: "Automatización con IA",
    year: "2026",
    description: "Workflow en N8N integrando LLMs, orquestando procesos inteligentes que reaccionan a eventos reales sin intervención manual.",
    tags: ["IA", "Automation"],
  },
  {
    slug: "dinosauria",
    title: "Dinosauria",
    year: "2026",
    description: "Página web con información de los dinosaurios más populares de la cultura moderna. Desplegado en Vercel.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "CoffeeScript", "React", "UX/UI"],
    demo: "https://dinosauria.vercel.app/",
  },
  {
    slug: "calcu-len",
    title: "Calcu-len",
    year: "2026",
    description: "Calculadora integral de usos múltiples. Desplegado en Vercel.",
    tags: ["UX/UI"],
    demo: "https://calcu-len.vercel.app/",
  },
  {
    slug: "calcu-lenD",
    title: "Calcu-lenD",
    year: "2026",
    description: "Convertidora no oficial de monedas. Desplegado en Vercel.",
    tags: ["UX/UI"],
    demo: "https://calcu-len-d.vercel.app/",
  },
  {
    slug: "coming-soon",
    title: "PRÓXIMAMENTE",
    year: "❔",
    description: "☑️ Nuevos proyectos en proceso."
  }
];
