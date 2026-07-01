"use client";

import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";
import { useHoverSound } from "@/lib/useHoverSound";
import { useLanguage } from "@/lib/i18n";

export default function ContactPage() {
  const { play } = useHoverSound("zoom");
  const { t } = useLanguage();

  return (
    <Section
      id="contact"
      title={t.contact.title}
      subtitle={t.contact.subtitle}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/50 bg-black/35 p-5">
          <h3 className="text-lg font-semibold text-cyber-gold">
            {t.contact.invite}
          </h3>

          <ul className="mt-4 space-y-3 text-white/85">
            <li>
              <a
                href="https://www.behance.net/lucasmontenegrob"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={play}
                className="text-blue-500 hover:text-blue-700 transition"
              >
                Behance Pro
              </a>
            </li>

            <li>
              <a
                href="https://lucasmontenegro-lifepath.framer.website/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={play}
                className="text-blue-500 hover:text-blue-700 transition"
              >
                Curriculum
              </a>
            </li>

            <li>
              <a
                href="https://www.freelancer.com.ar/u/Lucasmontenegro5"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={play}
                className="text-blue-500 hover:text-blue-700 transition"
              >
                Freelancer
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/lucas-montenegro-burgos/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={play}
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
                onMouseEnter={play}
                className="text-blue-500 hover:text-blue-700 transition"
              >
                GitHub
              </a>
            </li>
          </ul>

          <p className="mt-6 text-sm text-white/100 leading-relaxed">
            {t.contact.note}
          </p>
        </div>

        <div className="rounded-xl border border-white/50 bg-black/35 p-5">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
