import {useState} from "react";
import axios from "axios";

import {Route, NavLink, HashRouter} from "react-router-dom";

import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import PlayGame from "./pages/PlayGame";

function App({game}) {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route path="/new_game" component={NewGame} />
      <Route path="/play_game/:gameId" component={PlayGame} />
    </HashRouter>
  );
}


export default App;
//{props.game.missions.splice(-1).name}
