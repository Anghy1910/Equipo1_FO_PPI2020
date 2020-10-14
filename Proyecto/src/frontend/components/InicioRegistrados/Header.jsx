import React from "react";
import TituloPrincipal from "../Generales/TituloPrincipal";
import TituloSecundario from "../Generales/TituloSecundario";
import "../../styles/InicioRegistrados/Header.css";
import "../../styles/Generales/tipografias.css";
import ConocerEmociones from "../../images/ConocerLasPropiasEmociones.png";
import ManejarEmociones from "../../images/ManejarLasemociones.png";
import MotivacionPropia from "../../images/MotivaciónPropia.png";
import ReconocerEmocionesOtros from "../../images/ReconocerEmocionesDeLosDemas.png";
import ManejarRelaciones from "../../images/ManejarLasRelaciones.png";

class Header extends React.Component {
    render() {
        return (
            <body>
                <TituloPrincipal TituloPrincipal="Bienvenida Anghy" />
                <TituloSecundario Class="TituloSecundario" TituloSecundario="Tipos de Inteligencia Emocional"/>
                <div className="container row col-md">
                    <div className="card">
                        <div className="imgBx">
                            <img src={ConocerEmociones} />
                        </div>
                        <div className="content">
                            <TituloSecundario Class="TituloSecundario" TituloSecundario="Conocer las Emociones"/>
                            <p>La conciencia de uno mismo es la capacidad de controlar sentimientos de un momento a otro, siendo  fundamental para el auto conocimiento.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgBx">
                            <img src={ManejarEmociones} />
                        </div>
                        <div className="content">
                        <TituloSecundario Class="TituloSecundario" TituloSecundario="Manejar las Emociones"/>
                            <p>La capacidad de manejar sentimientos de forma adecuada; es una capacidad que se basa en la auto conciencia y el auto control.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="imgBx">
                            <img src={MotivacionPropia} />
                        </div>
                        <div className="content">
                        <TituloSecundario Class="TituloSecundario" TituloSecundario="La motivación propia"/>
                            <p>Es una habilidad para ordenar las emociones al servicio de un objetivo esencial: es lo que se conoce como auto motivación.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <img src={ReconocerEmocionesOtros} />
                        </div>
                        <div className="content">
                            <TituloSecundario Class="TituloSecundario" TituloSecundario="Reconocer las emociones de los demás"/>
                            <p>Se trata de la empatía o auto conciencia de las emociones de los otros.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <img src={ManejarRelaciones} />
                        </div>
                        <div className="content">
                            <TituloSecundario Class="TituloSecundario" TituloSecundario="Manejar las relaciones"/>
                            <p>Es la adecuación a nuestro ser social y parte esencial del desarrollo con los demás.</p>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}
export default Header;
