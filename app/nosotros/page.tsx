import type { Metadata } from "next";
import Link from "next/link";
import RevealAnimations from "@/components/reveal-animations";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce el modelo de trabajo de ALIA: talento humano, procesos, capacitación y supervisión para delegar con confianza.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros | ALIA",
    description:
      "Conoce el modelo operativo de ALIA y nuestro compromiso con la confiabilidad, la confidencialidad y la eficiencia.",
    url: "/nosotros",
  },
};

const values = [
  {
    icon: "verified",
    title: "Confiabilidad",
    description:
      "Cumplimos lo acordado para que el cliente pueda delegar con tranquilidad.",
  },
  {
    icon: "task",
    title: "Responsabilidad",
    description:
      "Asumimos cada tarea con compromiso, orden y sentido de cumplimiento.",
  },
  {
    icon: "lock",
    title: "Confidencialidad",
    description:
      "Protegemos la información y respetamos los límites de acceso establecidos.",
  },
  {
    icon: "speed",
    title: "Eficiencia",
    description:
      "Hacemos el trabajo correctamente, aprovechando tiempo y recursos.",
  },
  {
    icon: "handshake",
    title: "Cercanía",
    description:
      "Comunicación clara y una relación de colaboración con nuestros clientes.",
  },
  {
    icon: "trending_up",
    title: "Mejora continua",
    description:
      "Aprendemos de resultados y errores para mejorar procesos y servicio.",
  },
];

const pillars = [
  {
    icon: "groups",
    title: "Talento humano",
    description: "Selección rigurosa",
  },
  {
    icon: "account_tree",
    title: "Procesos",
    description: "Estandarizados",
  },
  {
    icon: "school",
    title: "Capacitación",
    description: "Alineada al cliente",
  },
  {
    icon: "supervised_user_circle",
    title: "Supervisión",
    description: "Control activo",
  },
  {
    icon: "memory",
    title: "Tecnología",
    description: "Soporte y eficiencia",
  },
];

const steps = [
  {
    number: "01",
    title: "Conocemos tus necesidades",
    description:
      "Comprendemos qué necesita delegar tu empresa y tus prioridades.",
  },
  {
    number: "02",
    title: "Identificamos actividades",
    description:
      "Definimos en detalle las tareas y procesos que deseas delegar.",
  },
  {
    number: "03",
    title: "Estimamos el volumen",
    description:
      "Analizamos las horas requeridas y la prioridad de cada actividad.",
  },
  {
    number: "04",
    title: "Recomendamos el plan",
    description:
      "Determinamos el nivel de cobertura que mejor se adapta a ti.",
  },
  {
    number: "05",
    title: "Seleccionamos al asistente",
    description:
      "Elegimos el perfil profesional que mejor se adapta al servicio.",
  },
  {
    number: "06",
    title: "Capacitamos",
    description:
      "Preparamos al asistente según tareas y procedimientos particulares.",
  },
  {
    number: "07",
    title: "Organizamos la operación",
    description:
      "Definimos horarios, herramientas y canales seguros de comunicación.",
  },
  {
    number: "08",
    title: "Ejecutamos y supervisamos",
    description:
      "El asistente trabaja y el supervisor da seguimiento y revisa calidad.",
  },
  {
    number: "09",
    title: "Medimos y mejoramos",
    description:
      "Evaluamos resultados y optimizamos la ejecución del servicio.",
  },
];

