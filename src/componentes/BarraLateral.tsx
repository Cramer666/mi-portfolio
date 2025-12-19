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
      {/* ICONOS */}
      <div className="flex flex-col items-center py-4 gap-4">
        <FileText className="icono-lateral" size={22} />
        <Folder className="icono-lateral" size={22} />
        <Code className="text-blue-500 dark:text-blue-400" size={22} />
      </div>

      {/* BOTÓN IDIOMA – SOLO DESKTOP */}
      <div className="hidden md:flex flex-col items-center pb-3">
        <BotonIdioma />
      </div>
    </div>
  );
};

export default BarraLateral;
