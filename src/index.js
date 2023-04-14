import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const HEROES = [
  {id: "jyn_odan", name: "Jyn Odan", health: {current: 10, max: 10}, defense: ["white"]},
  {id: "verena_talos", name: "Verena Talos", health: {current: 10, max: 12}, defense: ["white"]},
  {id: "galen_erso", name: "Galen Erso", health: {current: 10, max: 10}, defense: ["black"]}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App heroes={HEROES}/>
  </React.StrictMode>
);
