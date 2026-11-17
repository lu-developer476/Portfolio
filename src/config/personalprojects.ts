import type { Project } from "@/types/project";

const upcomingProjectTags = ["PRÓXIMAMENTE"];

export const personalProjects: Project[] = [
  {
    slug: "irbis-supplies",
    title: "Irbis Supplies",
    year: "2024",
    description: "Tienda online ficticia refactorizada de JavaScript vanilla con arquitectura modular. Desplegado en Netlify.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "CoffeeScript", "UX/UI", "Netlify"],
    demo: "https://irbis-supplies.netlify.app/",
  },
  {
    slug: "art-syntex",
    title: "Art-Syntex",
    year: "2024",
    description: "Tienda online ficticia reconstruida con base de datos integrada. Desplegado en Firebase.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Firebase", "UX/UI", "Vercel"],
    demo: "https://art-syntex.web.app/",
  },
  {
    slug: "dinosauria",
    title: "Dinosauria",
    year: "2026",
    description: "Enciclopedia de los dinosaurios ficticios más populares de la cultura moderna. Desplegado en Vercel.",
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
    tags: ["HTML", "CSS", "JavaScript", "Python", "Django", "FastAPI", "UX/UI", "Vercel"],
    demo: "https://calcu-len-d.vercel.app/",
  },
  {
    slug: "coming-soon",
    title: "En proceso…",
    year: "❔",
    description: "☑️ Nuevos proyectos en fase de desarrollo.",
    previewImage: "/developer-preview.svg",
    previewAlt: "Chico codeando de perfil en una computadora de escritorio",
    tags: upcomingProjectTags
  },

];
