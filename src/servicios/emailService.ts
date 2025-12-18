import type { FormularioContacto } from '../tipos';

export const enviarEmail = async (datos: FormularioContacto): Promise<boolean> => {
  try {
    const response = await fetch('/api/contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });

    if (!response.ok) {
      console.error('❌ Error HTTP:', response.status);
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
