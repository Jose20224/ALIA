'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const groups = new Map<Element | null, HTMLElement[]>();
    items.forEach((item) => {
      const parent = item.parentElement;
      const group = groups.get(parent) ?? [];
      group.push(item);
      groups.set(parent, group);
    });

    groups.forEach((group) => {
      group.forEach((item, index) => {
        item.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 70}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* HERO */}
      <section
        className="relative pt-10 pb-12 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-surface-container-low/60 via-surface to-surface-container-lowest"
        id="inicio"
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-[-50px] w-80 h-80 bg-surface-container-high/50 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col items-start reveal">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-low border border-secondary/20 shadow-sm mb-5 md:mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-caption-caps font-caption-caps text-secondary uppercase">
                  Asistencia ejecutiva presencial &amp; supervisada
                </span>
              </div>

              <h1 className="text-display-md-mobile md:text-display-lg font-display-md md:font-display-lg text-primary tracking-tight mb-3">
                Tú enfócate en hacer crecer tu negocio.
              </h1>
              <h2 className="text-headline-sm md:text-headline-lg font-headline-sm md:font-headline-lg text-secondary mb-5 leading-snug">
                Nosotros nos encargamos de las gestiones que consumen tu tiempo.
              </h2>
              <p className="text-body-md md:text-title-lg text-on-surface-variant font-medium mb-4 max-w-2xl leading-relaxed">
                Atención al cliente y apoyo comercial respaldados por talento humano, procesos y supervisión.
              </p>
              <p className="text-body-sm md:text-body-md text-on-surface-variant mb-7 md:mb-8 max-w-2xl leading-relaxed">
                En ALIA ayudamos a empresas, profesionales y emprendimientos de Latinoamérica a delegar tareas operativas para que puedan concentrarse en lo que realmente impulsa su negocio.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 w-full sm:w-auto mb-7 md:mb-8">
                <Link
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md hover:bg-secondary transition-all duration-200 shadow-ambient-1 hover:shadow-ambient-2 active:scale-95"
                  href="/contacto#diagnostico"
                >
                  <span>Quiero conocer ALIA</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 text-primary-container font-label-md hover:border-secondary hover:text-secondary hover:bg-surface-container-low transition-all duration-200 shadow-sm active:scale-95"
                  href="/servicios"
                >
                  <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
                  <span>Ver nuestros servicios</span>
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low/70 border border-outline-variant/30 max-w-2xl">
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  <strong className="text-primary font-semibold">No se trata simplemente de asignarte una persona.</strong>{' '}
                  Contamos con talento humano, procesos, capacitación, supervisión y tecnología para ejecutar cada tarea de forma organizada y confiable.
                </p>
              </div>
            </div>

            {/* Tarjeta de coordinación operativa */}
            <div className="lg:col-span-5 relative reveal reveal-right">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-ambient-3 p-5 md:p-6 relative z-10">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-outline-variant/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-container via-secondary to-secondary-container flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          hub
                        </span>
                      </div>
                      <div>
                        <h3 className="text-title-md font-title-md text-primary leading-tight">Coordinación operativa</h3>
                        <span className="text-caption-caps font-caption-caps text-secondary flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> OPERACIÓN BAJO SUPERVISIÓN
                        </span>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-surface-container text-secondary text-caption-caps font-caption-caps">
                      OFICINA ALIA
                    </span>
                  </div>

                  <div className="mb-4 p-2.5 rounded-lg bg-surface-container-high/40 border border-outline-variant/20 flex items-center justify-between gap-1 text-[10px] sm:text-[11px] font-semibold text-primary">
                    <span className="px-2 py-0.5 rounded bg-surface-container-lowest shadow-sm">Cliente</span>
                    <span className="text-outline">→</span>
                    <span className="px-2 py-0.5 rounded bg-secondary text-on-secondary shadow-sm">Supervisor</span>
                    <span className="text-outline">→</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-lowest shadow-sm">Asistente</span>
                    <span className="text-outline">→</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-lowest shadow-sm">Cliente</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low/70 border border-outline-variant/20">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[18px]">task_alt</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-label-md font-label-md text-primary truncate">Gestión de agendas y citas</p>
                          <span className="text-caption-caps text-secondary whitespace-nowrap">Completada</span>
                        </div>
                        <p className="text-body-sm text-on-surface-variant">Reuniones coordinadas y confirmadas con clientes.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[18px]">forum</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-label-md font-label-md text-primary truncate">Atención WhatsApp &amp; chat</p>
                          <span className="text-caption-caps px-2 py-0.5 rounded bg-surface-container text-secondary whitespace-nowrap">En curso</span>
                        </div>
                        <p className="text-body-sm text-on-surface-variant">Canal activo con protocolo y escalamiento inmediato.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low/70 border border-outline-variant/20">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[18px]">fact_check</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-label-md font-label-md text-primary truncate">Control de calidad</p>
                          <span className="text-caption-caps text-on-surface-variant whitespace-nowrap">Supervisión</span>
                        </div>
                        <p className="text-body-sm text-on-surface-variant">Revisión de reportes antes de la entrega al cliente.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-outline-variant/20 grid grid-cols-2 gap-3 text-center">
                    <div className="p-2.5 rounded-lg bg-surface-container-low">
                      <span className="block text-headline-sm font-headline-sm text-primary font-bold">100%</span>
                      <span className="text-caption-caps font-caption-caps text-on-surface-variant">Supervisión operativa</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-container-low">
                      <span className="block text-headline-sm font-headline-sm text-secondary font-bold">2 líneas</span>
                      <span className="text-caption-caps font-caption-caps text-on-surface-variant">En un mismo plan</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-primary text-on-primary px-4 py-2.5 rounded-xl shadow-ambient-2 z-20 flex items-center gap-2.5 border border-primary-fixed-dim/20 reveal card-hover">
                  <span className="material-symbols-outlined text-[20px] text-secondary-container">bolt</span>
                  <span className="text-label-sm font-label-sm tracking-wide">Somos tu aliado en cada gestión</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-14 md:py-24 bg-surface-container-lowest border-b border-outline-variant/20" id="pilares">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14 reveal">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low text-secondary text-caption-caps font-caption-caps mb-3">
              <span className="material-symbols-outlined text-[16px]">grid_view</span> RESPALDO A TU PRODUCTIVIDAD
            </span>
            <h2 className="text-headline-md md:text-display-md font-headline-md md:font-display-md text-primary tracking-tight mb-3">Tu aliado en cada gestión</h2>
            <p className="text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">Un modelo de apoyo diseñado para fortalecer la relación con tus clientes y hacer avanzar tus oportunidades.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {[
              ['support_agent', 'Atención', 'WhatsApp, chat y correo con protocolo de marca.'],
              ['forum', 'Experiencia', 'Respuestas cercanas, oportunas y orientadas a resolver.'],
              ['trending_up', 'Prospección', 'Búsqueda y calificación de oportunidades comerciales.'],
              ['handshake', 'Continuidad', 'Seguimiento de leads para mantener activa cada oportunidad.'],
            ].map(([icon, title, text]) => (
              <div key={title} className="bg-white rounded-2xl border border-outline-variant/30 p-5 text-center reveal card-hover">
                <div className="w-11 h-11 mx-auto rounded-full bg-surface-container-low flex items-center justify-center text-secondary mb-3">
                  <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </div>
                <h3 className="text-label-md font-label-md text-primary tracking-wide uppercase mb-1.5">{title}</h3>
                <p className="text-body-sm text-on-surface-variant">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS PREVIEW */}
      <section className="py-14 md:py-24 bg-surface-container-low/50 border-b border-outline-variant/20" id="servicios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14 reveal">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-secondary text-caption-caps font-caption-caps mb-3">
                <span className="material-symbols-outlined text-[16px]">folder_managed</span> CATÁLOGO DE ESPECIALIDADES
              </span>
              <h2 className="text-headline-md md:text-display-md font-headline-md md:font-display-md text-primary tracking-tight mb-3">Dos líneas para hacer avanzar tu negocio</h2>
              <p className="text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">Diseñadas para adaptarse al ritmo de directivos, fundadores y equipos.</p>
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest border border-outline-variant/40 text-secondary text-label-sm font-label-sm shadow-sm shrink-0">
              <span className="material-symbols-outlined text-[18px]">swap_horiz</span> Flexibilidad total entre las 2 líneas
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
            <article className="bg-primary-container text-on-primary rounded-2xl p-6 shadow-ambient-2 reveal card-hover flex flex-col relative overflow-hidden">
              <span className="absolute top-4 right-4 text-[10px] font-bold tracking-wide bg-white/15 px-2.5 py-1 rounded-full">DESTACADA</span>
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-secondary-container mb-4"><span className="material-symbols-outlined text-[22px]">headset_mic</span></div>
              <h3 className="text-headline-sm font-headline-sm mb-2">Atención al cliente multicanal</h3>
              <p className="text-body-sm text-primary-fixed-dim mb-4 flex-1">Respuestas con tono de marca y seguimiento en todos los canales.</p>
              <Link className="inline-flex items-center gap-1.5 text-secondary-container font-label-md hover:text-white transition-colors" href="/servicios">Ver protocolos <span className="material-symbols-outlined text-[16px]">arrow_forward</span></Link>
            </article>

            <article className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-6 shadow-ambient-1 reveal card-hover flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary"><span className="material-symbols-outlined text-[22px]">trending_up</span></div>
                <span className="px-2.5 py-1 rounded-full bg-surface-container text-secondary text-caption-caps font-caption-caps">Apoyo comercial</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-primary mb-2">Ventas y generación de leads</h3>
              <p className="text-body-sm text-on-surface-variant mb-4 flex-1">Prospección, calificación, seguimiento y actualización de CRM.</p>
              <Link className="inline-flex items-center gap-1.5 text-secondary font-label-md hover:text-primary transition-colors" href="/servicios">Ver catálogo <span className="material-symbols-outlined text-[16px]">arrow_forward</span></Link>
            </article>
          </div>
        </div>
      </section>

      {/* FÓRMULA */}
      <section className="py-14 md:py-20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="rounded-2xl md:rounded-3xl bg-primary text-on-primary p-6 md:p-10 reveal">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-caption-caps font-caption-caps text-secondary-container uppercase">Metodología comprobada</span>
                <h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg mt-2 mb-2">Calidad + procesos + supervisión + tecnología</h2>
                <p className="text-body-sm md:text-body-md text-primary-fixed-dim leading-relaxed">Talento calificado, manuales operativos, coordinadores en oficina y herramientas de IA gobernadas con revisión humana responsable.</p>
              </div>
              <Link className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-secondary text-on-secondary font-label-md hover:bg-secondary-container hover:text-primary transition-all duration-200 shadow-ambient-2 active:scale-95 shrink-0" href="/nosotros">
                <span>Conocer nuestro modelo</span><span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA DIAGNÓSTICO */}
      <section className="py-14 md:py-24 bg-surface-container-low/60 border-t border-outline-variant/20" id="diagnostico">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center reveal">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-secondary text-caption-caps font-caption-caps mb-4">
            <span className="material-symbols-outlined text-[16px]">event_available</span> SESIÓN ESTRATÉGICA SIN COSTO
          </span>
          <h2 className="text-headline-md md:text-display-md font-headline-md md:font-display-md text-primary tracking-tight mb-3">Solicita tu diagnóstico inicial de operaciones</h2>
          <p className="text-body-md md:text-body-lg text-on-surface-variant leading-relaxed mb-8 max-w-2xl mx-auto">Analizamos tu carga de trabajo, identificamos tareas delegables y diseñamos un esquema de soporte a la medida de tu empresa.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md hover:bg-secondary transition-all duration-200 shadow-ambient-1 hover:shadow-ambient-2 active:scale-95" href="/contacto#diagnostico">
              <span>Agendar diagnóstico gratis</span><span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 text-primary-container font-label-md hover:border-secondary hover:text-secondary transition-all duration-200 shadow-sm active:scale-95" href="/servicios#planes">
              <span className="material-symbols-outlined text-[18px]">payments</span><span>Ver planes y tarifas</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
