import React from 'react';
import { FileText, User, Code, Mail, X, FileCode } from 'lucide-react';
import { Pestana } from '../tipos';
import { useLanguage } from '../context/LanguageContext';
import es from '../i18n/es';
import en from '../i18n/en';

interface Props {
  archivoAbierto: string;
  setArchivoAbierto: (archivo: string) => void;
  pestanasAbiertas: string[];
  setPestanasAbiertas: (pestanas: string[]) => void;
}

type PestanaI18nKey =
  | 'readme'
  | 'inicio'
  | 'sobreMi'
  | 'proyectos'
  | 'habilidades'
  | 'contacto';

const todasLasPestanas: (Pestana & { labelKey: PestanaI18nKey })[] = [
  { id: 'README.md', labelKey: 'readme', icono: FileCode, color: 'text-orange-400' },
  { id: 'inicio.jsx', labelKey: 'inicio', icono: FileText, color: 'text-blue-400' },
  { id: 'sobre-mi.jsx', labelKey: 'sobreMi', icono: User, color: 'text-green-400' },
  { id: 'proyectos.jsx', labelKey: 'proyectos', icono: Code, color: 'text-yellow-400' },
  { id: 'habilidades.jsx', labelKey: 'habilidades', icono: Code, color: 'text-purple-400' },
  { id: 'contacto.jsx', labelKey: 'contacto', icono: Mail, color: 'text-red-400' }
];

const BarraPestanas: React.FC<Props> = ({ 
  archivoAbierto, 
  setArchivoAbierto,
  pestanasAbiertas,
  setPestanasAbiertas 
}) => {
  const { lang } = useLanguage();
  const t = lang === 'es' ? es : en;

  const cerrarPestana = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    const nuevasPestanas = pestanasAbiertas.filter(p => p !== id);
    setPestanasAbiertas(nuevasPestanas);

    // Si cerramos la pestaña activa, activar otra
    if (archivoAbierto === id && nuevasPestanas.length > 0) {
      setArchivoAbierto(nuevasPestanas[nuevasPestanas.length - 1]);
    }
  };

  const pestanasFiltradas = todasLasPestanas.filter(p => 
    pestanasAbiertas.includes(p.id)
  );

  return (
    <div
      className="
        flex overflow-x-auto border-b
        bg-gray-100 dark:bg-[#252526]
        border-gray-300 dark:border-gray-800
      "
    >
      {pestanasFiltradas.map((pestana) => {
        const Icono = pestana.icono; // <-- CAMBIO ACÁ
        
        return (
          <div
            key={pestana.id}
            onClick={() => setArchivoAbierto(pestana.id)}
            className={`
              flex items-center gap-2 px-3 sm:px-4 py-3
              border-r cursor-pointer whitespace-nowrap
              border-gray-300 dark:border-gray-800
              ${
                archivoAbierto === pestana.id
                  ? 'bg-white dark:bg-[#1e1e1e] border-t-2 border-t-blue-500'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700'
              }
            `}
          >
            <Icono size={16} className={pestana.color} />
            <span className="text-xs sm:text-sm text-black dark:text-gray-200">
              {t.pestanas[pestana.labelKey]}
            </span>
            <X 
              size={14} 
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 ml-2"
              onClick={(e) => cerrarPestana(pestana.id, e)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BarraPestanas;