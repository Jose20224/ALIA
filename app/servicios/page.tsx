import type { Metadata } from "next";
import Link from "next/link";
import RevealAnimations from "@/components/reveal-animations";

export const metadata: Metadata = {
  title: "Servicios de asistencia virtual",
  description:
    "Descubre los servicios de atención al cliente y apoyo comercial de ALIA para hacer crecer tu negocio.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de asistencia virtual | ALIA",
    description:
      "Atención al cliente y soporte comercial con procesos y supervisión.",
    url: "/servicios",
  },
};

const services = [
  {
    icon: "support_agent",
    title: "Atención al cliente",
    description:
      "Representamos tu marca con una atención profesional, cercana y orientada a resolver las necesidades de tus clientes.",
    items: [
      "Atención por chat",
      "Gestión de WhatsApp",
      "Atención por correo electrónico",
      "Seguimiento de solicitudes",
      "Registro de incidencias",
      "Encuestas y seguimiento",
    ],
  },
  {
    icon: "monitoring",
    title: "Ventas y generación de leads",
    description:
      "Apoyo comercial para identificar oportunidades, dar seguimiento a prospectos y mantener activo tu proceso de ventas.",
    items: [
      "Búsqueda de prospectos",
      "Calificación de leads",
      "Seguimiento comercial",
      "Actualización de bases de datos",
      "Agendamiento de reuniones",
      "Seguimiento de oportunidades",
    ],
  },
];

const benefits = [
  {
    icon: "schedule",
    title: "Ahorro de tiempo",
    description:
      "Delega tareas operativas y recupera tiempo para las actividades estratégicas.",
  },
  {
    icon: "groups",
    title: "Talento supervisado",
    description:
      "Tu operación cuenta con asistentes seleccionados, capacitados y supervisados.",
  },
  {
    icon: "tune",
    title: "Flexibilidad",
    description:
      "Adaptamos el servicio a las necesidades y volumen de trabajo de cada cliente.",
  },
  {
    icon: "trending_up",
    title: "Mayor productividad",
    description:
      "Organizamos las tareas para que los procesos sean más ordenados y eficientes.",
  },
];

const plans = [
  {
    name: "Básico",
    label: "Para comenzar",
    description:
      "Ideal para tareas puntuales y apoyo organizativo.",
    price: "US$250",
    hours: "20 horas mensuales",
    hourlyRate: "US$12.50 por hora",
    features: [
      "1 asistente dedicado",
      "Supervisión y reporte mensual",
      "Flexibilidad entre las dos líneas de servicio",
    ],
  },
  {
    name: "Pro",
    label: "Más solicitado",
    description:
      "Para empresas con mayor demanda administrativa y comercial.",
    price: "US$600",
    hours: "80 horas mensuales",
    hourlyRate: "US$7.50 por hora",
    features: [
      "Asistente con supervisión presencial",
      "Respaldo operativo ante ausencias",
      "Canal prioritario por WhatsApp corporativo o Slack",
      "Distribución flexible de horas y tareas",
    ],
    featured: true,
  },
  {
    name: "Full",
    label: "Cobertura completa",
    description:
      "Jornada completa como extensión del equipo del cliente.",
    price: "US$1,200",
    hours: "160 horas mensuales",
    hourlyRate: "US$7.50 por hora",
    features: [
      "Supervisor de calidad dedicado",
      "Reemplazo ante contingencias",
      "Reunión quincenal de indicadores (KPIs)",
      "Integración con ERP y CRM corporativo",
    ],
  },
];

