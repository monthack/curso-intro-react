import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';

/** 
 * React render es un point de entrada de la aplicación
 */
ReactDOM.render(
  <React.StrictMode>
  {/* Son propiedades */}
    {/* <App saludo="Holi Montse" /> */}

  {/* propiedad children */}
    {/* <App>
      Buenas tardes
    </App> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
