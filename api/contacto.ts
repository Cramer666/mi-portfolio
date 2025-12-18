import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { nombre, email, mensaje } = req.body;

  try {
    await resend.emails.send({
      from: "Portfolio <noreply@compartodepator.store>",
      to: ["luciaperrone.dev@gmail.com"],
      subject: `Contacto de ${nombre}`,
      replyTo: email,
      html: `<p>${mensaje}</p>`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: "Error enviando email" });
  }
}
