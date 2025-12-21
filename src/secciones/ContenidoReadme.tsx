import React, { useState } from 'react';

const ContenidoReadme: React.FC = () => {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  
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
    <div className="bg-[#1e1e1e] min-h-screen">
      {/* Barra superior estilo VS Code */}
      <div className="bg-[#323233] px-4 py-2 flex items-center gap-2 border-b border-[#3e3e42]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
        <span className="ml-4 text-sm text-[#cccccc] font-mono">README.md</span>
        
        {/* Botón de idioma */}
        <button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="ml-auto px-3 py-1 text-xs bg-[#0e639c] hover:bg-[#1177bb] text-white rounded font-mono transition-colors"
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
      
      {/* Área de contenido - estilo markdown en VS Code */}
      <div className="p-6">
        {/* Título con # de markdown */}
        <h1 className="text-2xl font-bold mb-6 text-[#4ec9b0] font-mono">
          # {t.titulo}
        </h1>
        
        {/* Texto con saltos de línea como en markdown */}
        <pre className="whitespace-pre-wrap text-base text-[#d4d4d4] font-mono leading-relaxed">
{t.texto}
        </pre>
      </div>
    </div>
  );
};

export default ContenidoReadme;
