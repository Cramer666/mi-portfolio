import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { proyectos } from '../datos/proyectos';

const ContenidoProyectos: React.FC = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-6">
        <span className="text-purple-400">const</span>{' '}
        <span className="text-blue-300">proyectos</span>{' '}
        <span className="text-white">=</span>{' '}
        <span className="text-yellow-300">[</span>
      </div>
      <div className="ml-8 space-y-6">
        {proyectos.map((proyecto, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition">
            <h3 className="text-xl font-bold text-blue-400 mb-2">{proyecto.nombre}</h3>
            <p className="text-gray-300 mb-4">{proyecto.descripcion}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proyecto.tecnologias.map((tech, i) => (
                <span key={i} className="bg-gray-700 text-green-400 px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={proyecto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
              >
                <Github size={18} />
                <span>Código</span>
              </a>
              {proyecto.demo && (
                <a
                  href={proyecto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 transition"
                >
                  <ExternalLink size={18} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <span className="text-yellow-300">]</span>
        <span className="text-white">;</span>
      </div>
    </div>
  );
};

export default ContenidoProyectos;