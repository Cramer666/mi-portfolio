import React from 'react';
import { Home, User, FolderOpen, Zap, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import es from '../i18n/es';
import en from '../i18n/en';

interface Props {
  archivoAbierto: string;
  setArchivoAbierto: (archivo: string) => void;
}

const ExploradorArchivos: React.FC<Props> = ({ archivoAbierto, setArchivoAbierto }) => {
  const { lang } = useLanguage();
  const t = lang === 'es' ? es : en;

  const iconos: { [key: string]: React.ReactNode } = {
    'inicio': <Home size={16} className="text-blue-400" />,
    'sobreMi': <User size={16} className="text-green-400" />,
    'proyectos': <FolderOpen size={16} className="text-yellow-400" />,
    'habilidades': <Zap size={16} className="text-purple-400" />,
    'contacto': <Mail size={16} className="text-red-400" />
  };

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
          {t.explorador.titulo}
        </h3>

        <div className="space-y-1">
          {t.explorador.archivos.map((item, idx) => {
            const isActive = archivoAbierto === item.archivo;

            return (
              <div
                key={idx}
                onClick={() => setArchivoAbierto(item.archivo)}
                className={`
                  flex items-center gap-2 px-2 py-1 rounded cursor-pointer
                  text-black dark:text-gray-200
                  hover:bg-gray-200 dark:hover:bg-gray-700
                  ${isActive ? 'bg-gray-200 dark:bg-gray-700' : ''}
                `}
              >
                {iconos[item.archivo]}
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