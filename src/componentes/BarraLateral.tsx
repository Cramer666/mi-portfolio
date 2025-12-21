import React, { useState } from 'react';
import { FileText, Folder, Code, Volume2 } from 'lucide-react';

const BarraLateral: React.FC = () => {
  const [leyendo, setLeyendo] = useState(false);

  const toggleLectura = () => {
    if (leyendo) {
      window.speechSynthesis.cancel();
      setLeyendo(false);
    } else {
      const texto = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = 'es-ES';
      utterance.onend = () => setLeyendo(false);
      window.speechSynthesis.speak(utterance);
      setLeyendo(true);
    }
  };

  return (
    <div className="hidden md:flex w-12 flex-col items-center py-4 gap-4 border-r
      bg-gray-200 dark:bg-[#333333]
      border-gray-300 dark:border-gray-800"
    >
      <FileText className="text-gray-600 dark:text-gray-400" />
      <Folder className="text-gray-600 dark:text-gray-400" size={24} />
      <Code className="text-blue-400" size={24} />
      
      <button
        onClick={toggleLectura}
        className={`mt-auto ${
          leyendo 
            ? 'text-green-500 dark:text-green-400' 
            : 'text-gray-600 dark:text-gray-400'
        }`}
      >
        <Volume2 size={24} />
      </button>
    </div>
  );
};

export default BarraLateral;
