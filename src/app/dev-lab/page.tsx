import DevLabExperience from "@/components/DevLabExperience";

export const metadata = {
  title: "DEV LAB | Lucas Montenegro",
  description: "Explorá experimentos interactivos de interfaz, terminal y decisiones de código en el laboratorio de Lucas Montenegro.",
  alternates: { canonical: "/dev-lab" },
};

export default function DevLabPage() {
  return (
    <div className="space-y-8">
      <section id="dev-lab" className="scroll-mt-24 min-w-0 border-t border-white/5 pt-10 first:border-none first:pt-0 sm:scroll-mt-28 sm:pt-14 md:pt-16">
        <DevLabExperience />
      </section>
    </div>
  );
}
