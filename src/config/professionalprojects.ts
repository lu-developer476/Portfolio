export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  demo?: string;
  tags?: string[];
};

export const professionalProjects: Project[] = [
  {
    slug: "chint",
    title: "CHINT",
    year: "2024",
    description: "Sitio web reversionado con enfoque en el análisis entre la IA e interacción social en la actualidad. Desplegado en Netlify.",
    tags: ["HTML", "CSS", "UX/UI", "Netlify"],
    demo: "https://chint.netlify.app/",
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
    demo: "https://granmilla.vercel.app/",
  },
  {
    slug: "ascendo-crescendo",
    title: "Ascendo Crescendo",
    year: "2026",
    description: "Plataforma digital de mentoría para estudiantes, desarrolladores y profesionales del sector tecnológico. Desplegado en Wix.",
    tags: ["Mentoría", "Educación", "Tecnología", "UX/UI", "Wix"],
    demo: "https://lu-dev.wixsite.com/ascendo-crescendo",
  },
  {
    slug: "arkhe",
    title: "ARKHÉ",
    year: "2026",
    description: "Museo digital de arte y cultura que combina la experiencia interactiva y una colección diversa de obras. Desplegado en Framer.",
    tags: ["Edición Digital", "Arte Animado", "UX/UI", "Motion Design", "Framer"],
    demo: "https://arkhe-digital-musem.framer.website/",
  },
  {
    slug: "coming-soon",
    title: "PRÓXIMAMENTE",
    year: "❔",
    description: "☑️ Nuevos proyectos en fase de desarrollo."
  },
];
