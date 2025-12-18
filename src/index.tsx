import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import { ThemeProvider } from './context/ThemeContext'; Envolver desp la app
import './estilos/globals.css';
import './estilos/animaciones.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);