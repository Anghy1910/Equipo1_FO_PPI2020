import React from "react";
import TituloSecundario from "../Generales/TituloSecundario";
import CardForm2 from '../Generales/xy';
import "../../styles/Perfil/PerfilActividades.css";
import "../../styles/Generales/tipografias.css";
import ConoceTusEmociones from "../../images/ConocerLasEmociones_.png";
import MotivaciónPropia from "../../images/LaMotivaciónPropia.png";
import EmocionesDeLosDemas from "../../images/EmocionesDeLosDemas.png";
import ManejarEmociones from "../../images/ManejarEmociones.png";
import ManejarRelaciones from "../../images/ManejarRelaciones.png";

class ProgresoActividad extends React.Component {
  render() {
    return (
      <body> 
          <main >
            <TituloSecundario Class="TituloSecundario" TituloSecundario="Progreso Actividades"/>
              <div className="row col-sm justify-content-center">
              <CardForm2 Class='card-deck cardprogresoact' Image={ConoceTusEmociones} Clase__1="cardperfilact imgperfil1 " CardName='Conocer tus emociones' />
              <CardForm2 Class='card-deck cardprogresoact' Image={EmocionesDeLosDemas} Clase__1="cardperfilact imgperfil2" CardName=' Reconocer las Emociones de otros' />
              <CardForm2 Class='card-deck cardprogresoact' Image={ManejarEmociones} Clase__1="cardperfilact imgperfil3" CardName='Manejar las emociones' />
              <CardForm2 Class='card-deck cardprogresoact' Image={ManejarRelaciones} Clase__1="cardperfilact imgperfil4" CardName='Manejar Las relaciones' />
              <CardForm2 Class='card-deck cardprogresoact' Image={MotivaciónPropia} Clase__1="cardperfilact imgperfil5" CardName='Motivación Propia' />
              </div>    
          </main>
      </body>
    );
  }
}
export default ProgresoActividad;
