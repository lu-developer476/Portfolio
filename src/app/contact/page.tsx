import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <Section
      id="contact"
      title="Contacto"
      subtitle="Si querés trabajar juntos o tenés una idea en mente, escribime."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-black/35 p-5">
          <h3 className="text-lg font-semibold text-cyber-gold">
            También podés encontrarme en
          </h3>

          <ul className="mt-4 space-y-3 text-white/85">
            <li>
              <a
                href="https://www.linkedin.com/in/lucas-montenegro-burgos/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyber-gold transition"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://github.com/lu-developer476"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyber-gold transition"
              >
                GitHub
              </a>
            </li>
          </ul>

          <p className="mt-6 text-sm text-white/60 leading-relaxed">
            Siempre abierto a nuevos desafíos, colaboraciones o proyectos que busquen crecer y escalar con intención.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/35 p-5">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
