import React from 'react';
import {Link} from 'react-router-dom';
import '../../../styles/Actividades/ConocerEmociones/Body.css';
import CardForm from '../../Generales/CardForm';
import TituloSecundario from '../../Generales/TituloSecundario'
import TituloPrincipal from '../../Generales/TituloPrincipal';
import ActRelajacion from '../../../images/ActRelajacion.png';
import ActEscritura from '../../../images/ActEscribir.png';
import ActTest from '../../../images/ActTest.png';


class ConocerEmocionesActividades extends React.Component{
    render(){
        return(
            <body>
                <TituloPrincipal className="TituloPrincipal" TituloPrincipal='Hola Anghy, hoy trabajarás en conocer tus emociones' /> 

                <div className="card-deck">
                <CardForm url={ActRelajacion} Class="img_conoceremociones" cardTitle='Relaja tu mente' cardText='Tipo: Relajación'/>
                <Link to="/bonhomia/actdiario"><CardForm url={ActEscritura} Class="img_conoceremociones imgActEscritura" cardTitle='Escribe sobre tus emociones' cardText='Tipo: Escritura'/></Link>
                <CardForm url={ActTest} Class="img_conoceremociones" cardTitle='Preguntas de emociones' cardText='Tipo: Test'/>
                </div>
                
                <TituloSecundario Class="TituloSecundario" TituloSecundario='"Cuida tus propias emociones y nunca las subestimes" -Robert Henri' />       
            </body>
        )
    }
}
export default ConocerEmocionesActividades;