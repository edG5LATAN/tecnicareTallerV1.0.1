import React from "react";
import "./Servicios.css";

function Servicios({info}) {
  return (
    <div>
      <div class="servicio_card card">
        <img
          src={info.imagen}
          class="card-img-top"
          alt="cargando imagen"
        />
        <div class="card-body servicio_card_info">
          <p class="card-text">
            {
              info.detalle
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
