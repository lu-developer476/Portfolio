import ProjectsCarousel from "@/components/ProjectsCarousel";
import Section from "@/components/Section";

export default function ProjectsPage() {
  return (
    <Section id="projects" title="Proyectos" subtitle="Mostrados con Swiper.js. Scroll suave. Ego saludable.">
      <ProjectsCarousel expanded />
    </Section>
  );
}
