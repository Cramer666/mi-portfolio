import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { proyectos } from '../datos/proyectos';
import { useLanguage } from '../context/LanguageContext';
import { proyectosEN } from '../datos/proyectosEN';
import es from '../i18n/es';
import en from '../i18n/en';

const ContenidoProyectos: React.FC = () => {
  const { lang } = useLanguage();
  const t = lang === 'es' ? es : en;
  const proyectosLng = lang === 'es' ? proyectos : proyectosEN;
  const [expandido, setExpandido] = useState<number | null>(null);

  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-6">
        <span className="text-purple-500 dark:text-purple-400">const</span>{' '}
        <span className="text-blue-500 dark:text-blue-300">{t.proyectos.fn}</span>{' '}
        <span className="text-gray-800 dark:text-white">= [</span>
      </div>

      <div className="ml-8 space-y-6">
        {proyectosLng.map((proyecto, idx) => (
          <div
            key={idx}
            className="
              p-6 rounded-lg border transition
              bg-white text-gray-800 border-gray-300
              dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700
              hover:border-blue-500
            "
          >
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {proyecto.nombre}
            </h3>

            <p className="mt-2 mb-4">{proyecto.descripcion}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {proyecto.tecnologias.map((tech, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 rounded text-sm
                    bg-gray-200 text-gray-800
                    dark:bg-gray-700 dark:text-green-400
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() => setExpandido(expandido === idx ? null : idx)}
              className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-4"
            >
              {expandido === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              {expandido === idx ? t.proyectos.ocultarCaracteristicas : t.proyectos.verCaracteristicas}
            </button>

            {expandido === idx && (
              <div
                className="
                  p-4 rounded border mb-4
                  bg-gray-100 border-gray-300
                  dark:bg-gray-700/30 dark:border-gray-600
                "
              >
                <ul className="space-y-1 text-sm">
                  {proyecto.caracteristicas?.map((c, i) => (
                    <li key={i}>▸ {c}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-4">
              <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-blue-500">
                <Github size={18} /> {t.proyectos.codigo}
              </a>
              {proyecto.demo && (
                <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-green-500">
                  <ExternalLink size={18} /> {t.proyectos.demo}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-gray-800 dark:text-white">];</div>
    </div>
  );
};

export default ContenidoProyectos;