import React from 'react';
import { Code, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from '../hooks/useTranslation';
import BotonIdioma from './BotonIdioma';

const BarraSuperior: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div
      className="
        h-12 flex items-center px-4
        border-b
        bg-gray-200 dark:bg-[#323233]
        border-gray-300 dark:border-gray-800
      "
    >
      {/* IZQUIERDA */}
      <div className="flex items-center gap-2">
        <Code className="text-blue-400" size={20} />
        <span className="font-semibold text-sm sm:text-base text-black dark:text-white">
          {t.app.title}
        </span>
      </div>

      {/* DERECHA */}
      <div className="ml-auto flex items-center gap-3">
        {/* BOTÓN TEMA */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          title="Cambiar tema"
        >
          {theme === 'dark' ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} className="text-gray-700" />
          )}
        </button>

        {/* BOTÓN IDIOMA SOLO MOBILE */}
        <div className="md:hidden">
          <BotonIdioma />
        </div>
      </div>
    </div>
  );
};

export default BarraSuperior;
