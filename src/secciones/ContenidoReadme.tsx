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
    <div className="bg-white dark:bg-[#1e1e1e] min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-600 dark:text-[#4ec9b0] font-mono">
        # {t.titulo}
      </h1>
      
      <pre className="whitespace-pre-wrap text-base text-gray-800 dark:text-[#d4d4d4] font-mono leading-relaxed">
{t.texto}
      </pre>
    </div>
  );
};

export default ContenidoReadme;
