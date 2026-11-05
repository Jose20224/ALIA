import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda un diagnóstico gratuito con ALIA y descubre cómo delegar la atención al cliente y el apoyo comercial de tu negocio.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | ALIA",
    description:
      "Conversemos sobre cómo ALIA puede convertirse en tu aliado operativo.",
    url: "/contacto",
  },
};

export default function ContactoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}