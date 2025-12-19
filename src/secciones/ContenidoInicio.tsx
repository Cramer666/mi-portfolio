import { Github, Linkedin } from 'lucide-react';

const ContenidoInicio: React.FC = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src="/foto-perfil.png"
            alt="Foto de Lucia Perrone"
            className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover shadow-lg"
          />

          <div className="flex-1">
            <div className="mb-6">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-300">desarrollador</span>{' '}
              <span className="text-white">=</span>{' '}
              <span className="text-yellow-300">{'{'}</span>
            </div>

            <div className="ml-8 space-y-2">
              <div>
                <span className="text-blue-300">nombre</span>: <span className="text-green-300">"Lucia Perrone"</span>,
              </div>
              <div>
                <span className="text-blue-300">titulo</span>: <span className="text-green-300">"Desarrolladora Full Stack Jr."</span>,
              </div>
              <div>
                <span className="text-blue-300">ubicacion</span>: <span className="text-green-300">"General Belgrano, Buenos Aires"</span>,
              </div>
              <div>
                <span className="text-blue-300">disponible</span>: <span className="text-purple-400">true</span>,
              </div>
            </div>

            <div className="mt-2">
              <span className="text-yellow-300">{'}'}</span>;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContenidoInicio;
