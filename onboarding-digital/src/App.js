import React, { useState } from 'react';
import './App.css';
import Card from './componentes/card';

function App() {
 
  const [primerPaso, setPrimerPaso] = useState(0);

  const tutorialData = [
    {
      img: 'time_managment',
      tit: 'Dedica muchas horas',
      desc: 'Un minimo de 30 horas a la semana. Si no tienes suficiente, tendras que dedicarle mas horas. Al pricipio parece imposible, pero notaras una mejora rapidamente.'
    },
    {
      img: 'programming',
      tit: 'Programa proyectos propios',
      desc: 'Mas vale 10 horas trabajando en proyectos propios, que 10 horas mirando tutoriales. La motivación y la implicación en el proyecto ayudara a acelerar tu aprendizaje.'
    },
    {
      img: 'meditation',
      tit: 'Procura descansar',
      desc: 'Descansar bien y desconectar son vitales. De esta manera reduciras el estres y la ansiedad. Mejoraras tu concentracion y consolidaras tu aprendizaje.'
    }
  ];

  const sigPaso = () => {
    setPrimerPaso(primerPaso + 1);
  };

  const pasoAnt = () => {
    setPrimerPaso(primerPaso - 1);
  };

return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <Card
            imagen={tutorialData[primerPaso].img} 
            titulo={tutorialData[primerPaso].tit}
            descripcion={tutorialData[primerPaso].desc}
            siguientePaso={sigPaso} 
            pasoAnterior={pasoAnt}
            paso={primerPaso}
            totalPasos={tutorialData.length}
          />
          
        </div>
      </div>
    </div>
  );
};

export default App;
