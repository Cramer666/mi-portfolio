import React from 'react';
import { Code, Sun, Moon } from 'lucide-react';
import BotonIdioma from './BotonIdioma';
import { useTheme } from '../context/ThemeContext';

const BarraSuperior: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="
        h-12 flex items-center justify-between px-4
        border-b
        bg-gray-200 dark:bg-[#323233]
        border-gray-300 dark:border-gray-800
      "
    >
      {/* IZQUIERDA */}
      <div className="flex items-center gap-2">
        <Code className="text-blue-500 dark:text-blue-400" size={20} />
        <span className="font-semibold text-gray-800 dark:text-white">
          Portfolio Lucia Perrone
        </span>
      </div>

      {/* DERECHA – CONTROLES (mobile) */}
      <div className="flex items-center gap-3 md:hidden">
        {/* BOTÓN TEMA */}
        <button
          onClick={toggleTheme}
          className="opacity-70 hover:opacity-100 transition"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* BOTÓN IDIOMA */}
        <BotonIdioma />
      </div>
    </div>
  );
};

export default BarraSuperior;
