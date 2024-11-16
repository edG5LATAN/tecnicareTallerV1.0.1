import React from "react";

function Informacion() {
  return (
    <div className="card p-2">
      <h4 className="text-center">Tips a conocer en reparaciones</h4>
      <h5>tip 1</h5>
      <p className="fs-6">
        para poder darle mayor informacion y agilidad a su dispositivo en
        nuestro taller nesecitamos sea claro y conciso en su direccion nombre y
        telefono para darle un mayor soporte.
      </p>
      <h5>tip 2</h5>
      <p className="fs-6">
        su telefono antes de su reparacion sera revisado y evaludao por el
        departamento tecnico segun su diagnostico sera el cobro de la reparacion
      </p>
      <h5>tip 3</h5>
      <p className="fs-6">
        si el cliente no autoriza la reparacion solo se cobrara la revision que tiene un costo minimo de 150Lps
      </p>
    </div>
  );
}

export default Informacion;
