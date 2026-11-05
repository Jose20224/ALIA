import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedServices = new Set(["atencion", "ventas", "combinado", "otro"]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const nombre = clean(body.nombre, 100);
    const empresa = clean(body.empresa, 150);
    const email = clean(body.email, 254).toLowerCase();
    const telefono = clean(body.telefono, 30);
    const servicio = clean(body.servicio, 30);
    const mensaje = clean(body.mensaje, 3000);
    const website = clean(body.website, 100);
    const privacidad = clean(body.privacidad, 10);

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (
      !nombre ||
      !emailPattern.test(email) ||
      !allowedServices.has(servicio) ||
      !mensaje ||
      mensaje.length < 10 ||
      privacidad !== "on"
    ) {
      return NextResponse.json(
        { error: "Revisa los campos obligatorios e inténtalo nuevamente." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const destination = process.env.CONTACT_DESTINATION_EMAIL;

    if (!apiKey || !destination) {
      console.error("Contacto no configurado: faltan variables de correo.");
      return NextResponse.json(
        { error: "El formulario no está configurado todavía. Escríbenos por WhatsApp." },
        { status: 503 },
      );
    }

    const serviceLabels: Record<string, string> = {
      atencion: "Atención al cliente",
      ventas: "Ventas y generación de leads",
      combinado: "Combinación de servicios",
      otro: "Otro",
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "ALIA <onboarding@resend.dev>",
        to: [destination],
        reply_to: email,
        subject: `Nueva solicitud de diagnóstico: ${nombre}`,
        text: [
          `Nombre: ${nombre}`,
          `Empresa: ${empresa || "No indicada"}`,
          `Correo: ${email}`,
          `Teléfono: ${telefono || "No indicado"}`,
          `Servicio: ${serviceLabels[servicio]}`,
          "",
          "Mensaje:",
          mensaje,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("Resend rechazó el correo:", response.status);
      return NextResponse.json(
        { error: "No pudimos enviar tu solicitud. Intenta nuevamente." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error procesando formulario de contacto:", error);
    return NextResponse.json(
      { error: "No pudimos procesar tu solicitud. Intenta nuevamente." },
      { status: 500 },
    );
  }
}
