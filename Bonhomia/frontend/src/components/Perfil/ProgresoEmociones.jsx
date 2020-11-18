import React from "react";
import TituloSecundario from "../Generales/TituloSecundario";
import CardForm2 from "../Generales/xy";
import "../../styles/Perfil/PerfilActividades.css";
import "../../styles/Generales/tipografias.css";
import feliz from "../../images/happy.png";
import gracioso from "../../images/hi.png";
import sonrojado from "../../images/good.png";
import enamorado from "../../images/sleeping.png";
import enfermo from "../../images/sick.png";
import decepcionado from "../../images/disappointed.png";
import deprimido from "../../images/shocked.png";
import triste from "../../images/sad.png";
import enojado from "../../images/bad.png";
import ira from "../../images/angry.png";

class ProgresoEmociones extends React.Component {
    render() {
        return (
            <body>
                <main>
                    <TituloSecundario Class="TituloSecundario" TituloSecundario="Progreso Emociones"/>
                    <div className="row col-sm justify-content-center">
                        <CardForm2 Class="card-deck cardprogresoact" Image={feliz} Clase__1="cardperfilact imgemociones1" CardName="Conocer tus emociones"/>
                        <CardForm2 Class="card-deck cardprogresoact" Image={gracioso} Clase__1="cardperfilact imgemociones1" CardName=" Reconocer las Emociones de otros"/>
                        <CardForm2  Class="card-deck cardprogresoact" Image={sonrojado} Clase__1="cardperfilactAct imgemociones1 imgemociones2"CardName="Manejar las emociones"/>
                        <CardForm2 Class="card-deck cardprogresoact" Image={enamorado} Clase__1="cardperfilact imgemociones1"CardName="Manejar Las relaciones"/>
                        <CardForm2 Class="card-deck cardprogresoact" Image={enfermo} Clase__1="cardperfilact imgemociones1" CardName="Motivación Propia"/>
                    </div>
                    <div className="row col-sm justify-content-center">
                        <CardForm2 Class="card-deck cardprogresoact" Image={decepcionado} Clase__1="cardperfilact imgemociones1" CardName="Conocer tus emociones"/>
                        <CardForm2 Class="card-deck cardprogresoact" Image={triste} Clase__1="cardperfilact imgemociones1" CardName=" Reconocer las Emociones de otros"/>
                        <CardForm2 Class="card-deck cardprogresoact" Image={deprimido} Clase__1="cardperfilact imgemociones1" CardName="Manejar las emociones"/>
                        <CardForm2 Class="card-deck cardprogresoact" Image={enojado} Clase__1="cardperfilact imgemociones1" CardName="Manejar Las relaciones"/>
                        <CardForm2 Class="card-deck cardprogresoact cardprogresoact" Image={ira} Clase__1="cardperfilact imgemociones1" CardName="Motivación Propia"/>
                    </div>
                </main>
            </body>
        );
    }
}
export default ProgresoEmociones;
