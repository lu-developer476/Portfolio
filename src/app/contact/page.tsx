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
                href="https://lucasmontenegro-lifepath.framer.website/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={play}
                className="text-blue-500 transition hover:text-blue-700"
              >
                CV
              </a>
            </li>

            <li>
              <a
                href="https://github.com/lu-developer476"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={play}
                className="text-blue-500 transition hover:text-blue-700"
              >
                Github
              </a>
            </li>

            <li>
              <a
                href="https://gitlab.com/lu-developer476"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={play}
                className="text-blue-500 transition hover:text-blue-700"
              >
                Gitlab
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/lucas-montenegro-burgos/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={play}
                className="text-blue-500 transition hover:text-blue-700"
              >
                LinkedIn
              </a>
            </li>
          </ul>

          <p className="mt-6 text-sm leading-relaxed text-white/100">
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
