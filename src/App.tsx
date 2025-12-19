import React, { useState } from 'react';
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
  const [archivoAbierto, setArchivoAbierto] = useState('inicio.jsx');

  const renderContenido = () => {
    switch (archivoAbierto) {
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
    <div className="min-h-screen w-full bg-[#1e1e1e] text-gray-300 flex flex-col font-mono">
      {/* Barra superior */}
      <BarraSuperior />

      {/* Cuerpo principal */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Barra lateral fija */}
        <BarraLateral />

        {/* Explorador de archivos */}
        <ExploradorArchivos
          archivoAbierto={archivoAbierto}
          setArchivoAbierto={setArchivoAbierto}
        />

        {/* Área central */}
        <div className="flex flex-1 flex-col min-h-0 overflow-hidden">
          {/* Pestañas */}
          <BarraPestanas
            archivoAbierto={archivoAbierto}
            setArchivoAbierto={setArchivoAbierto}
          />

          {/* Contenido (ACÁ estaba el problema del fondo) */}
          <div className="flex-1 min-h-0 overflow-y-auto bg-[#1e1e1e]">
            <div className="min-h-full w-full">
              {renderContenido()}
            </div>
          </div>

          {/* Barra inferior */}
          <BarraInferior />
        </div>
      </div>
    </div>
  );
};

export default App;
