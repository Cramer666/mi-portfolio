import React from 'react';
import { FileText, Folder, Code } from 'lucide-react';

const BarraLateral: React.FC = () => {
  return (
    <div className="hidden md:flex w-12 flex-col items-center py-4 gap-4 border-r
      bg-gray-200 dark:bg-[#333333]
      border-gray-300 dark:border-gray-800"
    >
      <FileText className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition" />
      <Folder className="text-gray-400 hover:text-white cursor-pointer transition" size={24} />
      <Code className="text-blue-400" size={24} />
    </div>
  );
};

export default BarraLateral;
