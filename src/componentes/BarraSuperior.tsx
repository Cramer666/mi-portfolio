import React from 'react';
import { Code } from 'lucide-react';

const BarraSuperior: React.FC = () => {
  return (
    <div className="bg-[#323233] h-12 flex items-center px-4 border-b border-gray-800">
      <div className="flex items-center gap-2">
        <Code className="text-blue-400" size={24} />
        <span className="text-white font-semibold">Portfolio Lucia Perrone</span>
      </div>
    </div>
  );
};

export default BarraSuperior;