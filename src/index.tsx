import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cities={cities}></App>
  </React.StrictMode>
);
