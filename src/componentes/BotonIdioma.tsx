import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const BotonIdioma: React.FC = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition text-xl"
      title="Cambiar idioma"
    >
      {lang === 'es' ? '🇦🇷' : '🇺🇸'}
    </button>
  );
};

export default BotonIdioma;
