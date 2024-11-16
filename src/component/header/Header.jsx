import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-success-subtle sticky-top">
      <div class="container-fluid ">
        <Link class="navbar-brand" to={'/'}>
          Inicio
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={'/cita'} class="nav-link " aria-current="page" >
                Agendar cita
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={'/ubicacion'}>
                Ubicacion
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Aserca de
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to={'./mision'}>
                    Mision
                  </Link>
                </li>
               
                <hr />{" "}
                <li>
                  <Link class="dropdown-item" to={'/aserca'}>
                    Aserca de
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled fst-italic text-primary" aria-disabled="true">
                EDTecnology.com
              </a>
            </li>
          </ul>
          <div className="header_contenedor_logo">
            <a href="#">
            <img
            className="header_contenedor_img_log"
            src="./img/logo.png"
            alt="imagen logo"
          />
          </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
