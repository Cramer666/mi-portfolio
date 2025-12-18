import React from 'react';
import { Code, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hook/useTheme';

const BarraSuperior: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="bg-[#323233] h-12 flex items-center justify-between px-4 border-b border-gray-800">
      <div className="flex items-center gap-2">
        <Code className="text-blue-400" size={24} />
        <span className="text-white font-semibold">Portfolio Lucia Perrone</span>
      </div>
      
      <button
        onClick={toggleTheme}
        className="p-2 rounded hover:bg-gray-700 transition text-gray-300 hover:text-white"
        title={isDark ? 'Modo claro' : 'Modo oscuro'}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default BarraSuperior;