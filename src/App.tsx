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
    <div
      className="
        h-screen flex flex-col font-mono
        bg-[#f3f2ef] text-gray-800
        dark:bg-[#1e1e1e] dark:text-gray-300
      "
    >
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

          {/* ESTE ES EL FONDO DE CADA SECCIÓN */}
          <div
            className="
              flex-1 overflow-y-auto
              bg-[#f3f2ef]
              dark:bg-[#1e1e1e]
            "
          >
            {renderContenido()}
          </div>

          <BarraInferior />
        </div>
      </div>
    </div>
  );
};

export default App;
