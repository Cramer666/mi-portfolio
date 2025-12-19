import React from 'react';
import { FileText, User, Code, Mail } from 'lucide-react';
import { Pestana } from '../tipos';
import { useLanguage } from '../context/LanguageContext';
import es from '../i18n/es';
import en from '../i18n/en';

interface Props {
  archivoAbierto: string;
  setArchivoAbierto: (archivo: string) => void;
}

type PestanaI18nKey =
  | 'inicio'
  | 'sobreMi'
  | 'proyectos'
  | 'habilidades'
  | 'contacto';

const pestanas: (Pestana & { labelKey: PestanaI18nKey })[] = [
  { id: 'inicio.jsx', labelKey: 'inicio', icono: FileText, color: 'text-blue-400' },
  { id: 'sobre-mi.jsx', labelKey: 'sobreMi', icono: User, color: 'text-green-400' },
  { id: 'proyectos.jsx', labelKey: 'proyectos', icono: Code, color: 'text-yellow-400' },
  { id: 'habilidades.jsx', labelKey: 'habilidades', icono: Code, color: 'text-purple-400' },
  { id: 'contacto.jsx', labelKey: 'contacto', icono: Mail, color: 'text-purple-400' }
];

const BarraPestanas: React.FC<Props> = ({ archivoAbierto, setArchivoAbierto }) => {
  const { lang } = useLanguage();
  const t = lang === 'es' ? es : en;

  return (
    <div
      className="
        flex overflow-x-auto border-b
        bg-gray-100 dark:bg-[#252526]
        border-gray-300 dark:border-gray-800
      "
    >
      {pestanas.map((pestana) => (
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
          <pestana.icono size={16} className={pestana.color} />
          <span className="text-xs sm:text-sm text-black dark:text-gray-200">
            {t.pestanas[pestana.labelKey]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BarraPestanas;