export default function NosotrosPage() {
  return  (  
     <> <RevealAnimations />    
    <main>
      {/* INTRO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-container-low/60 via-surface to-surface-container-lowest px-4 pb-10 pt-12 md:px-12 md:pb-16 md:pt-20">
        <div className="pointer-events-none absolute right-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-secondary-fixed/40 blur-3xl" />

        <div className="reveal mx-auto max-w-4xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-surface-container-low px-3.5 py-1.5 text-caption-caps font-caption-caps uppercase text-secondary shadow-sm">
            <span className="material-symbols-outlined text-[16px]">
              workspaces
            </span>
            Estructura y confianza
          </span>

          <h1 className="mb-4 text-display-md-mobile font-display-md tracking-tight text-primary md:text-display-lg">
            Un aliado operativo, no solamente un asistente.
          </h1>

          <p className="text-body-md leading-relaxed text-on-surface-variant md:text-title-lg">
            No somos un directorio de freelancers ni una plataforma
            automatizada impersonal. Implementamos un riguroso proceso de
            selección, capacitación técnica constante y supervisión presencial
            diaria para garantizar ejecución impecable.
          </p>
        </div>
      </section>

      {/* PROPUESTA DIFERENCIAL */}
      <section className="border-b border-outline-variant/20 bg-surface py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="mb-10 grid grid-cols-1 gap-5 md:mb-12 md:grid-cols-3 md:gap-8">
            {[
              {
                number: "01",
                title: "Diagnóstico y alineación",
                description:
                  "Conocemos las necesidades de cada cliente, identificamos las actividades que desea delegar y determinamos la mejor forma de atenderlas.",
              },
              {
                number: "02",
                title: "Capacitación y supervisión",
                description:
                  "Seleccionamos y capacitamos al asistente adecuado, establecemos los procedimientos necesarios y mantenemos supervisión continua.",
              },
              {
                number: "03",
                title: "Nuestro compromiso",
                description:
                  "Queremos que delegues con tranquilidad, sabiendo que detrás de cada tarea hay un sistema de trabajo, supervisión y control.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="reveal card-hover rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-ambient-1 md:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-high text-headline-sm font-bold text-secondary">
                  {item.number}
                </div>

                <h3 className="mb-2.5 text-title-lg font-title-lg text-primary">
                  {item.title}
                </h3>

                <p className="text-body-sm leading-relaxed text-on-surface-variant md:text-body-md">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* DIAGRAMA */}
          <div className="reveal rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 text-center md:p-8">
            <span className="mb-4 block text-caption-caps font-caption-caps uppercase text-secondary">
              Diagrama del flujo operativo ALIA
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2 py-2 text-label-sm font-semibold text-primary sm:gap-3 md:gap-6 md:text-label-md">
              {[
                ["person", "Cliente"],
                ["corporate_fare", "ALIA"],
                ["supervised_user_circle", "Supervisor"],
                ["support_agent", "Asistente"],
                ["task_alt", "Cliente"],
              ].map(([icon, label], index) => (
                <div key={`${label}-${index}`} className="contents">
                  <div
                    className={`flex items-center gap-2 rounded-xl border px-3.5 py-2.5 shadow-sm ${
                      label === "ALIA"
                        ? "border-transparent bg-primary text-on-primary"
                        : "border-outline-variant/30 bg-surface-container-lowest"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        label === "ALIA"
                          ? "text-secondary-container"
                          : "text-secondary"
                      }`}
                    >
                      {icon}
                    </span>

                    <span>{label}</span>
                  </div>

                  {index < 4 && (
                    <span className="font-bold text-secondary">→</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mx-auto mt-6 inline-flex max-w-2xl items-start gap-3 rounded-xl border border-secondary/30 bg-secondary-fixed/50 px-5 py-3 text-left sm:items-center">
              <span className="material-symbols-outlined shrink-0 text-secondary">
                apartment
              </span>

              <p className="text-body-sm font-medium text-on-secondary-fixed">
                <strong>Modalidad operativa garantizada:</strong> el servicio
                hacia el cliente es virtual. Los asistentes de ALIA trabajan
                presencialmente desde la oficina de ALIA bajo supervisión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section
        id="identidad"
        className="border-b border-outline-variant/20 bg-surface-container-low/40 py-14 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="reveal mb-10 max-w-2xl md:mb-12">
            <span className="mb-2 inline-block text-caption-caps font-caption-caps uppercase text-secondary">
              Identidad institucional
            </span>

            <h2 className="text-headline-md font-headline-md tracking-tight text-primary md:text-display-md">
              El propósito detrás de{" "}
              <span className="text-secondary">cada gestión.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-2">
            {/* MISIÓN */}
            <article className="reveal relative overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest shadow-ambient-1">
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-secondary to-secondary-container" />

              <div className="p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-secondary/20 bg-surface-container-low text-secondary">
                    <span className="material-symbols-outlined text-[24px]">
                      task_alt
                    </span>
                  </div>

                  <span className="rounded-full border border-secondary/20 bg-surface-container-low px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary">
                    Misión
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-secondary">
                  Propósito central
                </span>

                <h3 className="mb-4 mt-1 text-xl font-bold tracking-tight text-primary md:text-2xl">
                  Nuestra Misión
                </h3>

                <p className="border-l-2 border-secondary-container pl-3.5 text-sm leading-relaxed text-on-surface-variant md:text-[15px]">
                  Ayudar a empresas, profesionales y emprendimientos de
                  Latinoamérica a optimizar su tiempo y operación mediante
                  servicios de asistencia virtual confiables, eficientes y
                  flexibles en atención al cliente y apoyo comercial,
                  respaldados por talento humano, procesos,
                  supervisión y tecnología.
                </p>

                <div className="mt-5 border-t border-outline-variant/20 pt-4">
                  <span className="mb-2.5 block text-[9px] font-bold uppercase tracking-[0.14em] text-on-surface-variant">
                    Áreas de servicio
                  </span>

                  <div className="flex flex-wrap gap-1.5">
                    {["Atención al cliente", "Apoyo comercial"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full bg-secondary/10 px-2.5 py-1 text-[10px] font-semibold text-secondary"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </article>

            {/* VISIÓN */}
            <article className="reveal relative overflow-hidden rounded-2xl border border-secondary-container/20 bg-primary-container text-on-primary">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

              <div className="relative z-10 p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-secondary-container/25 bg-secondary-container/10 text-secondary-container">
                    <span className="material-symbols-outlined text-[24px]">
                      rocket_launch
                    </span>
                  </div>

                  <span className="rounded-full border border-secondary-container/25 bg-secondary-container/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-container">
                    Visión
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-secondary-container">
                  Hacia dónde vamos
                </span>

                <h3 className="mb-4 mt-1 text-xl font-bold tracking-tight text-surface-bright md:text-2xl">
                  Nuestra Visión
                </h3>

                <p className="border-l-2 border-secondary-container/40 pl-3.5 text-sm leading-relaxed text-primary-fixed-dim md:text-[15px]">
                  Convertir a ALIA en una agencia de asistencia virtual
                  reconocida en Latinoamérica por la calidad de su servicio,
                  confiabilidad, supervisión y capacidad para ser un verdadero
                  aliado operativo, construyendo una organización escalable con
                  procesos, tecnología, inteligencia artificial y talento
                  humano.
                </p>

                <div className="mt-5 border-t border-surface-bright/10 pt-4">
                  <span className="mb-2.5 block text-[9px] font-bold uppercase tracking-[0.14em] text-secondary-fixed">
                    Pilares de crecimiento
                  </span>

                  <div className="flex flex-wrap gap-1.5">
                    {[
                      ["hub", "Procesos"],
                      ["devices", "Tecnología"],
                      ["psychology", "IA"],
                      ["groups", "Talento"],
                    ].map(([icon, label]) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1 rounded-full bg-surface-bright/10 px-2.5 py-1 text-[10px] font-semibold text-secondary-fixed"
                      >
                        <span className="material-symbols-outlined text-[13px]">
                          {icon}
                        </span>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section
        id="valores"
        className="border-b border-outline-variant/20 bg-surface-container-lowest py-14 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="reveal mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <span className="mb-2 inline-block text-caption-caps font-caption-caps uppercase text-secondary">
              Cultura y principios
            </span>

            <h2 className="mb-3 text-headline-md font-headline-md tracking-tight text-primary md:text-display-md">
              Lo que guía nuestro trabajo
            </h2>

            <p className="text-body-md text-on-surface-variant md:text-body-lg">
              Principios que aseguran rigor operativo, confidencialidad y una
              relación de confianza sostenible.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="reveal card-hover rounded-2xl border border-outline-variant/30 bg-surface-container-low/60 p-5 transition-all hover:border-secondary md:p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-surface-container-high text-secondary md:h-12 md:w-12">
                  <span className="material-symbols-outlined text-xl md:text-2xl">
                    {value.icon}
                  </span>
                </div>

                <h3 className="mb-1.5 text-title-md text-primary md:text-title-lg">
                  {value.title}
                </h3>

                <p className="text-body-sm text-on-surface-variant md:text-body-md">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* PILARES */}
          <div className="mt-10 md:mt-14">
            <div className="reveal mx-auto mb-8 max-w-2xl text-center">
              <span className="mb-2 inline-block text-caption-caps font-caption-caps uppercase text-secondary">
                Valor agregado
              </span>

              <h3 className="mb-2 text-headline-sm font-headline-sm tracking-tight text-primary md:text-headline-md">
                ¿Qué diferencia a ALIA?
              </h3>

              <p className="text-body-sm text-on-surface-variant md:text-body-md">
                No solo asignamos un asistente: construimos un sistema de apoyo
                para que delegues con confianza.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`reveal card-hover rounded-xl border border-outline-variant/30 bg-surface-container-low/60 p-4 text-center md:p-5 ${
                    index === 4 ? "col-span-2 md:col-span-1" : ""
                  }`}
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-high text-secondary">
                    <span className="material-symbols-outlined text-[22px]">
                      {pillar.icon}
                    </span>
                  </div>

                  <h4 className="text-title-md font-bold text-primary">
                    {pillar.title}
                  </h4>

                  <p className="mt-1 text-caption-caps text-on-surface-variant">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-label-sm text-secondary">
              Nuestra fórmula: calidad + procesos + supervisión + tecnología.
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section
        id="como-funciona"
        className="border-b border-outline-variant/20 bg-surface-container-low/50 py-14 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="reveal mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <span className="mb-2 inline-block text-caption-caps font-caption-caps uppercase text-secondary">
              Metodología paso a paso
            </span>

            <h2 className="mb-3 text-headline-md font-headline-md tracking-tight text-primary md:text-display-md">
              Así trabajamos contigo
            </h2>

            <p className="text-body-md text-on-surface-variant md:text-body-lg">
              Un proceso claro en 9 pasos, diseñado para garantizar
              alineación, calidad y continuidad sin improvisaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="reveal card-hover flex gap-4 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-label-sm text-on-primary">
                  {step.number}
                </div>

                <div>
                  <h3 className="mb-1 text-title-md text-primary">
                    {step.title}
                  </h3>

                  <p className="text-body-sm text-on-surface-variant">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-4">
            <span className="material-symbols-outlined shrink-0 text-secondary">
              info
            </span>

            <p className="text-body-sm text-on-surface-variant">
              <strong className="text-primary">
                Aclaración explícita:
              </strong>{" "}
              el servicio para el cliente es virtual; el equipo operativo de
              ALIA trabaja presencialmente desde la oficina.
            </p>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍA */}
      <section className="bg-surface-container-lowest py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
          <div className="reveal rounded-2xl bg-primary-container p-6 text-on-primary shadow-ambient-1 md:rounded-3xl md:p-10">
            <div className="mb-6 max-w-3xl md:mb-8">
              <span className="text-caption-caps text-secondary-container">
                Innovación responsable
              </span>

              <h2 className="mt-1 mb-2 text-headline-md tracking-tight text-surface-bright md:mb-3 md:text-display-md">
                Tecnología al servicio de la operación
              </h2>

              <p className="text-body-sm leading-relaxed text-on-primary-container md:text-body-lg">
                Aprovechamos herramientas modernas de productividad e
                inteligencia artificial como aceleradores, siempre auditados
                por criterio profesional.
              </p>
            </div>

            <div className="mb-5 rounded-xl border border-surface-bright/10 bg-surface-bright/5 p-4 text-center md:mb-6 md:p-5">
              <span className="text-caption-caps text-secondary-fixed">
                Nuestro ecosistema
              </span>

              <p className="mt-1 text-sm font-semibold tracking-wide text-surface-bright md:text-headline-sm">
                Personas + Procesos + Tecnología + IA + Supervisión
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
              <div className="rounded-xl border border-surface-bright/10 bg-surface-bright/5 p-4 md:p-5">
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl text-secondary-container">
                    speed
                  </span>

                  <p className="text-title-md font-semibold text-surface-bright">
                    Mayor agilidad
                  </p>
                </div>

                <p className="text-body-sm leading-relaxed text-on-primary-container">
                  Redacción y análisis de datos en menor tiempo.
                </p>
              </div>

              <div className="rounded-xl border border-surface-bright/10 bg-surface-bright/5 p-4 md:p-5">
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl text-secondary-container">
                    spellcheck
                  </span>

                  <p className="text-title-md font-semibold text-surface-bright">
                    Cero errores
                  </p>
                </div>

                <p className="text-body-sm leading-relaxed text-on-primary-container">
                  Revisión ortográfica y de tono con doble filtro humano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-outline-variant/20 bg-surface py-14 md:py-20">
        <div className="reveal mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-3 text-headline-md tracking-tight text-primary md:text-headline-lg">
            ¿Listo para tener un aliado operativo de verdad?
          </h2>

          <p className="mb-7 text-body-md text-on-surface-variant">
            Conoce nuestro catálogo de servicios y planes, o agenda tu
            diagnóstico gratuito.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contacto#diagnostico"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container px-7 py-3.5 text-label-md text-on-primary shadow-ambient-1 transition-all duration-200 hover:bg-secondary hover:shadow-ambient-2 active:scale-95 sm:w-auto"
            >
              <span>Agendar diagnóstico gratis</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>

            <Link
              href="/servicios"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest px-7 py-3.5 text-label-md text-primary-container shadow-sm transition-all duration-200 hover:border-secondary hover:text-secondary active:scale-95 sm:w-auto"
            >
              <span className="material-symbols-outlined text-[18px]">
                format_list_bulleted
              </span>

              <span>Ver servicios y planes</span>
            </Link>
          </div>
        </div>
      </section>
      
    </main>
     </>
  );
}