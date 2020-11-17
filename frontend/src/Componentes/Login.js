import { Component } from "react";
import React from "react";

class Login extends Component {
  render() {
    //render: Porque es una clase y va a tener más de un componente
    return (
      <div className="App-header">
        <div class="contenedor">
          <form>
            <div className="form-group">
              <center>
                <label>Usuario</label>
              </center>
              <input
                type="text"
                name="User"
                className="form-control"
                placeholder="Su usuario"
              />
              <center>
                <label>Contraseña</label>
              </center>
              <input
                type="password"
                name="Su clave"
                className="form-control"
                placeholder="Ingrese su contraseña"
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

export default Login;
