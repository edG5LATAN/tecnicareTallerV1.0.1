import React from "react";
import "./Formulario.css";

function Formulario() {
  return (
    <div className="formulario_contenedor">
      <h2 className="text-center mb-3">Agregar nueva cita</h2>
      <h5 className="text-primary-emphasis fw-bold">Cliente</h5>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="nombre"
          placeholder="ingrese un nombre"
        />
        <label for="nombre">Nombre</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="telefono"
          placeholder="ingrese un telefono"
        />
        <label for="telefono">Telefono</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="direccion"
          placeholder="ingrese una direccion"
        />
        <label for="direccion">Direccion</label>
      </div>

      <h5 className="text-primary-emphasis fw-bold">Telefono</h5>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="marca"
          placeholder="marca de telefono"
        />
        <label for="marca">marca</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="modelo"
          placeholder="marca de modelo"
        />
        <label for="modelo">modelo</label>
      </div>
      <div class="form-floating mb-3 ">
        <input
          type="text"
          class="form-control"
          id="falla"
          placeholder="falla de telefono"
        />
        <label for="falla">falla</label>
      </div>
      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          placeholder="agregar observaciones"
          id="observaciones"
        ></textarea>
        <label for="observaciones">Obervaciones</label>
      </div>
      <a href="#" className="btn bg-info-subtle" >
        Agregar
      </a>
    </div>
  );
}

export default Formulario;
