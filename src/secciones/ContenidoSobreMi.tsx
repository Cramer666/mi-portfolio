import React from 'react';

const ContenidoSobreMi: React.FC = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-6">
        <span className="text-purple-400">function</span>{' '}
        <span className="text-yellow-300">sobreMi</span>
        <span className="text-white">() {'{'}</span>
      </div>

      <div className="ml-8 space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-green-400 mb-3">Formación</h3>
          <p className="text-gray-300">
            • Tecnicatura en Programación Informática – Universidad Nacional de Quilmes (UNQ)
            <br />
            • Formación en desarrollo web Full Stack
            <br />
            • Enfoque en backend con Node.js, Express y MongoDB
            <br />
            • Frontend con React, Vite y TypeScript
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-blue-400 mb-3">Experiencia</h3>
          <div className="space-y-4">
            <div>
              <p className="text-white font-semibold">
                Desarrolladora Full Stack (en progreso)
              </p>
              <p className="text-gray-400 text-sm">
                Experiencia profesional: próximamente
              </p>
              <p className="text-gray-300 mt-2">
                Por ahora sumando experiencia con proyectos propios, trabajos académicos
                y muchas horas peleándome con bugs.  
                Espero llenar esta sección muy pronto 🙂
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-purple-400 mb-3">Intereses</h3>
          <p className="text-gray-300">
            Desarrollo backend, creación de APIs, buenas prácticas,
            arquitectura de software, aprendizaje continuo
            y construir productos reales que funcionen de verdad.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <span className="text-white">{'}'}</span>
      </div>
    </div>
  );
};

export default ContenidoSobreMi;
