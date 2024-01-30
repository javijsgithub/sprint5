import React from 'react';
import { TiMinus } from "react-icons/ti";
import { VscCircleFilled } from "react-icons/vsc";
import '../hoja-de-estilos/indicator.css';

const Indicator = ({ pasoAct, totPasos, antPaso, pasoSig }) => {

  const pasoClick = (index) => {
    if (index < pasoAct) {
      antPaso();
    } else if (index > pasoAct) {
      pasoSig(index);
    }
  };
  
  return (

    <div className="indicadores">
      {Array.from({ length: totPasos }).map((_, index) => (
        <div key={index} className="icon-container" onClick={() => pasoClick(index)}>          
          {index === pasoAct && <TiMinus className="raya-icono" onClick={antPaso} />}
          {index !== pasoAct &&<VscCircleFilled className="circulo-icono" />}
        </div>
      ))}
    </div>
  );
};

export default Indicator;













