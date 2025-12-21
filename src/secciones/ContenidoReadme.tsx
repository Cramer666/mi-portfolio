import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContenidoReadme: React.FC = () => {
  const { lang } = useLanguage();
  
  const contenido = {
    es: {
      titulo: '¡Buenas, Bienvenid@ a mi portfolio!',
      texto: 'Desde el explorador de archivos podrás manejar qué ves.\n\nDisfruta de lo simple...'
    },
    en: {
      titulo: 'Hello, Welcome to my portfolio!',
      texto: 'From the file explorer you can manage what you see.\n\nEnjoy the simple things...'
    }
  };
  
  const t = contenido[lang];
  
  return (
    <div className="bg-white dark:bg-[#1e1e1e] min-h-screen">
      <div className="bg-gray-200 dark:bg-[#323233] px-4 py-2 flex items-center gap-2 border-b border-gray-300 dark:border-[#3e3e42]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
        <span className="ml-4 text-sm text-gray-700 dark:text-[#cccccc] font-mono">README.md</span>
      </div>
      
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-blue-600 dark:text-[#4ec9b0] font-mono">
          # {t.titulo}
        </h1>
        
        <pre className="whitespace-pre-wrap text-base text-gray-800 dark:text-[#d4d4d4] font-mono leading-relaxed">
{t.texto}
        </pre>
      </div>
    </div>
  );
};

export default ContenidoReadme;
