import React, { useState } from "react";
import "./Home.css";
import Jumbotrom from "../jumbotrom/Jumbotrom";
import Servicios from "../servicios/Servicios";
import Opcion from "../opciones/Opcion";
import Slider from "../slider/Slider";
import { listService, reparaciones } from "../listaImagenes/ListaImagenes";

function Home() {

  return (
    <div className="home_contenedor container">
      <div className="container">
        <Jumbotrom />
      </div>
      <br />
      <hr />
      <br />
      <br />
      <div className="container">
        {
          reparaciones.map((res, index)=>{
            return<Opcion key={index} informacion={res}/>
          })
        }  
      </div>
      <br />
      <hr />
      <br />
      <br />
      <div className="container d-flex flex-wrap justify-content-evenly gap-4">
       {
        listService.map((res,index)=>{
          return<Servicios key={index} info={res} />
        })
       }        
      </div>
      <br />
      <hr />
      <br />
      <br />
      <div className="container">
        <Slider />
      </div>
      <br />
      <hr />
      <br />
      <br />
    </div>
  );
}

export default Home;
