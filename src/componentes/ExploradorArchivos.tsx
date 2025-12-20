import React, { useState } from 'react';
import { Home, User, FolderOpen, Zap, Mail, FileCode } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import es from '../i18n/es';
import en from '../i18n/en';

interface Props {
  archivoAbierto: string;
  setArchivoAbierto: (archivo: string) => void;
  pestanasAbiertas: string[];
  setPestanasAbiertas: (pestanas: string[]) => void;
  menuAbierto?: boolean;
  setMenuAbierto?: (abierto: boolean) => void;
}

const ExploradorArchivos: React.FC<Props> = ({ 
  archivoAbierto, 
  setArchivoAbierto,
  pestanasAbiertas,
  setPestanasAbiertas,
  menuAbierto = false,
  setMenuAbierto
}) => {
  const { lang } = useLanguage();
  const t = lang === 'es' ? es : en;

  const iconos: { [key: string]: React.ReactNode } = {
    'README.md': <FileCode size={16} className="text-orange-400" />,
    'inicio.jsx': <Home size={16} className="text-blue-400" />,
    'sobre-mi.jsx': <User size={16} className="text-green-400" />,
    'proyectos.jsx': <FolderOpen size={16} className="text-yellow-400" />,
    'habilidades.jsx': <Zap size={16} className="text-purple-400" />,
    'contacto.jsx': <Mail size={16} className="text-red-400" />
  };

  const handleClick = (archivo: string) => {
    // Agregar pestaña si no está abierta
    if (!pestanasAbiertas.includes(archivo)) {
      setPestanasAbiertas([...pestanasAbiertas, archivo]);
    }
    // Activar la pestaña
    setArchivoAbierto(archivo);
    // NO cerrar el menú móvil
  };

  const contenidoExplorador = (
    <div className="p-3">
      <h3 className="text-xs font-semibold uppercase mb-3 text-gray-600 dark:text-gray-400">
        {t.explorador.titulo}
      </h3>

      <div className="space-y-1">
        {/* README.md primero */}
        <div
          onClick={() => handleClick('README.md')}
          className={`
            flex items-center gap-2 px-3 py-2 rounded cursor-pointer
            text-black dark:text-gray-200
            hover:bg-gray-200 dark:hover:bg-gray-700
            ${archivoAbierto === 'README.md' ? 'bg-gray-200 dark:bg-gray-700' : ''}
          `}
        >
          {iconos['README.md']}
          <span className="text-sm">README.md</span>
        </div>

        {/* Resto de archivos */}
        {t.explorador.archivos.map((item, idx) => {
          const isActive = archivoAbierto === item.archivo;

          return (
            <div
              key={idx}
              onClick={() => handleClick(item.archivo)}
              className={`
                flex items-center gap-2 px-3 py-2 rounded cursor-pointer
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
  );

  return (
    <>
      {/* Overlay para móvil */}
      {menuAbierto && (
        <div
          onClick={() => setMenuAbierto?.(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Explorador - Desktop (siempre visible) */}
      <div
        className="
          hidden md:block w-64 overflow-y-auto border-r
          bg-gray-100 dark:bg-[#252526]
          border-gray-300 dark:border-gray-800
        "
      >
        {contenidoExplorador}
      </div>

      {/* Explorador - Móvil (panel deslizable) */}
      <div
        className={`
          md:hidden fixed top-12 right-0 h-[calc(100%-3rem)] w-80 max-w-[85vw] z-40
          bg-gray-100 dark:bg-[#252526]
          border-l border-gray-300 dark:border-gray-800
          overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${menuAbierto ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {contenidoExplorador}
      </div>
    </>
  );
};

export default ExploradorArchivos;