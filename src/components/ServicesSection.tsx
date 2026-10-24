"use client";

import { useLanguage } from "@/lib/i18n";

type ServicePackage = {
  icon: string;
  name: string;
  price: string;
  description: string;
  includes: string[];
  note?: string;
};

const serviceCopy = {
  es: {
    eyebrow: "SERVICIOS",
    title: "Servicios web a tu medida",
    subtitle: "Paquetes de referencia para que puedas estimar una inversión inicial. El alcance final se define en una propuesta según tus objetivos, funcionalidades, materiales y plazos.",
    marketNote: "Referencias de mercado freelance en Argentina · relevadas en octubre de 2026. Valores expresados en USD para evitar equivalencias en pesos que queden desactualizadas.",
    quoteCta: "Consultar este servicio",
    packages: [
      {
        icon: "🧭",
        name: "Landing Page",
        price: "USD 150–300",
        description: "Una página para presentar un negocio, servicio o campaña y convertir visitas en consultas.",
        includes: [
          "Una página adaptable a móvil, tablet y escritorio",
          "Hasta 6–8 secciones según complejidad",
          "Formulario o acceso a WhatsApp",
          "SEO técnico básico y metadatos",
          "Publicación y hasta 2 rondas de ajustes"
        ],
        note: "El cliente aporta textos, imágenes y marca; la redacción profesional y la identidad visual completa se cotizan aparte."
      },
      {
        icon: "🏢",
        name: "Sitio Web Profesional",
        price: "USD 350–700",
        description: "Una presencia digital ordenada para profesionales, comercios, consultoras y pequeñas empresas.",
        includes: [
          "Sitio institucional de aproximadamente 5–10 páginas, según alcance",
          "Navegación responsive y formulario de contacto",
          "Enlaces a redes y canales de consulta",
          "SEO técnico básico y analítica básica si corresponde",
          "Despliegue y hasta 2 rondas de ajustes"
        ],
        note: "Autogestión de contenidos, blog avanzado, multidioma e integraciones complejas pueden aumentar el presupuesto."
      },
      {
        icon: "🛍️",
        name: "Catálogo o Tienda Online",
        price: "USD 800–1.500",
        description: "Para mostrar productos y habilitar compras mediante una plataforma o una solución acordada para el negocio.",
        includes: [
          "Catálogo de hasta unos 50 productos como referencia",
          "Categorías y páginas de producto",
          "Carrito y configuración de pagos/envíos según plataforma",
          "Diseño responsive y pruebas del flujo de compra",
          "Publicación y capacitación básica de uso"
        ],
        note: "Comisiones de pago, suscripciones, carga masiva de productos y sistemas de stock o facturación externos no están incluidos por defecto."
      },
      {
        icon: "⚙️",
        name: "Aplicación Web a Medida",
        price: "Desde USD 1.000",
        description: "Una solución personalizada cuando una web convencional no alcanza para resolver el proceso.",
        includes: [
          "Relevamiento de requisitos y propuesta técnica",
          "Interfaces y flujos adaptados al caso de uso",
          "Posible integración de API, base de datos o autenticación",
          "Pruebas, despliegue y documentación acordada"
        ],
        note: "Es un punto de partida orientativo, no un precio cerrado. Se presupuesta después de definir alcance, riesgos e integraciones."
      },
      {
        icon: "🛠️",
        name: "Rediseño y Optimización",
        price: "USD 200–500",
        description: "Para mejorar un sitio existente sin rehacerlo necesariamente desde cero.",
        includes: [
          "Revisión inicial de problemas y prioridades",
          "Mejoras visuales y de experiencia de usuario",
          "Ajustes responsive y correcciones acordadas",
          "Revisión básica de rendimiento tras los cambios"
        ],
        note: "El importe depende del estado del código, la plataforma y la cantidad de páginas o errores."
      }
    ] satisfies ServicePackage[],
    customTitle: "¿Tenés una idea diferente?",
    customText: "También preparo propuestas personalizadas para nuevas funcionalidades, automatizaciones, integraciones con servicios externos, paneles de gestión o proyectos que combinen varias categorías.",
    customCta: "Pedir un presupuesto personalizado",
    extrasTitle: "Opcionales y costos recurrentes",
    extrasSubtitle: "Se pueden contratar junto con el desarrollo o por separado, según las necesidades del proyecto.",
    extras: [
      {
        icon: "🌐",
        name: "Dominio",
        price: "Costo del proveedor",
        description: "Te asesoro para elegirlo y puedo ayudarte con el registro y la conexión DNS. La renovación del dominio se paga al registrador."
      },
      {
        icon: "🚀",
        name: "Hosting y despliegue",
        price: "Proveedor + configuración",
        description: "Configuración de publicación y dominio. Algunas plataformas ofrecen planes gratuitos con límites; cualquier plan pago queda a cargo del cliente."
      },
      {
        icon: "🔧",
        name: "Mantenimiento básico",
        price: "USD 30–60 / mes",
        description: "Referencia para un abono limitado: revisiones básicas, pequeñas correcciones y soporte acordado. Nuevas funciones o tareas que excedan el alcance se cotizan aparte."
      },
      {
        icon: "📈",
        name: "SEO avanzado, analítica e integraciones",
        price: "A medida",
        description: "Configuración o ampliación de medición, eventos, posicionamiento e integración de herramientas según objetivos."
      },
      {
        icon: "✍️",
        name: "Contenido, correo y funciones extra",
        price: "A medida",
        description: "Carga de contenido, correo profesional, traducciones, reservas, pagos, automatizaciones y otras funciones según necesidad."
      }
    ],
    conditionsTitle: "Antes de contratar",
    conditions: [
      "Los precios son referencias orientativas de mercado, no una cotización definitiva ni una garantía de precio para todos los proyectos.",
      "Dominio, hosting, licencias, comisiones de pago y servicios de terceros se pagan por separado; siempre que sea posible, las cuentas quedan a nombre del cliente.",
      "El presupuesto final especificará alcance, entregables, revisiones, plazos, soporte posterior, moneda de pago e impuestos aplicables."
    ],
    sourcesTitle: "Referencias de precios consultadas",
    sources: [
      { label: "Tarifario.info · tarifas de desarrollo web en Argentina (septiembre de 2026)", url: "https://tarifario.info/desarrollo-web/" },
      { label: "Freelancer.ar · rangos freelance publicados para 2026", url: "https://freelancer.ar/cuanto-cobrar-por-una-pagina-web-en-argentina-precios-de-freelancers/" },
      { label: "Point Web · costos de mantenimiento web (agosto de 2026)", url: "https://pointweb.com.ar/guias/cuanto-cuesta-mantener-una-pagina-web/" }
    ]
  },
  en: {
    eyebrow: "SERVICES",
    title: "Web services tailored to your needs",
    subtitle: "Reference packages to help estimate an initial investment. Final scope is defined in a proposal based on your goals, features, supplied materials, and timeline.",
    marketNote: "Freelance market references for Argentina · reviewed in October 2026. Prices are shown in USD to avoid outdated peso conversions.",
    quoteCta: "Ask about this service",
    packages: [
      {
        icon: "🧭",
        name: "Landing Page",
        price: "USD 150–300",
        description: "A single page to present a business, service, or campaign and turn visits into inquiries.",
        includes: [
          "One page responsive across mobile, tablet, and desktop",
          "Up to 6–8 sections, depending on complexity",
          "Contact form or WhatsApp link",
          "Basic technical SEO and metadata",
          "Deployment and up to 2 revision rounds"
        ],
        note: "The client provides copy, images, and brand assets; professional copywriting and a full visual identity are quoted separately."
      },
      {
        icon: "🏢",
        name: "Professional Website",
        price: "USD 350–700",
        description: "A clear digital presence for professionals, shops, consultants, and small businesses.",
        includes: [
          "Institutional website of roughly 5–10 pages, depending on scope",
          "Responsive navigation and contact form",
          "Social and inquiry channel links",
          "Basic technical SEO and basic analytics when applicable",
          "Deployment and up to 2 revision rounds"
        ],
        note: "Content management, advanced blogging, multilingual support, and complex integrations can increase the budget."
      },
      {
        icon: "🛍️",
        name: "Catalog or Online Store",
        price: "USD 800–1,500",
        description: "A product catalog and online purchasing flow using an agreed platform or solution.",
        includes: [
          "Catalog of up to around 50 products as a reference",
          "Categories and product pages",
          "Cart and payment/shipping setup depending on platform",
          "Responsive design and purchase-flow testing",
          "Deployment and basic usage handoff"
        ],
        note: "Payment fees, subscriptions, bulk product uploads, inventory or external invoicing systems are not included by default."
      },
      {
        icon: "⚙️",
        name: "Custom Web Application",
        price: "From USD 1,000",
        description: "A tailored solution when a conventional website cannot handle the required workflow.",
        includes: [
          "Requirements review and technical proposal",
          "Interfaces and flows tailored to the use case",
          "Possible API, database, or authentication integrations",
          "Agreed testing, deployment, and documentation"
        ],
        note: "This is an indicative starting point, not a fixed price. A quote follows once scope, risks, and integrations are defined."
      },
      {
        icon: "🛠️",
        name: "Redesign and Optimization",
        price: "USD 200–500",
        description: "Improve an existing site without necessarily rebuilding everything from scratch.",
        includes: [
          "Initial review of issues and priorities",
          "Visual and user-experience improvements",
          "Agreed responsive fixes and corrections",
          "Basic performance review after changes"
        ],
        note: "The price depends on code quality, platform, and the number of pages or issues."
      }
    ] satisfies ServicePackage[],
    customTitle: "Have a different idea?",
    customText: "I also prepare tailored proposals for new features, automation, third-party integrations, management dashboards, or projects combining several service categories.",
    customCta: "Request a custom quote",
    extrasTitle: "Optional services and recurring costs",
    extrasSubtitle: "These can be added to a development project or contracted separately, depending on project needs.",
    extras: [
      {
        icon: "🌐",
        name: "Domain",
        price: "Provider cost",
        description: "I can help you choose a domain and configure registration and DNS. Renewal is paid directly to the registrar."
      },
      {
        icon: "🚀",
        name: "Hosting and deployment",
        price: "Provider + setup",
        description: "Deployment and domain configuration. Some platforms have limited free plans; any paid plan is the client's expense."
      },
      {
        icon: "🔧",
        name: "Basic maintenance",
        price: "USD 30–60 / month",
        description: "Reference price for a limited retainer: basic checks, small fixes, and agreed support. New features or work outside scope are quoted separately."
      },
      {
        icon: "📈",
        name: "Advanced SEO, analytics, and integrations",
        price: "Custom quote",
        description: "Measurement setup, event tracking, search visibility, and tool integrations based on project goals."
      },
      {
        icon: "✍️",
        name: "Content, email, and extra features",
        price: "Custom quote",
        description: "Content upload, professional email, translation, bookings, payments, automation, and other features as needed."
      }
    ],
    conditionsTitle: "Before you book",
    conditions: [
      "Prices are indicative market references, not a final quote or a guarantee for every project.",
      "Domain, hosting, licenses, payment fees, and third-party services are charged separately; whenever possible, accounts remain in the client's name.",
      "The final proposal will specify scope, deliverables, revisions, timeline, post-launch support, payment currency, and applicable taxes."
    ],
    sourcesTitle: "Pricing references",
    sources: [
      { label: "Tarifario.info · web development rates in Argentina (September 2026)", url: "https://tarifario.info/desarrollo-web/" },
      { label: "Freelancer.ar · freelance pricing ranges published for 2026", url: "https://freelancer.ar/cuanto-cobrar-por-una-pagina-web-en-argentina-precios-de-freelancers/" },
      { label: "Point Web · website maintenance costs (August 2026)", url: "https://pointweb.com.ar/guias/cuanto-cuesta-mantener-una-pagina-web/" }
    ]
  }
} as const;

