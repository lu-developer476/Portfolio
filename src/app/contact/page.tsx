import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <Section
      id="contact"
      title="Contacto"
      subtitle="Si estás buscando trabajar conmigo o tenés una idea en mente, no dudes en escribirme."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/50 bg-black/35 p-5">
          <h3 className="text-lg font-semibold text-cyber-gold">
            Mis redes sociales
          </h3>

          <ul className="mt-4 space-y-3 text-white/85">
            <li>
              <a
                href="https://www.linkedin.com/in/lucas-montenegro-burgos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://github.com/lu-developer476"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                GitHub
              </a>
            </li>
          </ul>

          <p className="mt-6 text-sm text-white/100 leading-relaxed">
            En constante búsqueda de nuevos desafíos y oportunidades de colaboración.
          </p>
        </div>

        <div className="rounded-xl border border-white/50 bg-black/35 p-5">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
