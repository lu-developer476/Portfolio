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
    tags: ["HTML", "CSS", "UX/UI", "Netlify"],
    demo: "https://chint.netlify.app/",
  },
  {
    slug: "irbis-supplies",
    title: "Irbis Supplies",
    year: "2024",
    description: "Tienda online ficticia refactorizada progresivamente desde JavaScript Vanilla con TypeScript y CoffeeScript, incorporando arquitectura modular. Desplegado en Netlify.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "CoffeeScript", "UX/UI", "Netlify"],
    demo: "https://irbis-supplies.netlify.app/",
  },
  {
    slug: "art-syntex",
    title: "Art-Syntex",
    year: "2024",
    description: "Tienda online ficticia. Utiliza Firebase como base de datos. Desplegado en Vercel.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Firebase", "UX/UI", "Vercel"],
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
    tags: ["IA", "Automation", "n8n"],
  },
  {
    slug: "dinosauria",
    title: "Dinosauria",
    year: "2026",
    description: "Enciclopedia con información de los dinosaurios ficticios más populares de la cultura moderna. Desplegado en Vercel.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "CoffeeScript", "React", "UX/UI", "Vercel"],
    demo: "https://dinosauria.vercel.app/",
  },
  {
    slug: "calcu-len",
    title: "Calcu-len",
    year: "2026",
    description: "Calculadora integral de usos múltiples. Desplegado en Vercel.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Django", "FastAPI", "UX/UI", "Vercel"],
    demo: "https://calcu-len.vercel.app/",
  },
  {
    slug: "calcu-lenD",
    title: "Calcu-lenD",
    year: "2026",
    description: "Convertidor no oficial de monedas. Desplegado en Vercel.",
    tags: ["CSS", "JavaScript", "Python", "Django", "FastAPI", "UX/UI", "Vercel"],
    demo: "https://calcu-len-d.vercel.app/",
  },
  {
    slug: "tick-tack-toe",
    title: "Tick Tack Toe",
    year: "2026",
    description: "Tres en Raya desarrollado con Python y Django, con una interfaz arcade en escala de grises. Desplegado en Render.",
    tags: ["CSS", "JavaScript", "Python", "Django", "FastAPI", "UX/UI", "Render"],
    demo: "https://tick-tack-toe-kwpo.onrender.com",
  },
  {
    slug: "minesweeper",
    title: "Minesweeper",
    year: "2026",
    description: "Buscaminas web construido con Python y Django, interfaz retro en escala de grises y lógica completa del juego. Desplegado en Render.",
    tags: ["CSS", "JavaScript", "Python", "Django", "FastAPI", "UX/UI", "Render"],
    demo: "https://minesweeper-slet.onrender.com",
  },
  {
    slug: "la-buena-mesa",
    title: "La Buena Mesa",
    year: "2026",
    description: "Aplicación web gastronómica desarrollada con React y Typescript, con arquitectura profesional y templates reutilizables. Desplegado en Vercel.",
    tags: ["HTML", "CSS", "TypeScript", "React", "UX/UI", "Vercel"],
    demo: "https://labuenamesa.vercel.app/",
  },
  {
    slug: "gran-milla",
    title: "Gran Milla",
    year: "2026",
    description: "Single Page Application de agencia de viajes minimalista desarrollada con React y Typescript con formulario integrado. Desplegado con Vercel.",
    tags: ["HTML", "CSS", "TypeScript", "React", "UX/UI", "Vercel"],
    demo: "https://granmilla.vercel.app",
  },
  {
    slug: "coming-soon",
    title: "PRÓXIMAMENTE",
    year: "❔",
    description: "☑️ Nuevos proyectos en proceso."
  }
];