export default function ServicesSection() {
  const { language } = useLanguage();
  const copy = serviceCopy[language];

  return (
    <section id="servicios" className="mt-14 space-y-8 scroll-mt-28">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyber-neonGreen">{copy.eyebrow}</p>
        <h2 className="text-2xl font-bold text-cyber-gold sm:text-3xl">{copy.title}</h2>
        <p className="w-full leading-relaxed text-white/75">{copy.subtitle}</p>
        <p className="w-full rounded-xl border border-cyber-gold/25 bg-black/25 px-4 py-3 text-sm leading-relaxed text-white/65">{copy.marketNote}</p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {copy.packages.map((service, index) => (
          <article key={service.name} className={`flex h-full flex-col rounded-2xl sm:col-span-1 lg:col-span-2 ${index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : ""} rounded-2xl border border-white/15 bg-black/40 p-5 transition duration-300 hover:border-cyber-gold/55 hover:shadow-[0_0_22px_rgba(250,204,21,0.09)]">
            <div className="mb-3 flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyber-gold/30 bg-white/5 text-xl" aria-hidden="true">{service.icon}</span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-cyber-gold">{service.name}</h3>
                <p className="mt-1 text-xl font-bold text-white">{service.price}</p>
                <p className="text-xs text-white/50">{language === "es" ? "por proyecto, salvo que se indique lo contrario" : "per project unless stated otherwise"}</p>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-white/75">{service.description}</p>
            <ul className="mb-4 flex-1 space-y-2 text-sm leading-relaxed text-white/75">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-px text-cyber-neonGreen" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {service.note && <p className="mb-4 border-t border-white/10 pt-3 text-xs leading-relaxed text-white/55">{service.note}</p>}
            <a href="#contact-form" className="mx-auto mt-auto inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-cyber-gold/50 px-4 py-2 text-center text-sm font-semibold text-cyber-gold transition hover:border-cyber-neonGreen hover:text-cyber-neonGreen">
              {copy.quoteCta} <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-cyber-neonGreen/35 bg-black/35 p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-cyber-gold">{copy.customTitle}</h3>
        <p className="mt-2 w-full leading-relaxed text-white/75">{copy.customText}</p>
        <a href="#contact-form" className="mt-4 inline-flex items-center gap-2 rounded-xl border border-cyber-neonGreen/60 px-4 py-2 text-sm font-semibold text-cyber-neonGreen transition hover:bg-cyber-neonGreen/10">
          {copy.customCta} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-cyber-gold">{copy.extrasTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/65">{copy.extrasSubtitle}</p>
        </div>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {copy.extras.map((extra, index) => (
            <article key={extra.name} className={`rounded-xl sm:col-span-1 lg:col-span-2 ${index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : ""} border border-white/10 bg-black/30 p-4">
              <div className="flex items-start gap-3">
                <span className="text-xl" aria-hidden="true">{extra.icon}</span>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-white">{extra.name}</h4>
                  <p className="mt-1 text-sm font-semibold text-cyber-neonGreen">{extra.price}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{extra.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="space-y-3 rounded-xl border border-white/10 bg-black/25 p-4">
        <h3 className="font-semibold text-cyber-gold">{copy.conditionsTitle}</h3>
        <ul className="space-y-2 text-sm leading-relaxed text-white/65">
          {copy.conditions.map((condition) => <li key={condition} className="flex items-start gap-2"><span aria-hidden="true">•</span><span>{condition}</span></li>)}
        </ul>
        <div className="border-t border-white/10 pt-3">
          <h4 className="text-sm font-semibold text-white/80">{copy.sourcesTitle}</h4>
          <ul className="mt-2 space-y-2 text-xs leading-relaxed text-white/55">
            {copy.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline decoration-white/25 underline-offset-4 transition hover:text-cyber-neonGreen">{source.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
