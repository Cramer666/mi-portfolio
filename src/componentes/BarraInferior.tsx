import React from 'react';

const BarraInferior: React.FC = () => {
  return (
    <div className="bg-[#007acc] h-6 flex items-center px-4 text-white text-xs">
      <span>UTF-8</span>
      <span className="mx-4">•</span>
      <span>JavaScript React</span>
      <span className="mx-4">•</span>
      <span>Ln 1, Col 1</span>
    </div>
  );
};

export default BarraInferior;