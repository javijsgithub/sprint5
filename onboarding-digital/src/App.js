import React, { useState } from 'react';
import './App.css';
import Card from './componentes/card';

function App() {
 
  const [primerPaso, setPrimerPaso] = useState(0);

  const tutorialData = [
    {
      tit: 'Dedica muchas horas',
      desc: 'Un minimo de 30 horas a la semana. Si no tienes suficiente, tendras que dedicarle mas horas. Al pricipio parece imposible, pero notaras una mejora rapidamente.'
    },
  ];

return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card 
            titulo={tutorialData[primerPaso].tit}
            descripcion={tutorialData[primerPaso].desc} 
          />
        </div>
      </div>
    </div>
  );
};

export default App;
