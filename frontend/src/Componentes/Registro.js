import { Component } from "react";
import React from "react";

class Registro extends Component {
  render() {
    //render: Porque es una clase y va a tener más de un componente
    return (
      <div className="App-header">
        <div className="contenedor">
          <form>
            <div className="form-group">
              <label>Usuario</label>
              <input
                type="text"
                name="User"
                className="form-control"
                placeholder="Ingrese su usuario"
              />
              <label>Contraseña</label>
              <input
                type="password"
                name="Su clave"
                className="form-control"
                placeholder="Ingrese su contraseña"
              />
              <label>Correo electrónico</label>
              <input
                type="email"
                name="Correo"
                className="form-control"
                placeholder="Ingrese su correo electrónico"
              />
            </div>
            <div className="form-group">
              <button type="Submit" className="btn-success">
                Ingresar
              </button>
              <button type="reset" className="btn-info">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } //fin render
} //fin de la clase
export default Registro;
