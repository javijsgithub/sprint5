import React from 'react';
import '../hoja-de-estilos/card.css';

const Card = ({ titulo, descripcion, siguientePaso }) => {
  return (
    <div className="card border-primary mb-3">
      <div className="card-header">{titulo}</div>
        <div className="card-body text-primary">
          <p className="card-text">{descripcion}</p>
          <button className="btn btn-primary" onClick={siguientePaso}>Siguiente</button>
        </div>
    </div>
    );
  };

  export default Card;