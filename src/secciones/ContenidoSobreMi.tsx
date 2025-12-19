import React from 'react';
import { Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import es from '../i18n/es';
import en from '../i18n/en';

const ContenidoSobreMi: React.FC = () => {
  const { lang } = useLanguage();
  const t = lang === 'es' ? es : en;

const sections = [
    { title: t.sobreMi.formacion, color: 'green', key: 'formacion' },
    { title: t.sobreMi.experiencia, color: 'blue', key: 'experiencia' },
    { title: t.sobreMi.intereses, color: 'purple', key: 'intereses' },
  ];

  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-6">
        <span className="text-purple-500 dark:text-purple-400">function</span>{' '}
        <span className="text-yellow-500 dark:text-yellow-300">{t.sobreMi.fn}</span>
        <span className="text-gray-800 dark:text-white">() {'{'}</span>
      </div>

      <div className="ml-8 space-y-6">
        {sections.map(({ title, color, key }) => (
          <div
            key={key}
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

            {key === 'formacion' && (
              <p className="whitespace-pre-line">
                {t.sobreMi.formacionDesc}
              </p>
            )}

            {key === 'experiencia' && (
              <>
                <p className="font-semibold">
                  {t.sobreMi.experienciaTitulo}
                </p>
                <p className="text-sm opacity-80">
                  {t.sobreMi.experienciaSubtitulo}
                </p>
                <p className="mt-2">
                  {t.sobreMi.experienciaDesc}
                </p>
              </>
            )}

            {key === 'intereses' && (
              <p>
                {t.sobreMi.interesesDesc}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* === BLOQUE CV === */}
      <div
        className="
          mt-10 ml-8 p-6 rounded-lg border
          bg-white text-gray-800 border-gray-300
          dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700
        "
      >
        <p className="mb-4">
          {t.sobreMi.cvTexto}
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
          {t.sobreMi.cvBoton}
        </a>
      </div>

      <div className="mt-6 text-gray-800 dark:text-white">{'}'}</div>
    </div>
  );
};

export default ContenidoSobreMi;