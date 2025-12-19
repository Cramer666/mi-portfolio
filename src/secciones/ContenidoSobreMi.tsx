import React from 'react';
import { Download } from 'lucide-react';

const ContenidoSobreMi: React.FC = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-6">
        <span className="text-purple-500 dark:text-purple-400">function</span>{' '}
        <span className="text-yellow-500 dark:text-yellow-300">sobreMi</span>
        <span className="text-gray-800 dark:text-white">() {'{'}</span>
      </div>

      <div className="ml-8 space-y-6">
        {[
          { title: 'Formación', color: 'green' },
          { title: 'Experiencia', color: 'blue' },
          { title: 'Intereses', color: 'purple' },
        ].map(({ title, color }) => (
          <div
            key={title}
            className="
              p-6 rounded-lg border
              bg-white text-gray-800 border-gray-300
              dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700
            "
          >
            <h3
              className={`text-xl font-bold text-${color}-500 dark:text-${color}-400 mb-3`}
            >
              {title}
            </h3>

            {title === 'Formación' && (
              <p>
                • Tecnicatura en Programación Informática – UNQ<br />
                • Desarrollo web Full Stack<br />
                • Backend con Node.js, Express y MongoDB<br />
                • Frontend con React, Vite y TypeScript
              </p>
            )}

            {title === 'Experiencia' && (
              <>
                <p className="font-semibold">
                  Desarrolladora Full Stack (en progreso)
                </p>
                <p className="text-sm opacity-80">
                  Experiencia profesional: próximamente
                </p>
                <p className="mt-2">
                  Proyectos propios, trabajos académicos y muchas horas
                  debuggeando 😅
                </p>
              </>
            )}

            {title === 'Intereses' && (
              <p>
                Backend, APIs, buenas prácticas, arquitectura de software
                y aprendizaje continuo.
              </p>
            )}
          </div>
        ))}
      </div>

      {/* === BLOQUE CV (AGREGADO) === */}
      <div
        className="
          mt-10 ml-8 p-6 rounded-lg border
          bg-white text-gray-800 border-gray-300
          dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700
        "
      >
        <p className="mb-4">
          Si querés conocer más sobre mi experiencia y formación:
        </p>

        <a
          href="/cv/Lucia_Perrone_CV.pdf"
          download
          className="
            inline-flex items-center gap-2
            bg-green-600 hover:bg-green-500
            text-white px-5 py-2 rounded
            transition
          "
        >
          <Download size={18} />
          Descargar CV
        </a>
      </div>

      <div className="mt-6 text-gray-800 dark:text-white">{'}'}</div>
    </div>
  );
};

export default ContenidoSobreMi;
