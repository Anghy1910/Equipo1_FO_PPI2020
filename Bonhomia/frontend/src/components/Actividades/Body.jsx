import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Actividades/Body.css';
import TituloPrincipal from '../Generales/TituloPrincipal';
import CardForm2 from '../Generales/CardForm2';
import ConocerEmociones from '../../images/ConocerLasEmociones.png'
import Reconocemocionesotros from '../../images/EmocionesDeLosDemas.png'
import ManejarRelaciones from '../../images/ManejarRelaciones.png'
import ManejarEmociones from '../../images/ManejarEmociones.png'
import MotivaciónPropia from '../../images/LaMotivaciónPropia.png';

class Actividades extends React.Component{
    render(){
        return(
            <body>
            <TituloPrincipal TituloPrincipal='Bienvenida a Actividades, Anghy' />   
                <main >   
                    <div className="row col-sm justify-content-center">
                    <Link to="/bonhomia/actividades/conoceremociones"><CardForm2 Class='card__Act0 card__B img_Actividad card-deck' Image={ConocerEmociones} Clase__1="cardAct1 cardAct" CardName='Conocer tus emociones' /></Link>
                    <Link to="/bonhomia/actividades/emocionesdemas"><CardForm2 Class='card__Act2 card__B cardActD img_Actividad card-deck' Image={Reconocemocionesotros} Clase__1="cardAct1 cardAct" CardName=' Reconocer las Emociones de otros' /></Link>
                    <Link to="/bonhomia/actividades/manejaremociones"><CardForm2 Class='card__Act3 card__B img_Actividad card-deck' Image={ManejarEmociones} Clase__1="cardAct1 cardAct" CardName='Manejar las emociones' /></Link>
                    <Link to="/bonhomia/actividades/manejarrelaciones"><CardForm2 Class='card__Act4 card__A img_Actividad card-deck' Image={ManejarRelaciones} Clase__1="cardAct1 cardAct" CardName='Manejar Las relaciones' /></Link>
                    <Link to="/bonhomia/actividades/motivacionpropia"><CardForm2 Class='card__Act2 card__A cardActD img_Actividad card-deck' Image={MotivaciónPropia} Clase__1="cardAct1 cardAct" CardName='Motivación Propia' /></Link>
                    </div>    
                </main>
            </body>
        )
    }
}
export default Actividades;