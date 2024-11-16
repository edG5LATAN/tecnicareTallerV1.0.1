import React from "react";
import "./Contactanos.css";

function Contactanos() {
  return (
    <div className="contactanos_contenedor d-flex justify-content-between bg-success-subtle">
      <div className="contactanos1 contactanos_card">
        <h4>Informacion</h4>
        <a href="#">Pagina de referncia</a>
        <a href="#">informacion varias</a>
        <a href="#">politicas</a>
        <a href="#">cokies de pagina</a>
        <a href="#">Ubicanos</a>
      </div>
      <div className="contactanos2 contactanos_card">
        <h3 className="text-center fw-bold">Contactanos</h3>
        <div class="mb-2">
          <label for="nombre" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            placeholder="Ingrese nombre"
          />
        </div>
        <div class="mb-2">
          <label for="cuerpo" class="form-label">
            Detalles
          </label>
          <input
            type="text"
            class="form-control"
            id="cuerpo"
            placeholder="Ingrese detalles"
          />
        </div>
        <div class="mb-2">
          <label for="correo" class="form-label">
            Correo
          </label>
          <input
            type="email"
            class="form-control"
            id="correo"
            placeholder="ingrese correo"
          />
        </div>
        <div class="mb-2">
          <a className="btn bg-success text-black" href="">Enviar Msj</a>
        </div>
      </div>
      <div className="contactanos3 contactanos_card">
        <i class="bi bi-facebook contactanos_icon1"></i>
        <i class="bi bi-instagram contactanos_icon2"></i>
        <i class="bi bi-whatsapp contactanos_icon3"></i>
      </div>
    </div>
  );
}

export default Contactanos;
