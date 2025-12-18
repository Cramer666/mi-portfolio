import type { FormularioContacto } from '../tipos';

export const enviarEmail = async (datos: FormularioContacto): Promise<boolean> => {
  try {
    // Detectar si estamos en desarrollo o producción
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://mi-portfolio-three-rose.vercel.app/'
      : 'http://localhost:3001';

    const endpoint = `${baseUrl}/api/contacto`;

    console.log('📤 Enviando a:', endpoint);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });

    if (!response.ok) {
      console.error('❌ Error HTTP:', response.status);
      const errorData = await response.json();
      console.error('❌ Detalle error:', errorData);
      return false;
    }

    const resultado = await response.json();
    console.log('✅ Respuesta del servidor:', resultado);

    return resultado.ok === true;
  } catch (error) {
    console.error('❌ Error al enviar:', error);
    return false;
  }
};