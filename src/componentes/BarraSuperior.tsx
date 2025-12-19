import React from 'react';
import { Code } from 'lucide-react';
import BotonIdioma from './BotonIdioma';

const BarraSuperior: React.FC = () => {
  return (
    <div
      className="
        h-12 flex items-center justify-between px-4
        border-b
        bg-gray-200 dark:bg-[#323233]
        border-gray-300 dark:border-gray-800
      "
    >
      {/* TÍTULO */}
      <div className="flex items-center gap-2">
        <Code className="text-blue-500 dark:text-blue-400" size={20} />
        <span className="font-semibold text-gray-800 dark:text-white">
          Portfolio Lucia Perrone
        </span>
      </div>

      {/* BOTÓN IDIOMA – SOLO MOBILE */}
      <div className="flex md:hidden">
        <BotonIdioma />
      </div>
    </div>
  );
};

export default BarraSuperior;
