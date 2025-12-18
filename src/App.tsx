import React, { useState } from 'react';
import { useTheme } from './hook/useTheme';
import BarraSuperior from './componentes/BarraSuperior';
import BarraLateral from './componentes/BarraLateral';
import ExploradorArchivos from './componentes/ExploradorArchivos';
import BarraPestanas from './componentes/BarraPestanas';
import BarraInferior from './componentes/BarraInferior';
import ContenidoInicio from './secciones/ContenidoInicio';
import ContenidoSobreMi from './secciones/ContenidoSobreMi';
import ContenidoProyectos from './secciones/ContenidoProyectos';
import ContenidoHabilidades from './secciones/ContenidoHabilidades';
import ContenidoContacto from './secciones/ContenidoContacto';

const App: React.FC = () => {
  const { isDark } = useTheme();
  const [archivoAbierto, setArchivoAbierto] = useState('inicio.jsx');

  const renderContenido = () => {
    switch(archivoAbierto) {
      case 'inicio.jsx':
        return <ContenidoInicio />;
      case 'sobre-mi.jsx':
        return <ContenidoSobreMi />;
      case 'proyectos.jsx':
        return <ContenidoProyectos />;
      case 'habilidades.jsx':
        return <ContenidoHabilidades />;
      case 'contacto.jsx':
        return <ContenidoContacto />;
      default:
        return <ContenidoInicio />;
    }
  };

  return (
    <div className={`h-screen flex flex-col font-mono transition-colors ${
      isDark
        ? 'bg-[#1e1e1e] text-gray-300'
        : 'bg-white text-gray-800'
    }`}>
      <BarraSuperior />
     
      <div className="flex flex-1 overflow-hidden">
        <BarraLateral />
        <ExploradorArchivos
          archivoAbierto={archivoAbierto}
          setArchivoAbierto={setArchivoAbierto}
        />
       
        <div className="flex-1 flex flex-col overflow-hidden">
          <BarraPestanas
            archivoAbierto={archivoAbierto}
            setArchivoAbierto={setArchivoAbierto}
          />
         
          <div className={`flex-1 overflow-y-auto transition-colors ${
            isDark ? 'bg-[#1e1e1e]' : 'bg-gray-50'
          }`}>
            {renderContenido()}
          </div>
         
          <BarraInferior />
        </div>
      </div>
    </div>
  );
};

export default App;