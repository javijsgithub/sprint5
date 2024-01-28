import React from 'react';
import '../hoja-de-estilos/card.css';

const Card = ({ titulo, descripcion }) => {
  return (
    <div className="card border-primary mb-3">
      <div className="card-header">{titulo}</div>
        <div className="card-body text-primary">
          <p className="card-text">{descripcion}</p>
        </div>
    </div>
    );
  };

  export default Card;