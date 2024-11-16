import React, { useState } from 'react'
import './Slider.css'
import { imagenes } from '../listaImagenes/ListaImagenes';



function Slider() {

  const images=imagenes
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
      <div className="slider_container">
      <button className="slider_btn slider_prev-button " onClick={prevImage}>
        &#10094;
      </button>
      <div className="slider_slider">
        <img src={images[currentIndex]} alt={`slide-${currentIndex}`} />
      </div>
      <button className="slider_btn slider_next-button" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  )
} 

export default Slider
