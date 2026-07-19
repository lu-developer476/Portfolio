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
    slug: "coming-soon",
    title: "PRÓXIMAMENTE",
    year: "❔",
    description: "☑️ Nuevos proyectos en fase de desarrollo."
  },
];
