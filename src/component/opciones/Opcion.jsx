import React from "react";
import './Opcion.css'


function Opcion({informacion}) {
  return (
    <div class="opcion_contenedor container d-flex justify-content-center align-items-center">
      <div class="opcion_contenedor_fila row">
        <div class="col-lg-5">
          <img
            src={informacion.imagen}
            class="img-fluid rounded-start"
            alt="cargando img"
          />
        </div>
        <div class="d-flex justify-content-center align-items-center col-lg">
          <div class="card-body d-flex justify-content-center align-items-center flex-column">
            <h3 class="card-title mb-3 text-center">{informacion.titulo}</h3>
            <p class="card-text">
              {informacion.detalle}
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opcion;
