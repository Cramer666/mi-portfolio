import React from 'react';
import { useTheme } from '../context/ThemeContext';

const BarraInferior: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className={`h-8 flex items-center px-4 border-t text-xs transition-colors ${
      isDark
        ? 'bg-[#007ACC] border-gray-800 text-white'
        : 'bg-blue-500 border-gray-300 text-white'
    }`}>
      <span>✓ Portfolio listo para producción</span>
      <span className="ml-auto">Lucia Perrone • Argentina</span>
    </div>
  );
};

export default BarraInferior;