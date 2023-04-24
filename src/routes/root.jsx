import {useState} from 'react';
import {Outlet} from "react-router-dom";

import AppBar from '../components/appBar';

export default function Root() {
  const [title, setTitle] = useState("Welcome to the Imperial Assault Companion");

  return (
    <>
      <AppBar title={title} />
      <div className="App" id="terminal">
        <Outlet />
      </div>
    </>
  );
}
