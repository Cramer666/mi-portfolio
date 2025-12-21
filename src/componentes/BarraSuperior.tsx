import React, { useState } from 'react';
import { Code, Sun, Moon, Menu, X, Volume2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import BotonIdioma from './BotonIdioma';

interface Props {
  menuAbierto?: boolean;
  setMenuAbierto?: (abierto: boolean) => void;
}

const BarraSuperior: React.FC<Props> = ({ menuAbierto = false, setMenuAbierto }) => {
  const { theme, toggleTheme } = useTheme();
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
    <div
      className="
        h-12 flex items-center px-4
        border-b
        bg-gray-200 dark:bg-[#323233]
        border-gray-300 dark:border-gray-800
      "
    >
      <div className="flex items-center gap-2">
        <Code className="text-blue-400" size={20} />
        <span className="font-semibold text-sm sm:text-base text-black dark:text-white">
          Portfolio Lucia Perrone
        </span>
      </div>
      <div className="ml-auto flex items-center gap-2">
        {setMenuAbierto && (
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            title="Explorador de archivos"
          >
            {menuAbierto ? (
              <X size={18} className="text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu size={18} className="text-gray-700 dark:text-gray-300" />
            )}
          </button>
        )}
        <BotonIdioma />
        <button
          onClick={toggleLectura}
          className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          title={leyendo ? 'Detener lectura' : 'Activar lectura de voz'}
        >
          <Volume2 
            size={18} 
            className={leyendo ? 'text-green-500 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'} 
          />
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          title="Cambiar tema"
        >
          {theme === 'dark' ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} className="text-gray-700" />
          )}
        </button>
      </div>
    </div>
  );
};

export default BarraSuperior;
