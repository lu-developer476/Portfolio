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
    description: "Sitio web reversionado con enfoque en el análisis entre la IA e interacción social en la actualidad. Desplegado en Netlify.",
    tags: ["HTML", "CSS", "UX/UI", "Netlify"],
    demo: "https://chint.netlify.app/",
  },
  {
    slug: "irbis-supplies",
    title: "Irbis Supplies",
    year: "2024",
    description: "Tienda online ficticia refactorizada desde JavaScript vanilla, incorporando arquitectura modular. Desplegado en Netlify.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "CoffeeScript", "UX/UI", "Netlify"],
    demo: "https://irbis-supplies.netlify.app/",
  },
  {
    slug: "art-syntex",
    title: "Art-Syntex",
    year: "2024",
    description: "Tienda online ficticia con base de datos integrada. Desplegado en Firebase.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Firebase", "UX/UI", "Vercel"],
    demo: "https://art-synt.vercel.app/",
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
    description: "Videojuego web desarrollado con Python y Django. Desplegado en Render.",
    tags: ["CSS", "JavaScript", "Python", "Django", "FastAPI", "UX/UI", "Render"],
    demo: "https://tick-tack-toe-kwpo.onrender.com",
  },
  {
    slug: "minesweeper",
    title: "Minesweeper",
    year: "2026",
    description: "Videojuego web construido con Python y Django. Desplegado en Render.",
    tags: ["CSS", "JavaScript", "Python", "Django", "FastAPI", "UX/UI", "Render"],
    demo: "https://minesweeper-slet.onrender.com",
  },
  {
    slug: "la-buena-mesa",
    title: "La Buena Mesa",
    year: "2026",
    description: "Landing page gastronómica realizada con React y Typescript. Desplegado en Vercel.",
    tags: ["HTML", "CSS", "TypeScript", "React", "UX/UI", "Vercel"],
    demo: "https://labuenamesa.vercel.app/",
  },
  {
    slug: "gran-milla",
    title: "Gran Milla",
    year: "2026",
    description: "SPA turística realizada con React y Typescript. Desplegado con Vercel.",
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
