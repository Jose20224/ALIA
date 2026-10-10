'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios y planes' },
  { href: '/contacto', label: 'Contacto' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="top-0 sticky z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto h-16 md:h-20">
        <Link className="flex items-center gap-2.5 md:gap-3 group" href="/" onClick={() => setOpen(false)}>
          <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-tr from-primary-container via-secondary to-secondary-container flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined text-[20px] md:text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              headset_mic
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-[19px] md:text-headline-md font-headline-md font-bold text-primary tracking-tight leading-none">
                ALIA
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary" />
            </div>
            <span className="text-[9px] md:text-caption-caps font-caption-caps text-on-surface-variant tracking-wider hidden sm:block mt-0.5">
              Somos tu aliado en cada gestión
            </span>
          </div>
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              className={
                isActive(link.href)
                  ? 'text-secondary font-label-md font-semibold border-b-2 border-secondary pb-0.5'
                  : 'text-on-surface-variant font-label-md hover:text-primary transition-colors'
              }
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md hover:bg-secondary transition-all duration-150 active:scale-95 shadow-sm"
            href="/contacto#diagnostico"
          >
            <span>Diagnóstico gratis</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>

          <button
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            type="button"
            className="lg:hidden p-2 text-primary hover:text-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/30"
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" className="material-symbols-outlined text-2xl">
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <div
        aria-hidden={!open}
        className={`mobile-menu lg:hidden bg-surface-container-lowest border-t border-outline-variant/30 px-6 py-5 shadow-lg space-y-3 ${open ? 'is-open' : ''}`}
        id="mobile-menu"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            className={
              isActive(link.href)
                ? 'block text-secondary font-label-md font-semibold py-1'
                : 'block text-on-surface-variant font-label-md hover:text-primary py-1'
            }
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md"
          href="/contacto#diagnostico"
          onClick={() => setOpen(false)}
        >
          <span>Diagnóstico gratis</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>
    </header>
  );
}
