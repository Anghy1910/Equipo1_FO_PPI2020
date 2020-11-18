import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Generales/tipografias.css';
import TituloPrincipal from '../Generales/TituloPrincipal';
import CardForm2 from '../Generales/CardForm2';
import FuncionTemporizador from './temporizador';

class Temporizador extends React.Component{
    render(){
        return(
            <body>
                <TituloPrincipal TituloPrincipal="Temporizador" />
                <div className="row justify-content-center mr-5">
                    <CardForm2 Clase__1="Card_Tempo" Image="https://media1.tenor.com/images/e020f1b5f0e69d7484b60ca2755bff80/tenor.gif?itemid=17280968" Clase__1="Tempo" CardName="Icono1"/>
                    <FuncionTemporizador defaultBreakLength='0' defaultSessionLength='0' src={FuncionTemporizador} alt='Temporizador' />
                </div>
            </body>
        )
    }
}
export default Temporizador;