import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Permitir POST y preflight OPTIONS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { nombre, email, mensaje } = req.body;

  // Validación
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({
      ok: false,
      error: "Datos incompletos"
    });
  }

  try {
    console.log('📨 Enviando email desde Vercel...');
    
    const resultado = await resend.emails.send({
      from: "Portfolio <noreply@compartodeptoar.store>",
      to: ["luciaperrone.dev@gmail.com"],
      subject: `Contacto de ${nombre}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Nuevo mensaje desde tu portfolio</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Mensaje:</strong></p>
          <p>${mensaje.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    console.log('✅ Email enviado exitosamente:', resultado);

    return res.status(200).json({ 
      ok: true,
      message: "Email enviado correctamente",
      data: resultado 
    });
  } catch (error) {
    console.error('❌ Error en Resend:', error);
    return res.status(500).json({ 
      ok: false,
      error: "Error al enviar el email",
      details: error instanceof Error ? error.message : String(error)
    });
  }
}