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
3. Crear una cuenta en Resend y guardar su clave API únicamente como `RESEND_API_KEY` en `.env.local` o en las variables protegidas del proveedor de despliegue.
4. Mantener `CONTACT_DESTINATION_EMAIL` como `saborglobalofficial@gmail.com` durante la prueba. Esta variable es el destino de las solicitudes del formulario.
5. En Vercel, crear estas variables en **Settings > Environment Variables** para `Production` y volver a desplegar. No subir `.env.local` ni la clave API al repositorio.
6. Después de publicar, registrar `https://www.tu-dominio.com/sitemap.xml` en Google Search Console.

El endpoint `/api/contact` valida los campos en el servidor, limita el tamaño de los datos, incluye un campo anti-spam y no expone la clave de Resend al navegador. Mientras no exista `RESEND_API_KEY`, el formulario muestra un error explícito y ofrece WhatsApp como alternativa.
