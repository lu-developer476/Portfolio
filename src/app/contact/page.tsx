import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <Section
      id="contact"
      title="Contacto"
      subtitle="Mandame un mensaje. Si es para laburar, respondo más rápido que un hot-reload."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-black/35 p-5">
          <h3 className="text-lg font-semibold text-cyber-gold">Dónde encontrarme</h3>
          <ul className="mt-3 space-y-2 text-white/85">
            <li>
              <span className="text-white/60">LinkedIn:</span>{" "}
              <a className="underline decoration-cyber-neonRed/60 underline-offset-4 hover:text-cyber-gold" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                linkedin.com/in/tu-perfil
              </a>
            </li>
            <li>
              <span className="text-white/60">GitHub:</span>{" "}
              <a className="underline decoration-cyber-neonGreen/60 underline-offset-4 hover:text-cyber-gold" href="https://github.com/" target="_blank" rel="noreferrer">
                github.com/tu-usuario
              </a>
            </li>
            <li className="text-white/60">
              Tip: editá estos links en <code className="rounded bg-white/10 px-1">src/config/profile.ts</code>.
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/35 p-5">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
