import { useLanguage } from '../context/LanguageContext';

const BotonIdioma: React.FC = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="
        w-full mt-4 px-3 py-2 rounded
        text-sm font-semibold
        bg-gray-200 text-gray-800
        dark:bg-gray-700 dark:text-gray-200
        hover:opacity-80 transition
      "
    >
      {lang === 'es' ? '🌎 English' : '🌎 Español'}
    </button>
  );
};

export default BotonIdioma;
