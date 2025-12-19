import React from 'react';
import { habilidades } from '../datos/habilidades';

const ContenidoHabilidades: React.FC = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-6">
        <span className="text-purple-500 dark:text-purple-400">const</span>{' '}
        <span className="text-blue-500 dark:text-blue-300">habilidades</span>{' '}
        <span className="text-gray-800 dark:text-white">= {'{'}</span>
      </div>

      <div className="ml-8 space-y-6">
        {Object.entries(habilidades).map(([grupo, lista]) => (
          <div
            key={grupo}
            className="
              p-6 rounded-lg border
              bg-white text-gray-800 border-gray-300
              dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700
            "
          >
            <h3 className="text-xl font-bold mb-4 capitalize">{grupo}</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {lista.map((skill, i) => (
                <div
                  key={i}
                  className="
                    px-4 py-2 rounded text-center
                    bg-gray-200 text-gray-800
                    dark:bg-gray-700 dark:text-green-400
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-gray-800 dark:text-white">{'};'}</div>
    </div>
  );
};

export default ContenidoHabilidades;
