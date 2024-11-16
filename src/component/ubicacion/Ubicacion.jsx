import React from "react";
import "./Ubicacion.css";

function Ubicacion() {
  return (
    <div className="ubicacion_contenedor container d-flex justify-content-center align-items-center ">
      <h3 className="fw-bold text-uppercase mt-3 mb-3">Ubicacion de tienda</h3>
      <p className="fs-4">
        Para poder visitarnos en nuestra tienda y dejar sus telefono para
        reparaciones actualizaciones puedes seguir el mapa para llegar de forma
        segura y rapida estamos abajo de emisoras unidas grupo televicentro.
      </p>
      <div className="ubicacion_mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1119.9333086843035!2d-87.18574893035331!3d14.082200330166216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2shn!4v1731731882511!5m2!1ses!2shn"
          width="100%"
          height="500"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1620.0229717987443!2d-87.18574893035331!3d14.082200330166216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2shn!4v1731732715638!5m2!1ses!2shn"
          width="100%"
          height="500"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
    </div>
  );
}

export default Ubicacion;
