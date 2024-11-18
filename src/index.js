import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/encabezado';
import Informacion from './components/informacion';
import Tablero from './components/tablero';
import reportWebVitals from './reportWebVitals';
import Cartas from './components/cartas'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='header'>
      <Header />
    </div>
    <div className='main'>
      <Informacion />
      <Tablero />
      <Cartas />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
