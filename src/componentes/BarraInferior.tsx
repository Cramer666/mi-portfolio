import React from 'react';

const BarraInferior: React.FC = () => {
  return (
    <div className="h-8 flex items-center px-4 border-t text-xs bg-[#007ACC] border-gray-800 text-white">
      <span>✓ Portfolio casi listo para producción</span>
      <span className="ml-auto">Lucia Perrone • Argentina</span>
    </div>
  );
};

export default BarraInferior;