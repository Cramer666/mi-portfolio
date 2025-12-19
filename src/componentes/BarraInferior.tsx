import React from 'react';

const BarraInferior: React.FC = () => {
  return (
    <div className="h-8 flex items-center px-2 sm:px-4 border-t text-xs bg-[#007ACC] border-gray-800 text-white">
      <span className="hidden sm:inline">
        ✓ Portfolio casi listo para producción
      </span>
      <span className="ml-auto">Lucia Perrone</span>
    </div>
  );
};

export default BarraInferior;
