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
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <div className="mb-6">
          <span className="text-purple-400">async function</span>{' '}
          <span className="text-yellow-300">enviarMensaje</span>
          <span className="text-white">(</span>
          <span className="text-orange-300">formulario</span>
          <span className="text-white">) {'{'}</span>
        </div>

        <div className="ml-8 max-w-2xl space-y-6">
          <div>
            <label className="block text-blue-300 mb-2">
              <span className="text-white">const</span> nombre <span className="text-white">=</span>
            </label>
            <input
              type="text"
              value={formulario.nombre}
              onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
              className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label className="block text-blue-300 mb-2">
              <span className="text-white">const</span> email <span className="text-white">=</span>
            </label>
            <input
              type="email"
              value={formulario.email}
              onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
              className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-blue-300 mb-2">
              <span className="text-white">const</span> mensaje <span className="text-white">=</span>
            </label>
            <textarea
              rows={6}
              value={formulario.mensaje}
              onChange={(e) => setFormulario({ ...formulario, mensaje: e.target.value })}
              className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white focus:border-blue-500 focus:outline-none resize-none"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          {estadoEnvio === 'exito' && (
            <div className="bg-green-900/30 border border-green-500 rounded p-4 flex items-center gap-3">
              <Check className="text-green-400" size={20} />
              <span className="text-green-300">¡Mensaje enviado con éxito!</span>
            </div>
          )}

          {estadoEnvio === 'error' && (
            <div className="bg-red-900/30 border border-red-500 rounded p-4 flex items-center gap-3">
              <AlertCircle className="text-red-400" size={20} />
              <span className="text-red-300">Error al enviar. Completa todos los campos.</span>
            </div>
          )}

          <button
            onClick={manejarEnvio}
            disabled={enviando}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 px-6 py-3 rounded font-semibold transition text-white"
          >
            <Send size={18} />
            <span>{enviando ? 'Enviando...' : 'Enviar Mensaje'}</span>
          </button>
        </div>

        <div className="mt-6">
          <span className="text-white">{'}'}</span>
        </div>
      </div>
    </div>
  );
};

export default ContenidoContacto;
