import React, { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import { FormularioContacto, EstadoEnvio } from '../tipos';
import { enviarEmail } from '../servicios/emailService';

const ContenidoContacto: React.FC = () => {
  const [formulario, setFormulario] = useState<FormularioContacto>({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [estadoEnvio, setEstadoEnvio] = useState<EstadoEnvio>(null);
  const [enviando, setEnviando] = useState(false);

  const manejarEnvio = async () => {
    if (!formulario.nombre || !formulario.email || !formulario.mensaje) {
      setEstadoEnvio('error');
      return;
    }

    setEnviando(true);
    setEstadoEnvio(null);

    const exito = await enviarEmail(formulario);

    if (exito) {
      setEstadoEnvio('exito');
      setFormulario({ nombre: '', email: '', mensaje: '' });
    } else {
      setEstadoEnvio('error');
    }

    setEnviando(false);
  };

  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-6">
        <span className="text-purple-500 dark:text-purple-400">async function</span>{' '}
        <span className="text-yellow-500 dark:text-yellow-300">enviarMensaje</span>
        <span className="text-gray-800 dark:text-white">(</span>
        <span className="text-orange-500 dark:text-orange-300">formulario</span>
        <span className="text-gray-800 dark:text-white">) {'{'}</span>
      </div>

      <div className="ml-8 max-w-2xl space-y-6">
        {[
          { label: 'nombre', type: 'text', value: formulario.nombre },
          { label: 'email', type: 'email', value: formulario.email }
        ].map(({ label, type, value }) => (
          <div key={label}>
            <label className="block text-blue-500 dark:text-blue-300 mb-2">
              <span className="text-gray-800 dark:text-white">const</span> {label}{' '}
              <span className="text-gray-800 dark:text-white">=</span>
            </label>
            <input
              type={type}
              value={value}
              onChange={(e) =>
                setFormulario({ ...formulario, [label]: e.target.value })
              }
              className="
                w-full rounded px-4 py-2
                bg-white text-gray-800 border border-gray-300
                dark:bg-gray-800 dark:text-white dark:border-gray-700
                focus:outline-none focus:border-blue-500
              "
            />
          </div>
        ))}

        <div>
          <label className="block text-blue-500 dark:text-blue-300 mb-2">
            <span className="text-gray-800 dark:text-white">const</span> mensaje{' '}
            <span className="text-gray-800 dark:text-white">=</span>
          </label>
          <textarea
            rows={6}
            value={formulario.mensaje}
            onChange={(e) =>
              setFormulario({ ...formulario, mensaje: e.target.value })
            }
            className="
              w-full rounded px-4 py-2 resize-none
              bg-white text-gray-800 border border-gray-300
              dark:bg-gray-800 dark:text-white dark:border-gray-700
              focus:outline-none focus:border-blue-500
            "
          />
        </div>

        {estadoEnvio === 'exito' && (
          <div className="flex items-center gap-3 p-4 rounded border
            bg-green-100 border-green-400
            dark:bg-green-900/30 dark:border-green-500">
            <Check className="text-green-500" />
            <span>¡Mensaje enviado con éxito!</span>
          </div>
        )}

        {estadoEnvio === 'error' && (
          <div className="flex items-center gap-3 p-4 rounded border
            bg-red-100 border-red-400
            dark:bg-red-900/30 dark:border-red-500">
            <AlertCircle className="text-red-500" />
            <span>Error al enviar. Completa todos los campos.</span>
          </div>
        )}

        <button
          onClick={manejarEnvio}
          disabled={enviando}
          className="flex items-center gap-2 px-6 py-3 rounded font-semibold
            bg-blue-600 hover:bg-blue-500 text-white
            disabled:bg-gray-400"
        >
          <Send size={18} />
          {enviando ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </div>

      <div className="mt-6 text-gray-800 dark:text-white">{'}'}</div>
    </div>
  );
};

export default ContenidoContacto;
