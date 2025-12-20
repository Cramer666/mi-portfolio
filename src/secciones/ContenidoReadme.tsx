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
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-[#252526] rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          {t.titulo}
        </h1>
        
        <div className="prose dark:prose-invert">
          <pre className="whitespace-pre-wrap text-lg text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
{t.texto}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ContenidoReadme;