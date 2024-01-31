import React from 'react';
import '../hoja-de-estilos/card.css';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import 'google-fonts';
import Indicator from '../componentes/indicator';

const Card = ({ titulo, descripcion, siguientePaso, pasoAnterior, totalPasos, paso, imagen }) => {

  const colorFondoImagenCard = (paso) => {

    if (paso === 0) {
      return "rgb(3, 97, 97)";
    } else if (paso === 1) {
      return "rgb(187, 184, 184)";
    } else if (paso === 2) {
      return "rgb(233, 177, 73)";
    } 
  };

  return (
    <div className="card mb-1">
      <div className={'imagenes'} style={{backgroundColor: colorFondoImagenCard(paso)}}>
        <img src={require(`../imagenes/img-${imagen}.svg`)} className="card-img-top" alt="imagen" />
      </div>
      <div className='card-header'>{titulo}
      </div>
      <div className='card-text'>
        <p className="text">{descripcion}</p>
      </div> 

          <div className="botones">

            <Indicator 
              totPasos={totalPasos}
              pasoAct={paso}
              antPaso={pasoAnterior}
              pasoSig={siguientePaso}
            />

            {paso === 0 && (
              <div className="avanzar-c1" onClick={siguientePaso}><BsArrowRightCircleFill className='boton-avanzar' /></div>
            )}

            {paso > 0 && paso < totalPasos - 1 && (
            <>          
              <div className="retroceder-c2" onClick={pasoAnterior}><BsArrowLeftCircle className='boton-retroceder' /></div>
              <div className="avanzar-c2" onClick={siguientePaso}><BsArrowRightCircleFill className='boton-avanzar' /></div>
            </>
            )}
            {paso === totalPasos - 1 && (
              <div className="retroceder-c3" onClick={pasoAnterior}><BsArrowLeftCircle className='boton-retroceder' /></div>
            )}                  
          </div>
    </div>
  );
};

  export default Card;

  