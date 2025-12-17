import dotenv from 'dotenv';
dotenv.config();

console.log('🔑 API Key cargada:', process.env.RESEND_API_KEY ? '✅ Sí' : '❌ No');

import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API endpoint
app.post('/api/contacto', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  console.log('📨 Recibido:', { nombre, email, mensaje });

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({
      ok: false,
      message: 'Datos incompletos',
    });
  }

  try {
    const resultado = await resend.emails.send({
      from: 'Portfolio <noreply@compartodeptoar.store>',
      to: ['luciaperrone.dev@gmail.com'],
      subject: `Nuevo mensaje de ${nombre}`,
      replyTo: email,
      html: `
        <h3>Nuevo mensaje desde el portfolio</h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b></p>
        <p>${mensaje}</p>
      `,
    });

    console.log('✅ Email enviado:', resultado);

    return res.status(200).json({
      ok: true,
      data: resultado,
    });
  } catch (error) {
    console.error('❌ Error:', error);
    return res.status(500).json({
      ok: false,
      error: String(error),
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});