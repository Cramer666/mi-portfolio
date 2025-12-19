import React from 'react';
import { estructuraArchivos } from '../datos/estructuraArchivos';

interface Props {
  archivoAbierto: string;
  setArchivoAbierto: (archivo: string) => void;
}

const ExploradorArchivos: React.FC<Props> = ({ archivoAbierto, setArchivoAbierto }) => {
  return (
    <div
      className="
        hidden md:block w-64 overflow-y-auto border-r
        bg-gray-100 dark:bg-[#252526]
        border-gray-300 dark:border-gray-800
      "
    >
      <div className="p-3">
        <h3 className="text-xs font-semibold uppercase mb-3 text-gray-600 dark:text-gray-400">
          Explorador
        </h3>

        <div className="space-y-1">
          {estructuraArchivos.map((item, idx) => {
            const isActive = archivoAbierto === (item.archivo || item.nombre);

            return (
              <div
                key={idx}
                onClick={() => setArchivoAbierto(item.archivo || item.nombre)}
                className={`
                  flex items-center gap-2 px-2 py-1 rounded cursor-pointer
                  text-black dark:text-gray-200
                  hover:bg-gray-200 dark:hover:bg-gray-700
                  ${isActive ? 'bg-gray-200 dark:bg-gray-700' : ''}
                `}
              >
                <item.icono size={16} className={item.color} />
                <span className="text-sm">{item.nombre}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploradorArchivos;
