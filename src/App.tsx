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
import ContenidoReadme from './secciones/ContenidoReadme';

const App: React.FC = () => {
  const [archivoAbierto, setArchivoAbierto] = useState('README.md');
  const [pestanasAbiertas, setPestanasAbiertas] = useState(['README.md']);
  const [menuExploradorAbierto, setMenuExploradorAbierto] = useState(false);

  const renderContenido = () => {
    // Si no hay pestañas abiertas, mostrar pantalla vacía
    if (pestanasAbiertas.length === 0) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-400 dark:text-gray-600 text-lg">
            Abrí un archivo desde el explorador
          </p>
        </div>
      );
    }

    switch (archivoAbierto) {
      case 'README.md':
        return <ContenidoReadme />;
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
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400 dark:text-gray-600 text-lg">
              Abrí un archivo desde el explorador
            </p>
          </div>
        );
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
      <BarraSuperior 
        menuAbierto={menuExploradorAbierto}
        setMenuAbierto={setMenuExploradorAbierto}
      />

      <div className="flex flex-1 overflow-hidden">
        <BarraLateral />

        <ExploradorArchivos
          archivoAbierto={archivoAbierto}
          setArchivoAbierto={setArchivoAbierto}
          pestanasAbiertas={pestanasAbiertas}
          setPestanasAbiertas={setPestanasAbiertas}
          menuAbierto={menuExploradorAbierto}
          setMenuAbierto={setMenuExploradorAbierto}
        />

        <div className="flex-1 flex flex-col overflow-hidden">
          <BarraPestanas
            archivoAbierto={archivoAbierto}
            setArchivoAbierto={setArchivoAbierto}
            pestanasAbiertas={pestanasAbiertas}
            setPestanasAbiertas={setPestanasAbiertas}
          />

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