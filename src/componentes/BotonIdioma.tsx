import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const BotonIdioma: React.FC = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      title={lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
      className="
        w-8 h-8 flex items-center justify-center
        rounded
        text-lg
        opacity-70 hover:opacity-100
        transition
      "
    >
      {lang === 'es' ? '🇦🇷' : '🇺🇸'}
    </button>
  );
};

export default BotonIdioma;

