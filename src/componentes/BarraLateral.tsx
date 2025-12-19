import React from 'react';
import { FileText, Folder, Code } from 'lucide-react';
import BotonIdioma from './BotonIdioma';

const BarraLateral: React.FC = () => {
  return (
    <div
      className="
        hidden md:flex w-12 flex-col
        justify-between
        border-r
        bg-gray-200 dark:bg-[#333333]
        border-gray-300 dark:border-gray-800
      "
    >
      {/* ICONOS SUPERIORES */}
      <div className="flex flex-col items-center py-4 gap-4">
        <FileText
          size={22}
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition cursor-pointer"
        />
        <Folder
          size={22}
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition cursor-pointer"
        />
        <Code
          size={22}
          className="text-blue-500 dark:text-blue-400"
        />
      </div>

      {/* ZONA INFERIOR – IDIOMA */}
      <div className="flex flex-col items-center pb-3">
        <BotonIdioma />
      </div>
    </div>
  );
};

export default BarraLateral;
