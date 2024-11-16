import React from "react";
import "./Agendar.css";
import Formulario from "../formulario/Formulario";
import Tabla from "../tabla/Tabla";
import Informacion from "../informacion/Informacion";

function Agendar() {
  return (
    <div className="container">
      <br />
      <br />
      <div className="d-flex col-12 ">
        <div className="col-3 agendar_informacion">
          <Informacion />
        </div>
        <div className="col-9 d-flex justify-content-center">
          <Formulario />
        </div>
      </div>

      <br />
      <br />
      <hr />
      <br />
      <br />
      <div>
        <Tabla />
      </div>
      <br />
      <br />
    </div>
  );
}

export default Agendar;
