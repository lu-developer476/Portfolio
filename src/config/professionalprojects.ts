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
    slug: "ascendo-crescendo",
    title: "Ascendo Crescendo",
    year: "2026",
    description: "Plataforma digital de mentoría para estudiantes, desarrolladores y profesionales del sector tecnológico.",
    tags: ["Mentoría", "Educación", "Tecnología", "UX/UI", "Wix"],
    demo: "https://lu-dev.wixsite.com/ascendo-crescendo",
  },
  {
    slug: "arkhe-digital-museum",
    title: "ARKHÉ",
    year: "2026",
    description: "Museo digital de arte y cultura que combina la experiencia interactiva y una colección diversa de obras.",
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
