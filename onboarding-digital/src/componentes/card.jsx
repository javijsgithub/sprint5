import React from 'react';
import '../hoja-de-estilos/card.css';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import 'google-fonts';
import Indicator from '../componentes/indicator';

const Card = ({ titulo, descripcion, siguientePaso, pasoAnterior, totalPasos, paso, imagen }) => {
  
  return (
    <div className="card mb-1">
      <img src={require(`../imagenes/img-${imagen}.svg`)} className="card-img-top" alt="imagen" />
      <div className="card-header">{titulo}
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
              <div className="avanzar-1" onClick={siguientePaso}><BsArrowRightCircleFill className='boton-avanzar' /></div>
            )}

            {paso > 0 && paso < totalPasos - 1 && (
            <>          
              <div className="retroceder" onClick={pasoAnterior}><BsArrowLeftCircle className='boton-retroceder' /></div>
              <div className="avanzar" onClick={siguientePaso}><BsArrowRightCircleFill className='boton-avanzar' /></div>
            </>
            )}
            {paso === totalPasos - 1 && (
              <div className="retroceder-1" onClick={pasoAnterior}><BsArrowLeftCircle className='boton-retroceder' /></div>
            )}                  
          </div>
    </div>
  );
};

  export default Card;