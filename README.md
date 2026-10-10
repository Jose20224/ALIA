# ALIA — Next.js

Migración del sitio ALIA desde HTML estático a React + Next.js App Router.

## Rutas previstas

- /
- /nosotros
- /servicios
- /contacto

## Desarrollo

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Producción en Vercel

La aplicación incluye configuración para Vercel, metadata SEO por ruta, datos estructurados y las rutas automáticas `/robots.txt` y `/sitemap.xml`.

Antes del primer despliegue:

1. Copiar `.env.example` como `.env.local` para probar localmente.
2. Definir `NEXT_PUBLIC_SITE_URL` con el dominio final, por ejemplo `https://www.tu-dominio.com`.
3. En Vercel, crear la misma variable en **Settings > Environment Variables** para `Production` y volver a desplegar.
4. Después de publicar, registrar `https://www.tu-dominio.com/sitemap.xml` en Google Search Console.

No se requieren secretos para esta configuración. El archivo `vercel.json` deja preparado el framework Next.js, las URLs limpias y la ausencia de slash final.
