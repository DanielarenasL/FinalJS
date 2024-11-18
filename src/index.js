import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './encabezado';
import Informacion from './informacion';
import Tablero from './tablero';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='header'>
      <Header />
    </div>
    <div className='main'>
      <Informacion />
      <Tablero />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
