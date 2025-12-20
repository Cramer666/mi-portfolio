import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import es from '../i18n/es';
import en from '../i18n/en';

const ContenidoHabilidades: React.FC = () => {
  const { lang } = useLanguage();
  const t = lang === 'es' ? es : en;
  const habilidades = t.habilidades.skills;

  return (
    <div className="p-4 sm:p-8 animate-fade-in">
      <div className="mb-6">
        <span className="text-purple-500 dark:text-purple-400">const</span>{' '}
        <span className="text-blue-500 dark:text-blue-300">{t.habilidades.fn}</span>{' '}
        <span className="text-gray-800 dark:text-white">= {'{'}</span>
      </div>

      <div className="ml-4 sm:ml-8 space-y-6">
        {Object.entries(habilidades).map(([grupo, lista]) => (
          <div
            key={grupo}
            className="
              p-4 sm:p-6 rounded-lg border
              bg-white text-gray-800 border-gray-300
              dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700
            "
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              {grupo === 'frontend' && t.habilidades.frontend}
              {grupo === 'backend' && t.habilidades.backend}
              {grupo === 'herramientas' && t.habilidades.herramientas}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
              {lista.map((skill, i) => (
                <div
                  key={i}
                  className="
                    px-2 sm:px-4 py-2 rounded text-center text-xs sm:text-sm
                    bg-gray-200 text-gray-800
                    dark:bg-gray-700 dark:text-green-400
                    break-words
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