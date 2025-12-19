import React from 'react';
import { Code, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import BotonIdioma from './BotonIdioma';

const BarraSuperior: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="
        h-12 flex items-center px-4
        border-b
        bg-gray-200 dark:bg-[#323233]
        border-gray-300 dark:border-gray-800
      "
    >
      <div className="flex items-center gap-2">
        <Code className="text-blue-400" size={20} />
        <span className="font-semibold text-sm sm:text-base text-black dark:text-white">
          Portfolio Lucia Perrone
        </span>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <BotonIdioma />

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
      </div>
    </div>
  );
};

export default BarraSuperior;
