import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PagInicio from "./PagInicio";
import Login from "./Componentes/Login";
import Registro from "./Componentes/Registro";
import Acerca from "./Componentes/Acerca";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PagInicio} />
        <Route exact path="/iniciosesion" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/acercade" component={Acerca} />
      </Switch>
    </Router>
  );
}
