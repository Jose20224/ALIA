import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import RevealObserver from "@/components/reveal-observer";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000",
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "ALIA | Somos tu aliado en cada gestión",
    template: "%s | ALIA",
  },
  description:
    "ALIA brinda servicios de atención al cliente, ventas y generación de leads para empresas, profesionales y emprendedores.",
  keywords: [
    "asistencia virtual",
    "asistencia ejecutiva",
    "atención al cliente",
    "generación de leads",
    "ALIA",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_LA",
    url: "/",
    siteName: "ALIA",
    title: "ALIA | Somos tu aliado en cada gestión",
    description:
      "Apoyo operativo, atención al cliente y soporte comercial para empresas, profesionales y emprendedores.",
  },
  twitter: {
    card: "summary",
    title: "ALIA | Somos tu aliado en cada gestión",
    description:
      "Apoyo operativo, atención al cliente y soporte comercial para tu negocio.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className="bg-background-light text-primary antialiased">
        <SiteHeader />

        <main>{children}</main>

        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "ALIA",
              url: siteUrl.toString(),
              description: metadata.description,
              areaServed: "Latinoamérica",
              serviceType: [
                "Atención al cliente multicanal",
                "Ventas y generación de leads",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}