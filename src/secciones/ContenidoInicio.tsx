import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const ContenidoInicio: React.FC = () => {
  return (
    <div className="w-full min-h-full p-6 md:p-8 animate-fade-in">
      {/* CARD SUPERIOR */}
      <div
        className="
          w-full rounded-lg border p-6 mb-8
          bg-white border-gray-300
          dark:bg-[#252526] dark:border-gray-700
        "
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src="/foto-perfil.png"
            alt="Foto de Lucia Perrone"
            className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover shadow-lg"
          />

          <div className="flex-1 font-mono">
            <div className="mb-6">
              <span className="text-purple-500">const</span>{' '}
              <span className="text-blue-500">desarrollador</span>{' '}
              <span className="text-gray-800 dark:text-gray-200">=</span>{' '}
              <span className="text-yellow-500">{'{'}</span>
            </div>

            <div className="ml-6 space-y-2">
              <div>
                <span className="text-blue-500">nombre</span>
                <span className="text-gray-800 dark:text-gray-200"> :</span>{' '}
                <span className="text-green-500">"Lucia Perrone"</span>,
              </div>

              <div>
                <span className="text-blue-500">titulo</span>
                <span className="text-gray-800 dark:text-gray-200"> :</span>{' '}
                <span className="text-green-500">
                  "Desarrolladora Full Stack Jr."
                </span>,
              </div>

              <div>
                <span className="text-blue-500">ubicacion</span>
                <span className="text-gray-800 dark:text-gray-200"> :</span>{' '}
                <span className="text-green-500">
                  "General Belgrano, Buenos Aires, Argentina"
                </span>,
              </div>

              <div>
                <span className="text-blue-500">disponible</span>
                <span className="text-gray-800 dark:text-gray-200"> :</span>{' '}
                <span className="text-purple-500">true</span>,
              </div>
            </div>

            <div className="mt-2">
              <span className="text-yellow-500">{'}'}</span>
              <span className="text-gray-800 dark:text-gray-200">;</span>
            </div>
          </div>
        </div>
      </div>

      {/* CARD INFERIOR */}
      <div
        className="
          w-full rounded-lg border p-6
          bg-white border-gray-300
          dark:bg-[#252526] dark:border-gray-700
        "
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Bienvenido a mi portfolio
        </h2>

        <p className="leading-relaxed text-gray-700 dark:text-gray-400">
          Soy desarrolladora full stack con foco en backend, formada en la
          Tecnicatura en Programación Informática de la UNQ. Trabajo con
          Node.js, Express y TypeScript, utilizando bases de datos como
          PostgreSQL, MongoDB y Firebase.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2 px-4 py-2 rounded transition
              bg-gray-200 hover:bg-gray-300
              dark:bg-gray-700 dark:hover:bg-gray-600
            "
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>

          <a
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              bg-blue-600 hover:bg-blue-500 text-white
              px-4 py-2 rounded transition
            "
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContenidoInicio;
