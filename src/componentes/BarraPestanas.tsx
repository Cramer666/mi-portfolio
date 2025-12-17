import React from 'react';
import { FileText, User, Code, Mail } from 'lucide-react';
import { Pestana } from '../tipos';

interface Props {
  archivoAbierto: string;
  setArchivoAbierto: (archivo: string) => void;
}

const pestanas: Pestana[] = [
  { id: 'inicio.jsx', icono: FileText, color: 'text-blue-400' },
  { id: 'sobre-mi.jsx', icono: User, color: 'text-green-400' },
  { id: 'proyectos.jsx', icono: Code, color: 'text-yellow-400' },
  { id: 'habilidades.jsx', icono: Code, color: 'text-purple-400' },
  { id: 'contacto.jsx', icono: Mail, color: 'text-purple-400' }
];

const BarraPestanas: React.FC<Props> = ({ archivoAbierto, setArchivoAbierto }) => {
  return (
    <div className="bg-[#252526] flex border-b border-gray-800">
      {pestanas.map((pestana) => (
        <div
          key={pestana.id}
          onClick={() => setArchivoAbierto(pestana.id)}
          className={`flex items-center gap-2 px-4 py-3 border-r border-gray-800 cursor-pointer ${
            archivoAbierto === pestana.id
              ? 'bg-[#1e1e1e] border-t-2 border-t-blue-500'
              : 'hover:bg-gray-700'
          }`}
        >
          <pestana.icono size={16} className={pestana.color} />
          <span className="text-sm">{pestana.id}</span>
        </div>
      ))}
    </div>
  );
};

export default BarraPestanas;