const faqs = [
  {
    question: "¿Qué tipo de tareas puedo delegar?",
    answer:
      "Puedes delegar la atención de tus canales, el seguimiento de solicitudes, la búsqueda de prospectos, la calificación de leads y otras actividades comerciales previamente definidas con ALIA.",
  },
  {
    question: "¿Los asistentes trabajan desde mi empresa?",
    answer:
      "No. El servicio para nuestros clientes es virtual. Los asistentes de ALIA trabajan presencialmente desde nuestras oficinas bajo supervisión.",
  },
  {
    question: "¿Puedo contratar solamente algunas horas?",
    answer:
      "Sí. La cobertura se determina según el volumen y las necesidades de cada operación. Durante el diagnóstico podemos identificar la opción más adecuada.",
  },
  {
    question: "¿Puedo combinar diferentes servicios?",
    answer:
      "Sí. Podemos combinar atención al cliente y apoyo comercial para crear una solución que responda a las necesidades específicas de tu operación.",
  },
  {
    question: "¿Cómo se supervisa el trabajo?",
    answer:
      "Cada operación cuenta con seguimiento y supervisión para revisar tareas, calidad, cumplimiento y oportunidades de mejora.",
  },
  {
    question: "¿Cómo comienzo?",
    answer:
      "El primer paso es realizar un diagnóstico de tus necesidades. A partir de ahí identificamos las tareas, volumen, cobertura y perfil requerido.",
  },
];

export default function ServiciosPage() {
  return (
    <>
    <RevealAnimations />
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-container-low/70 via-surface to-surface-container-lowest px-4 pb-12 pt-12 md:px-12 md:pb-20 md:pt-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary-fixed/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-secondary-container/10 blur-3xl" />

        <div className="reveal relative mx-auto max-w-4xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-surface-container-low px-3.5 py-1.5 text-caption-caps font-caption-caps uppercase text-secondary shadow-sm">
            <span className="material-symbols-outlined text-[16px]">
              design_services
            </span>
            Servicios y planes
          </span>

          <h1 className="mb-4 text-display-md-mobile font-display-md tracking-tight text-primary md:text-display-lg">
            Soluciones para que puedas{" "}
            <span className="text-secondary">delegar con confianza.</span>
          </h1>

          <p className="mx-auto max-w-3xl text-body-md leading-relaxed text-on-surface-variant md:text-title-lg">
            Combinamos talento humano, procesos, supervisión y tecnología para
            ayudarte a mantener una operación organizada, eficiente y
            enfocada.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contacto#diagnostico"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-container px-6 py-3.5 text-label-md text-on-primary shadow-ambient-1 transition-all hover:bg-secondary hover:shadow-ambient-2 active:scale-95"
            >
              <span>Agendar diagnóstico gratis</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>

            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest px-6 py-3.5 text-label-md text-primary transition-all hover:border-secondary hover:text-secondary active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">
                expand_more
              </span>
              Conocer servicios
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="border-y border-outline-variant/20 bg-surface py-14 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="reveal mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <span className="mb-2 inline-block text-caption-caps font-caption-caps uppercase text-secondary">
              Nuestras líneas
            </span>

            <h2 className="mb-3 text-headline-md font-headline-md tracking-tight text-primary md:text-display-md">
              Dos líneas para fortalecer tu operación
            </h2>

            <p className="text-body-md leading-relaxed text-on-surface-variant md:text-body-lg">
              Elige la línea que necesitas o combina ambas para crear una
              solución integral.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="reveal card-hover flex h-full flex-col rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-ambient-1 md:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-high text-secondary">
                  <span className="material-symbols-outlined text-[25px]">
                    {service.icon}
                  </span>
                </div>

                <h3 className="mb-2 text-title-lg font-title-lg text-primary">
                  {service.title}
                </h3>

                <p className="mb-5 text-body-sm leading-relaxed text-on-surface-variant">
                  {service.description}
                </p>

                <div className="mb-6 border-t border-outline-variant/20 pt-5">
                  <span className="mb-3 block text-caption-caps font-caption-caps uppercase text-secondary">
                    Incluye
                  </span>

                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-body-sm text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined mt-0.5 shrink-0 text-[17px] text-secondary">
                          check_circle
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-2">
                  <Link
                    href="/contacto#diagnostico"
                    className="inline-flex items-center gap-1.5 text-label-md font-semibold text-secondary transition-colors hover:text-primary"
                  >
                    Solicitar información
                    <span className="material-symbols-outlined text-[17px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-surface-container-low/50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="reveal mb-9 md:mb-12">
            <span className="mb-2 inline-block text-caption-caps font-caption-caps uppercase text-secondary">
              ¿Por qué ALIA?
            </span>

            <h2 className="text-headline-md font-headline-md tracking-tight text-primary md:text-display-md">
              Más que delegar tareas
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="reveal card-hover rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 md:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-surface-container-high text-secondary">
                  <span className="material-symbols-outlined text-[22px]">
                    {benefit.icon}
                  </span>
                </div>

                <h3 className="mb-1.5 text-title-md text-primary">
                  {benefit.title}
                </h3>

                <p className="text-body-sm leading-relaxed text-on-surface-variant">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section
        id="planes"
        className="border-y border-outline-variant/20 bg-surface-container-lowest py-14 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="reveal mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <span className="mb-2 inline-block text-caption-caps font-caption-caps uppercase text-secondary">
              Planes de servicio
            </span>

            <h2 className="mb-3 text-headline-md font-headline-md tracking-tight text-primary md:text-display-md">
              Una cobertura que se adapta a ti
            </h2>

            <p className="text-body-md leading-relaxed text-on-surface-variant md:text-body-lg">
              Elige la cobertura que mejor se adapta a tu operación. Cada plan
              combina horas de servicio, acompañamiento y flexibilidad para
              ayudarte a delegar con confianza.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`reveal relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 shadow-ambient-1 md:p-7 ${
                  plan.featured
                    ? "border-secondary bg-primary-container text-on-primary"
                    : "border-outline-variant/40 bg-surface"
                }`}
              >
                {plan.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-secondary-container px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-primary">
                    Recomendado
                  </div>
                )}

                <div
                  className={`mb-2 text-caption-caps font-caption-caps uppercase ${
                    plan.featured
                      ? "text-secondary-container"
                      : "text-secondary"
                  }`}
                >
                  {plan.label}
                </div>

                <h3
                  className={`mb-2 text-headline-sm ${
                    plan.featured ? "text-surface-bright" : "text-primary"
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`mb-5 min-h-[60px] text-body-sm leading-relaxed ${
                    plan.featured
                      ? "text-primary-fixed-dim"
                      : "text-on-surface-variant"
                  }`}
                >
                  {plan.description}
                </p>

                <div
                  className={`mb-6 rounded-xl p-4 ${
                    plan.featured
                      ? "bg-primary/35"
                      : "bg-surface-container-low"
                  }`}
                >
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <div
                        className={`text-display-md-mobile font-display-md leading-none ${
                          plan.featured
                            ? "text-surface-bright"
                            : "text-primary"
                        }`}
                      >
                        {plan.price}
                      </div>
                      <span
                        className={`mt-1 block text-label-sm ${
                          plan.featured
                            ? "text-primary-fixed-dim"
                            : "text-on-surface-variant"
                        }`}
                      >
                        por mes
                      </span>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-label-sm font-semibold ${
                        plan.featured
                          ? "bg-secondary-container text-primary"
                          : "bg-surface-container-high text-secondary"
                      }`}
                    >
                      {plan.hourlyRate}
                    </span>
                  </div>
                  <div
                    className={`mt-4 flex items-center gap-2 border-t pt-3 text-body-sm ${
                      plan.featured
                        ? "border-surface-bright/10 text-primary-fixed-dim"
                        : "border-outline-variant/20 text-on-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      schedule
                    </span>
                    {plan.hours}
                  </div>
                </div>

                <div
                  className={`mb-6 border-t pt-5 ${
                    plan.featured
                      ? "border-surface-bright/10"
                      : "border-outline-variant/20"
                  }`}
                >
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-2 text-body-sm ${
                          plan.featured
                            ? "text-primary-fixed-dim"
                            : "text-on-surface-variant"
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined mt-0.5 shrink-0 text-[17px] ${
                            plan.featured
                              ? "text-secondary-container"
                              : "text-secondary"
                          }`}
                        >
                          check_circle
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                    href="/contacto#diagnostico"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-label-md transition-all active:scale-95 ${
                      plan.featured
                        ? "bg-secondary text-on-secondary hover:bg-secondary-container"
                        : "border border-outline-variant/60 bg-surface-container-lowest text-primary hover:border-secondary hover:text-secondary"
                    }`}
                  >
                    Consultar plan
                    <span className="material-symbols-outlined text-[17px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="reveal mt-6 text-center text-label-sm text-on-surface-variant">
            ¿Necesitas algo diferente?{" "}
            <Link
              href="/contacto#diagnostico"
              className="font-semibold text-secondary hover:text-primary"
            >
              Podemos crear una propuesta personalizada.
            </Link>
          </p>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
          <div className="reveal rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 md:rounded-3xl md:p-10">
            <div className="mb-8 text-center">
              <span className="mb-2 inline-block text-caption-caps font-caption-caps uppercase text-secondary">
                Antes de comenzar
              </span>

              <h2 className="text-headline-md tracking-tight text-primary md:text-display-md">
                Primero entendemos tu operación
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
              {[
                {
                  number: "01",
                  title: "Diagnóstico",
                  description:
                    "Conocemos tu operación, necesidades y prioridades.",
                },
                {
                  number: "02",
                  title: "Propuesta",
                  description:
                    "Definimos alcance, tareas, cobertura y forma de trabajo.",
                },
                {
                  number: "03",
                  title: "Implementación",
                  description:
                    "Seleccionamos, capacitamos y ponemos en marcha el servicio.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="reveal rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5 text-center md:p-6"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-label-sm font-bold text-on-primary">
                    {item.number}
                  </div>

                  <h3 className="mb-1.5 text-title-md text-primary">
                    {item.title}
                  </h3>

                  <p className="text-body-sm text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-t border-outline-variant/20 bg-surface-container-low/50 py-14 md:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-12">
          <div className="reveal mb-10 text-center md:mb-12">
            <span className="mb-2 inline-block text-caption-caps font-caption-caps uppercase text-secondary">
              Preguntas frecuentes
            </span>

            <h2 className="text-headline-md tracking-tight text-primary md:text-display-md">
              Lo que necesitas saber
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="reveal group rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-title-md font-semibold text-primary [&::-webkit-details-marker]:hidden md:px-6 md:py-5">
                  <span>{faq.question}</span>

                  <span className="material-symbols-outlined shrink-0 text-secondary transition-transform duration-200 group-open:rotate-180">
                    expand_more
                  </span>
                </summary>

                <div className="border-t border-outline-variant/20 px-5 pb-5 pt-4 md:px-6">
                  <p className="text-body-sm leading-relaxed text-on-surface-variant md:text-body-md">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary-container py-14 text-on-primary md:py-20">
        <div className="reveal mx-auto max-w-3xl px-4 text-center">
          <span className="mb-3 inline-block text-caption-caps uppercase tracking-wider text-secondary-container">
            Siguiente paso
          </span>

          <h2 className="mb-3 text-headline-md tracking-tight text-surface-bright md:text-headline-lg">
            Cuéntanos qué necesitas delegar
          </h2>

          <p className="mb-7 text-body-md leading-relaxed text-primary-fixed-dim">
            Agenda un diagnóstico gratuito y descubramos juntos cómo ALIA
            puede convertirse en tu aliado operativo.
          </p>

          <Link
            href="/contacto#diagnostico"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-7 py-3.5 text-label-md text-on-secondary shadow-ambient-1 transition-all hover:bg-secondary-container active:scale-95"
          >
            <span>Agendar diagnóstico gratis</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}