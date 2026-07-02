"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type Language = "es" | "en";

const translations = {
  es: {
    languageName: "Español",
    nav: { about: "Perfil", contact: "Contacto", toggle: "Cambiar idioma a inglés" },
    footer: "Todos los derechos reservados • Built with React.js, Next.js, TypeScript & Tailwind CSS • UX/UI Interface • Database powered by Firebase • Deployed on Vercel ®",
    hero: {
      titleGold: "Interfaces que escalan",
      titleWhite: "sin romper la experiencia",
      description: "Desarrollo productos digitales con foco en rendimiento, claridad estructural y criterio UX. Código mantenible. Feedback inmediato. Backend real listo para producción.",
      stats: {
        performance: "Core Web Vitals optimizados y render eficiente",
        ux: "Interacciones claras con validaciones en tiempo real",
        backend: "Firestore + API Routes listos para escalar"
      },
      fallbackTagline: "Interfaces precisas. Arquitectura limpia. Experiencia sin fricción.",
      systemStatus: "> SISTEMA: EN LÍNEA • ESTADO: DESPLEGADO • SEÑAL: ESTABLE",
      systemVoice: "Sistema en línea. Estado desplegado. Señal estable."
    },
    home: {
      methodTitle: "Metodología",
      methodSubtitle: "Mi enfoque combina frontend sólido con sensibilidad UX/UI. Desarrollo interfaces claras, escalables y orientadas a experiencia real, no solo a implementación técnica",
      cards: [
        ["Frontend", "Interfaces modernas con Next.js y React priorizando claridad visual, estructura escalable y experiencia consistente. Trabajo con TypeScript para garantizar mantenibilidad y previsibilidad en cada componente"],
        ["UX / UI & Motion", "Diseño enfocado en usabilidad, jerarquía visual y feedback inmediato. Utilizo animaciones y microinteracciones estratégicas para guiar al usuario sin distraerlo ni sobrecargar la interfaz"],
        ["Arquitectura", "Integro backend ligeras con Firebase y API Routes en Netlify / Vercel, optimizando tiempos de desarrollo y manteniendo una base sólida para escalar funcionalidades según necesidad del proyecto"],
        ["Mentalidad de Producto", "Soluciones orientadas a resultados. Exploro herramientas y lenguajes no convencionales cuando aportan valor real al flujo de trabajo, priorizando eficiencia y claridad sobre modas pasajeras. Cada decisión técnica responde a claridad, rendimiento y experiencia del usuario final"]
      ]
    },
    about: {
      title: "¿Quién soy?",
      subtitle: "Soy una persona curiosa y exigente conmigo mismo que, tras incursionar en éste mundo, encontró un espacio para canalizar las ideas y convertirlas en algo real, teniendo el desafío diario de resolver y mejorarse constantemente.",
      paragraphs: [
        "Me gusta crear interfaces que se sientan vivas. Que respondan bien, que comuniquen claro y que no necesiten explicación. Trabajo con React y Next.js porque me permiten construir cosas sólidas sin sacrificar detalle.",
        "Más allá de mi especialización en frontend, me adapto a las necesidades de cada proyecto y a los objetivos del cliente. Me interesa entender el contexto, proponer mejoras cuando hace falta y aportar soluciones que realmente sumen valor. Trabajo de forma proactiva, buscando que cada decisión técnica esté alineada con el resultado que se quiere lograr.",
        "Disfruto el proceso completo: desde la idea hasta el deploy. La satisfacción está en transformar una idea en algo concreto que realmente funciona."
      ],
      skillsTitle: "Aptitudes y Conocimientos",
      skillsSubtitle: "Herramientas, tecnologías y habilidades que he adquirido y aplicado en proyectos reales.",
      frontend: "Animaciones, Componentes, Interactive, Responsive, Carousels",
      hardSkills: ["AI Automation", "Agentic Experience", "Customer Experience", "UI/UX", "Flujo de procesos", "Bases de datos", "Herramientas digitales", "Maquetación Web", "Prototipado", "Storytelling", "UI Editing", "UX Writing", "User Research"],
      softSkills: ["Adaptación", "Análisis de datos", "Colaboración", "Comunicación", "Creatividad", "Mediación", "Proactividad", "Sinergia"],
      projectsTitle: "Trabajos realizados",
      projectsSubtitle: "El resultado de entender, crear, adaptar y perfeccionar… listo para ser explorado."
    },
    contact: {
      title: "Contacto",
      subtitle: "Si estás buscando trabajar conmigo o tenés una idea en mente, no dudes en escribirme.",
      invite: "Te invito a conocer:",
      note: "Transformando los desafíos en nuevas oportunidades de aprendizaje y experiencias valiosas.",
      form: {
        personal: "Datos personales",
        namePlaceholder: "Nombre y apellido",
        reason: "¿Motivo de tu consulta?",
        messagePlaceholder: "Contame en qué te puedo ayudar...",
        sending: "Un momento por favor...",
        submit: "Enviar",
        privacy: "Tu información será tratada de forma confidencial para responder tu mensaje.",
        successTitle: "Éxito",
        successText: "Mensaje recibido. Revisa tu casilla principal y/o Spam.",
        errorTitle: "Fallo al enviar",
        unknownError: "Error desconocido",
        retry: "Probá de nuevo en un minuto."
      }
    },
    projects: {
      live: "● LIVE",
      descriptions: {
        chint: "Sitio web reversionado con enfoque en el análisis entre la IA e interacción social en la actualidad. Desplegado en Netlify.",
        "irbis-supplies": "Tienda online ficticia refactorizada de JavaScript vanilla con arquitectura modular. Desplegado en Netlify.",
        "art-syntex": "Tienda online ficticia reconstruida con base de datos integrada. Desplegado en Firebase.",
        dinosauria: "Enciclopedia de los dinosaurios ficticios más populares de la cultura moderna. Desplegado en Vercel.",
        "calcu-len": "Calculadora integral de usos múltiples. Desplegado en Vercel.",
        "calcu-lenD": "Convertidor no oficial de monedas. Desplegado en Vercel.",
        "tick-tack-toe": "Videojuego web desarrollado con Python y Django. Desplegado en Render.",
        minesweeper: "Videojuego web desarrollado con Python y Django. Desplegado en Render.",
        "la-buena-mesa": "Landing page gastronómica realizada con React y Typescript. Desplegado en Vercel.",
        "gran-milla": "SPA turística realizada con React y Typescript. Desplegado con Vercel.",
        "2048": "Videojuego web desarrollado con Python y Django. Desplegado en Render.",
        boaworm: "Videojuego web desarrollado con Python y Django. Desplegado en Render.",
        ajedrez: "Videojuego web desarrollado con Python y Django con base de datos integrada. Desplegado en Render.",
        hangman: "Videojuego web desarrollado con Python y Django con base de datos integrada. Desplegado en Render.",
        "frogger-rally": "Videojuego web desarrollado con Python y Django con base de datos integrada. Desplegado en Render.",
        "do-fu-ioh": "Videojuego web desarrollado con Python y Django con base de datos integrada. Desplegado en Render.",
        "2042": "Videojuego web desarrollado con Python y Django. Desplegado en Render.",
        "coming-soon": "☑️ Nuevos proyectos en fase de desarrollo."
      },
      titles: { ajedrez: "Ajedrez", hangman: "El Ahorcado", "coming-soon": "PRÓXIMAMENTE" }
    }
  },
  en: {
    languageName: "English",
    nav: { about: "Profile", contact: "Contact", toggle: "Switch language to Spanish" },
    footer: "All rights reserved • Built with React.js, Next.js, TypeScript & Tailwind CSS • UX/UI Interface • Database powered by Firebase • Deployed on Vercel ®",
    hero: {
      titleGold: "Interfaces that scale",
      titleWhite: "without breaking the experience",
      description: "I build digital products focused on performance, structural clarity, and UX judgment. Maintainable code. Immediate feedback. Production-ready real backend.",
      stats: {
        performance: "Optimized Core Web Vitals and efficient rendering",
        ux: "Clear interactions with real-time validations",
        backend: "Firestore + API Routes ready to scale"
      },
      fallbackTagline: "Precise interfaces. Clean architecture. Frictionless experience.",
      systemStatus: "> SYSTEM: ONLINE • STATUS: DEPLOYED • SIGNAL: STABLE",
      systemVoice: "System online. Status deployed. Signal stable."
    },
    home: {
      methodTitle: "Methodology",
      methodSubtitle: "My approach combines solid frontend development with UX/UI sensitivity. I build clear, scalable interfaces focused on real experience, not only technical implementation.",
      cards: [
        ["Frontend", "Modern interfaces with Next.js and React, prioritizing visual clarity, scalable structure, and a consistent experience. I use TypeScript to ensure maintainability and predictability in every component."],
        ["UX / UI & Motion", "Design focused on usability, visual hierarchy, and immediate feedback. I use strategic animations and microinteractions to guide users without distracting or overloading the interface."],
        ["Architecture", "I integrate lightweight backends with Firebase and API Routes on Netlify / Vercel, optimizing development time while keeping a solid foundation to scale features as each project needs."],
        ["Product Mindset", "Result-oriented solutions. I explore unconventional tools and languages when they add real value to the workflow, prioritizing efficiency and clarity over passing trends. Every technical decision responds to clarity, performance, and end-user experience."]
      ]
    },
    about: {
      title: "Who am I?",
      subtitle: "I am a curious person who demands a lot from myself. After entering this world, I found a space to channel ideas and turn them into something real, with the daily challenge of solving problems and constantly improving.",
      paragraphs: [
        "I like creating interfaces that feel alive: responsive, clear, and self-explanatory. I work with React and Next.js because they let me build solid products without sacrificing detail.",
        "Beyond my frontend specialization, I adapt to each project's needs and each client's goals. I care about understanding the context, proposing improvements when needed, and providing solutions that truly add value. I work proactively, making sure every technical decision is aligned with the desired result.",
        "I enjoy the full process: from the idea to deployment. The satisfaction is in transforming an idea into something concrete that actually works."
      ],
      skillsTitle: "Skills and Knowledge",
      skillsSubtitle: "Tools, technologies, and abilities I have acquired and applied in real projects.",
      frontend: "Animations, Components, Interactive, Responsive, Carousels",
      hardSkills: ["AI Automation", "Agentic Experience", "Customer Experience", "UI/UX", "Process flows", "Databases", "Digital tools", "Web layout", "Prototyping", "Storytelling", "UI Editing", "UX Writing", "User Research"],
      softSkills: ["Adaptability", "Data analysis", "Collaboration", "Communication", "Creativity", "Mediation", "Proactivity", "Synergy"],
      projectsTitle: "Completed work",
      projectsSubtitle: "The result of understanding, creating, adapting, and refining… ready to be explored."
    },
    contact: {
      title: "Contact",
      subtitle: "If you are looking to work with me or have an idea in mind, feel free to write to me.",
      invite: "I invite you to explore:",
      note: "Transforming challenges into new learning opportunities and valuable experiences.",
      form: {
        personal: "Personal information",
        namePlaceholder: "Full name",
        reason: "Reason for your inquiry?",
        messagePlaceholder: "Tell me how I can help you...",
        sending: "One moment please...",
        submit: "Send",
        privacy: "Your information will be treated confidentially to respond to your message.",
        successTitle: "Success",
        successText: "Message received. Check your main inbox and/or Spam folder.",
        errorTitle: "Failed to send",
        unknownError: "Unknown error",
        retry: "Try again in one minute."
      }
    },
    projects: {
      live: "● LIVE",
      descriptions: {
        chint: "Redesigned website focused on analyzing AI and current social interaction. Deployed on Netlify.",
        "irbis-supplies": "Fictional online store refactored from vanilla JavaScript with modular architecture. Deployed on Netlify.",
        "art-syntex": "Fictional online store rebuilt with an integrated database. Deployed on Firebase.",
        dinosauria: "Encyclopedia of the most popular fictional dinosaurs in modern culture. Deployed on Vercel.",
        "calcu-len": "Comprehensive multi-purpose calculator. Deployed on Vercel.",
        "calcu-lenD": "Unofficial currency converter. Deployed on Vercel.",
        "tick-tack-toe": "Web video game developed with Python and Django. Deployed on Render.",
        minesweeper: "Web video game developed with Python and Django. Deployed on Render.",
        "la-buena-mesa": "Gastronomic landing page built with React and TypeScript. Deployed on Vercel.",
        "gran-milla": "Tourism SPA built with React and TypeScript. Deployed on Vercel.",
        "2048": "Web video game developed with Python and Django. Deployed on Render.",
        boaworm: "Web video game developed with Python and Django. Deployed on Render.",
        ajedrez: "Web video game developed with Python and Django with an integrated database. Deployed on Render.",
        hangman: "Web video game developed with Python and Django with an integrated database. Deployed on Render.",
        "frogger-rally": "Web video game developed with Python and Django with an integrated database. Deployed on Render.",
        "do-fu-ioh": "Web video game developed with Python and Django with an integrated database. Deployed on Render.",
        "2042": "Web video game developed with Python and Django. Deployed on Render.",
        "coming-soon": "☑️ New projects in development phase."
      },
      titles: { ajedrez: "Chess", hangman: "Hangman", "coming-soon": "COMING SOON" }
    }
  }
} as const;

type Translation = (typeof translations)[Language];

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      toggleLanguage: () => setLanguage((current) => (current === "es" ? "en" : "es")),
      t: translations[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
