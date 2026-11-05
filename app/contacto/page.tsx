"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import RevealAnimations from "@/components/reveal-animations";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(result?.error ?? "No pudimos enviar tu solicitud.");
      }

      setSubmitted(true);
      form.reset();
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "No pudimos enviar tu solicitud. Intenta nuevamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

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
              contact_page
            </span>
            Hablemos
          </span>

          <h1 className="mb-4 text-display-md-mobile font-display-md tracking-tight text-primary md:text-display-lg">
            Cuéntanos qué necesitas{" "}
            <span className="text-secondary">delegar.</span>
          </h1>

          <p className="mx-auto max-w-3xl text-body-md leading-relaxed text-on-surface-variant md:text-title-lg">
            Agenda un diagnóstico gratuito y conversemos sobre cómo ALIA puede
            convertirse en tu aliado operativo.
          </p>
        </div>
      </section>

      {/* CONTACTO PRINCIPAL */}
      <section
        id="diagnostico"
        className="border-y border-outline-variant/20 bg-surface py-14 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* INFORMACIÓN */}
          <div className="reveal">
            <span className="mb-2 inline-block text-caption-caps font-caption-caps uppercase text-secondary">
              Diagnóstico gratuito
            </span>

            <h2 className="mb-4 text-headline-md font-headline-md tracking-tight text-primary md:text-display-md">
              Hablemos de tu operación
            </h2>

            <p className="mb-7 text-body-md leading-relaxed text-on-surface-variant">
              Antes de recomendarte un servicio queremos entender cómo
              funciona actualmente tu operación, qué tareas deseas delegar y
              qué resultados esperas conseguir.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 rounded-xl border border-outline-variant/30 bg-surface-container-low p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-container-high text-secondary">
                  <span className="material-symbols-outlined">
                    search
                  </span>
                </div>

                <div>
                  <h3 className="text-title-md text-primary">
                    Analizamos tus necesidades
                  </h3>

                  <p className="mt-1 text-body-sm text-on-surface-variant">
                    Identificamos las tareas y procesos que pueden ser
                    delegados.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-outline-variant/30 bg-surface-container-low p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-container-high text-secondary">
                  <span className="material-symbols-outlined">
                    tune
                  </span>
                </div>

                <div>
                  <h3 className="text-title-md text-primary">
                    Diseñamos una solución
                  </h3>

                  <p className="mt-1 text-body-sm text-on-surface-variant">
                    Definimos la cobertura y combinación de servicios más
                    conveniente.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-outline-variant/30 bg-surface-container-low p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-container-high text-secondary">
                  <span className="material-symbols-outlined">
                    handshake
                  </span>
                </div>

                <div>
                  <h3 className="text-title-md text-primary">
                    Te acompañamos
                  </h3>

                  <p className="mt-1 text-body-sm text-on-surface-variant">
                    Te guiamos durante la implementación y puesta en marcha.
                  </p>
                </div>
              </div>
            </div>

            {/* DATOS */}
            <div className="mt-8 border-t border-outline-variant/30 pt-7">
              <span className="mb-4 block text-caption-caps font-caption-caps uppercase text-secondary">
                También puedes contactarnos
              </span>

              <div className="space-y-3">
                <a
                  href="mailto:saborglobalofficial@gmail.com"
                  className="flex items-center gap-3 text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    mail
                  </span>

                  <span>saborglobalofficial@gmail.com</span>
                </a>

                <a
                  href="https://wa.me/50586854730"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    phone
                  </span>

                  <span>+505 8685 4730 · WhatsApp</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/francisco-campos-4803961a1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    business_center
                  </span>
                  <span>Perfil de LinkedIn</span>
                </a>

                <div className="flex items-center gap-3 text-body-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    location_on
                  </span>

                  <span>Nicaragua · Atención para Latinoamérica</span>
                </div>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="reveal">
            <div className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 shadow-ambient-1 md:p-8">
              {!submitted ? (
                <>
                  <div className="mb-7">
                    <h2 className="text-headline-sm text-primary md:text-headline-md">
                      Solicita tu diagnóstico
                    </h2>

                    <p className="mt-2 text-body-sm leading-relaxed text-on-surface-variant">
                      Cuéntanos un poco sobre ti y nos pondremos en contacto
                      contigo.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Sitio web</label>
                      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="nombre"
                          className="mb-1.5 block text-label-md font-semibold text-primary"
                        >
                          Nombre completo
                        </label>

                        <input
                          id="nombre"
                          name="nombre"
                          type="text"
                          required
                          placeholder="Tu nombre"
                          className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-sm text-primary outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="empresa"
                          className="mb-1.5 block text-label-md font-semibold text-primary"
                        >
                          Empresa
                        </label>

                        <input
                          id="empresa"
                          name="empresa"
                          type="text"
                          placeholder="Nombre de tu empresa"
                          className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-sm text-primary outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-label-md font-semibold text-primary"
                        >
                          Correo electrónico
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="correo@empresa.com"
                          className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-sm text-primary outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="telefono"
                          className="mb-1.5 block text-label-md font-semibold text-primary"
                        >
                          Teléfono
                        </label>

                        <input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          placeholder="+505 0000 0000"
                          className="w-full rounded-lg border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-sm text-primary outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="servicio"
                        className="mb-1.5 block text-label-md font-semibold text-primary"
                      >
                        ¿Qué servicio necesitas?
                      </label>

                      <select
                        id="servicio"
                        name="servicio"
                        required
                        defaultValue=""
                        className="w-full appearance-none rounded-lg border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-sm text-primary outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        <option value="atencion">
                          Atención al cliente
                        </option>
                        <option value="ventas">
                          Ventas y generación de leads
                        </option>
                        <option value="combinado">
                          Combinación de servicios
                        </option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="mensaje"
                        className="mb-1.5 block text-label-md font-semibold text-primary"
                      >
                        Cuéntanos un poco más
                      </label>

                      <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        rows={5}
                        placeholder="¿Qué tareas deseas delegar? ¿Qué necesitas mejorar en tu operación?"
                        className="w-full resize-none rounded-lg border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-sm text-primary outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        id="privacidad"
                        name="privacidad"
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 rounded border-outline-variant text-secondary accent-secondary"
                      />

                      <label
                        htmlFor="privacidad"
                        className="text-caption-md leading-relaxed text-on-surface-variant"
                      >
                        Acepto que ALIA utilice la información proporcionada
                        para ponerse en contacto conmigo respecto a mi
                        solicitud.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container px-6 py-3.5 text-label-md text-on-primary shadow-ambient-1 transition-all hover:bg-secondary hover:shadow-ambient-2 active:scale-[0.98]"
                    >
                      <span>{isSubmitting ? "Enviando..." : "Solicitar diagnóstico"}</span>

                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </button>

                    {error && (
                      <p role="alert" className="rounded-lg bg-error-container px-4 py-3 text-body-sm text-on-error-container">
                        {error}
                      </p>
                    )}

                    <p className="text-center text-caption-md text-on-surface-variant">
                      Diagnóstico inicial sin costo y sin compromiso.
                    </p>
                  </form>
                </>
              ) : (
                <div className="flex min-h-[500px] flex-col items-center justify-center px-4 py-10 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <span className="material-symbols-outlined text-[34px]">
                      check_circle
                    </span>
                  </div>

                  <h2 className="mb-3 text-headline-sm text-primary md:text-headline-md">
                    ¡Solicitud recibida!
                  </h2>

                  <p className="max-w-md text-body-md leading-relaxed text-on-surface-variant">
                    Gracias por contactar con ALIA. Hemos recibido tu
                    información y nos pondremos en contacto contigo para
                    conversar sobre tus necesidades.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg border border-outline-variant/60 px-5 py-3 text-label-md text-primary transition-colors hover:border-secondary hover:text-secondary"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-surface-container-low/50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="reveal mx-auto mb-10 max-w-2xl text-center">
            <span className="mb-2 inline-block text-caption-caps font-caption-caps uppercase text-secondary">
              ¿Qué sucede después?
            </span>

            <h2 className="text-headline-md tracking-tight text-primary md:text-display-md">
              Un proceso sencillo
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
            {[
              {
                number: "01",
                icon: "event",
                title: "Agendamos",
                description:
                  "Coordinamos una conversación para conocer tu situación.",
              },
              {
                number: "02",
                icon: "forum",
                title: "Conversamos",
                description:
                  "Analizamos tus necesidades, tareas y prioridades.",
              },
              {
                number: "03",
                icon: "description",
                title: "Proponemos",
                description:
                  "Presentamos una solución adaptada a tu operación.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="reveal card-hover rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-high text-secondary">
                  <span className="material-symbols-outlined">
                    {item.icon}
                  </span>
                </div>

                <span className="mb-1 block text-caption-caps text-secondary">
                  Paso {item.number}
                </span>

                <h3 className="mb-2 text-title-lg text-primary">
                  {item.title}
                </h3>

                <p className="text-body-sm leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / CONFIANZA */}
      <section className="border-t border-outline-variant/20 bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 md:px-12">
          <div className="reveal">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-high text-secondary">
              <span className="material-symbols-outlined">
                verified_user
              </span>
            </div>

            <h2 className="mb-3 text-headline-md tracking-tight text-primary md:text-headline-lg">
              Tu información está en buenas manos
            </h2>

            <p className="mx-auto max-w-2xl text-body-md leading-relaxed text-on-surface-variant">
              La información compartida durante el diagnóstico se utiliza
              únicamente para comprender tus necesidades y preparar una
              propuesta adecuada.
            </p>
          </div>

          <div className="reveal mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-label-md font-semibold text-secondary transition-colors hover:text-primary"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>

              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}