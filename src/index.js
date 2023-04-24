import React from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Root from "./routes/root";
import Home from "./routes/home";
import NewGame from "./routes/new-game";

import './index.css';
//import App from './App';

// const HEROES = [
//   {id: "jyn_odan", name: "Jyn Odan", health: {current: 10, max: 10}, defense: ["white"]},
//   {id: "verena_talos", name: "Verena Talos", health: {current: 10, max: 12}, defense: ["white"]},
//   {id: "galen_erso", name: "Galen Erso", health: {current: 10, max: 10}, defense: ["black"]}
// ];

const savedGames = JSON.parse(localStorage.getItem("savedGames") || '{"Test_1": {"teamName": "Test 1"}}');
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home savedGames={savedGames} />
      },
      {
        path: "new_game",
        element: <NewGame />
      }
    ]
  },
  // {
  //   "path": "/new_game",
  //   element: <
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
