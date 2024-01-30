import React from 'react';
import '../hoja-de-estilos/card.css';
import { BsArrowRightCircleFill } from "react-icons/bs";
import 'google-fonts';

const Card = ({ titulo, descripcion, siguientePaso, imagen }) => {
  return (
    <div className="card mb-1">
      <img src={require(`../imagenes/img-${imagen}.svg`)} className="card-img-top" alt="imagen" />
      <div className="card-header">{titulo}</div>
        <div className="card-body text-black">
          <p className="card-text">{descripcion}</p>
          <div className="avanzar-retroceder" onClick={siguientePaso}><BsArrowRightCircleFill className='boton-avanzar' /></div>
        </div>
    </div>
    );
  };

  

  export default Card;