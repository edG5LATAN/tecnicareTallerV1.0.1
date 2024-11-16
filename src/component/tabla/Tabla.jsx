import React from "react";
import "./Tabla.css";

function Tabla() {
  return (
    <div className="mt-3 mb-3">
        <h2 className="text-center">Lista de agenda para Reparacion</h2>
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Modelo</th>
            <th scope="col">Falla</th>
            <th scope="col">Reparacion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Juan Marcos</td>
            <td>s21</td>
            <td>no enciende</td>
            <td>cambio de flex</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mirian Acosta</td>
            <td>y9Prime</td>
            <td>cambio de lcd</td>
            <td>se cambio lcd</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Elisabeth Ruiz</td>
            <td>motoPlus</td>
            <td>no escucha</td>
            <td>cambio de mic</td>
          </tr>          
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
