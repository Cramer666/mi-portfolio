import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const ContenidoInicio: React.FC = () => {
  return (
    <div className="p-8 animate-fade-in">

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        
        <div className="shrink-0">
          <img
            src="/foto-perfil.png"
            alt="Foto de Lucia Perrone"
            className="
              w-40 h-40
              rounded-full
              border-4 border-blue-500
              object-cover
              shadow-lg
            "
          />
        </div>

        <div className="flex-1">
          <div className="mb-6">
            <span className="text-purple-400">const</span>{' '}
            <span className="text-blue-300">desarrollador</span>{' '}
            <span className="text-white">=</span>{' '}
            <span className="text-yellow-300">{'{'}</span>
          </div>

          <div className="ml-8 space-y-2">
            <div>
              <span className="text-blue-300">nombre</span>
              <span className="text-white">:</span>{' '}
              <span className="text-green-300">"Lucia Perrone"</span>,
            </div>

            <div>
              <span className="text-blue-300">titulo</span>
              <span className="text-white">:</span>{' '}
              <span className="text-green-300">
                "Desarrolladora Full Stack Jr."
              </span>,
            </div>

            <div>
              <span className="text-blue-300">ubicacion</span>
              <span className="text-white">:</span>{' '}
              <span className="text-green-300">
                "General Belgrano, Buenos Aires, Argentina"
              </span>,
            </div>

            <div>
              <span className="text-blue-300">disponible</span>
              <span className="text-white">:</span>{' '}
              <span className="text-purple-400">true</span>,
            </div>
          </div>

          <div className="mt-2">
            <span className="text-yellow-300">{'}'}</span>
            <span className="text-white">;</span>
          </div>
        </div>
      </div>

  
      <div className="mt-12 bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">
          Bienvenido a mi portfolio
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Soy desarrolladora full stack con foco en backend, formada en la
          Tecnicatura en Programación Informática de la UNQ. Trabajo con Node.js,
          Express y TypeScript, utilizando bases de datos como PostgreSQL,
          MongoDB y Firebase.
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>

          <a
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded transition"
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
