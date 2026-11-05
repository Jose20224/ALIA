import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-primary text-on-primary border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-container via-secondary to-secondary-container flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  headset_mic
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-headline-md font-bold text-white leading-none">ALIA</span>
                <span className="text-caption-caps font-caption-caps text-on-primary-container tracking-wider mt-1">
                  Somos tu aliado en cada gestión.
                </span>
              </div>
            </Link>
            <p className="text-body-sm text-on-primary-container mt-5 max-w-md leading-relaxed">
              Asistencia virtual para empresas, profesionales y emprendimientos de Latinoamérica.
            </p>
            <div className="flex flex-wrap gap-2 mt-5 text-body-sm text-on-primary-container">
              <span>Atención al cliente</span>
              <span aria-hidden="true">•</span>
              <span>Ventas y generación de leads</span>
            </div>
          </div>

          <div>
            <h3 className="text-label-md font-label-md font-semibold text-surface-bright uppercase tracking-wide mb-4">
              Explorar
            </h3>
            <div className="flex flex-col gap-3">
              <Link className="text-body-sm text-on-primary-container hover:text-surface-bright transition-colors" href="/">
                Inicio
              </Link>
              <Link className="text-body-sm text-on-primary-container hover:text-surface-bright transition-colors" href="/nosotros">
                Nosotros
              </Link>
              <Link className="text-body-sm text-on-primary-container hover:text-surface-bright transition-colors" href="/servicios">
                Servicios y planes
              </Link>
              <Link className="text-body-sm text-on-primary-container hover:text-surface-bright transition-colors" href="/contacto">
                Contacto
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-label-md font-label-md font-semibold text-surface-bright uppercase tracking-wide mb-4">
              Legal
            </h3>
            <div className="flex flex-col gap-3">
              <Link className="text-body-sm text-on-primary-container hover:text-surface-bright transition-colors" href="/contacto#seguridad">
                Políticas de privacidad
              </Link>
              <Link className="text-body-sm text-on-primary-container hover:text-surface-bright transition-colors" href="/contacto#seguridad">
                Protocolo de confidencialidad
              </Link>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <a className="text-body-sm text-on-primary-container hover:text-surface-bright transition-colors" href="mailto:prueba@gmail.com">
                prueba@gmail.com
              </a>
              <a className="text-body-sm text-on-primary-container hover:text-surface-bright transition-colors" href="https://wa.me/50586854730" target="_blank" rel="noreferrer">
                WhatsApp: +505 8685 4730
              </a>
              <a className="text-body-sm text-on-primary-container hover:text-surface-bright transition-colors" href="https://www.linkedin.com/in/francisco-campos-4803961a1" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-on-primary-container/20 text-body-sm text-on-primary-container">
          © {new Date().getFullYear()} ALIA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
