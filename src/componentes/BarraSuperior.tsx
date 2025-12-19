import React from 'react';
import { Code, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const BarraSuperior: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-[#323233] dark:bg-[#323233] bg-gray-200 h-12 flex items-center px-4 border-b border-gray-800 dark:border-gray-800 border-gray-300">
      <div className="flex items-center gap-2">
        <Code className="text-blue-400" size={20} />
        <span className="font-semibold text-sm sm:text-base text-black dark:text-white">
          Portfolio Lucia Perrone
        </span>
      </div>

      <button
        onClick={toggleTheme}
        className="ml-auto p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        title="Cambiar tema"
      >
        {theme === 'dark' ? (
          <Sun size={18} className="text-yellow-400" />
        ) : (
          <Moon size={18} className="text-gray-700" />
        )}
      </button>
    </div>
  );
};

export default BarraSuperior;
