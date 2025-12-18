import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
const PORT = process.env.PORT || 3001;

console.log('🔑 API Key cargada:', process.env.RESEND_API_KEY ? '✅ Sí' : '❌ No');

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5000'],
  credentials: true,
}));
app.use(express.json());

app.post('/api/contacto', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  console.log('📨 Recibido desde cliente:', { nombre, email, mensaje });

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({
      ok: false,
      error: 'Datos incompletos',
    });
  }

  try {
    console.log('📧 Enviando email con Resend...');
    
    const resultado = await resend.emails.send({
      from: 'Portfolio <noreply@compartodeptoar.store>',
      to: ['luciaperrone.dev@gmail.com'],
      subject: `Nuevo mensaje de ${nombre}`,
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
      message: 'Email enviado correctamente',
      data: resultado,
    });
  } catch (error) {
    console.error('❌ Error en Resend:', error);
    return res.status(500).json({
      ok: false,
      error: 'Error al enviar el email',
      details: error instanceof Error ? error.message : String(error),
    });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: '✅ Servidor activo' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📧 Endpoint: POST /api/contacto`);
});