import React from 'react';
import { estructuraArchivos } from '../datos/estructuraArchivos';

interface Props {
  archivoAbierto: string;
  setArchivoAbierto: (archivo: string) => void;
}

const ExploradorArchivos: React.FC<Props> = ({ archivoAbierto, setArchivoAbierto }) => {
  return (
    <div className="w-64 bg-[#252526] border-r border-gray-800 overflow-y-auto">
      <div className="p-3">
        <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Explorador</h3>
        <div className="space-y-1">
          {estructuraArchivos.map((item, idx) => (
            <div key={idx}>
              <div
                onClick={() => setArchivoAbierto(item.archivo || item.nombre)}
                className={`flex items-center gap-2 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer ${
                  archivoAbierto === (item.archivo || item.nombre) ? 'bg-gray-700' : ''
                }`}
              >
                <item.icono size={16} className={item.color} />
                <span className="text-sm">{item.nombre}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploradorArchivos;