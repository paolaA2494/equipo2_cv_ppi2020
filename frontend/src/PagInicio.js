import React from "react";
import logo from "./LogoEduSano.png.jpeg";
import "./App.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App-header">
      <div className="contenedor">
        <ul>
          <div class="item1" align="center">
            <Link to="/iniciosesion">Iniciar Sesion</Link>
          </div>
          <div class="item2" align="center">
            <Link to="/registro">Registrarse</Link>
          </div>
          <div class="item3" align="center">
            <Link to="/acercade">Acerca De</Link>
          </div>
          <div align="center">
            <img src={logo} />
          </div>
        </ul>
      </div>
    </div>
  );
}
