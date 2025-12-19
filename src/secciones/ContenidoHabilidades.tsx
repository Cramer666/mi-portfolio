import React from 'react';
import { habilidades } from '../datos/habilidades';

const ContenidoHabilidades: React.FC = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <div className="mb-6">
          <span className="text-purple-400">const</span>{' '}
          <span className="text-blue-300">habilidades</span>{' '}
          <span className="text-white">=</span>{' '}
          <span className="text-yellow-300">{'{'}</span>
        </div>

        <div className="ml-8 space-y-6">
          <div className="bg-gray-900 p-6 rounded border border-gray-700">
            <h3 className="text-xl font-bold text-blue-400 mb-4">💻 Frontend</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {habilidades.frontend.map((skill, i) => (
                <div key={i} className="bg-gray-700 text-green-400 px-4 py-2 rounded text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded border border-gray-700">
            <h3 className="text-xl font-bold text-green-400 mb-4">⚙️ Backend</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {habilidades.backend.map((skill, i) => (
                <div key={i} className="bg-gray-700 text-blue-400 px-4 py-2 rounded text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded border border-gray-700">
            <h3 className="text-xl font-bold text-purple-400 mb-4">🛠️ Herramientas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {habilidades.herramientas.map((skill, i) => (
                <div key={i} className="bg-gray-700 text-orange-400 px-4 py-2 rounded text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <span className="text-yellow-300">{'}'}</span>
          <span className="text-white">;</span>
        </div>
      </div>
    </div>
  );
};

export default ContenidoHabilidades;
