import { Component } from "react";
import React from "react";

class Acerca extends Component {
  render() {
    //render: Porque es una clase y va a tener más de un componente
    return (
      <div className="App-header">
        <p>
          Educativamente Sano es un aplicativo que permite al usuario con base a
          la problemática que se está viviendo alrededor del la pandemia del
          coronavirus; estar en función de tener los cuidados necesarios para
          prevenir esta enfermedad, además de mantenerlos informados sobre lo
          que esta pasando actualmente sobre el COVID-19.
        </p>
      </div>
    );
  } //fin render
} //fin de la clase
export default Acerca;
