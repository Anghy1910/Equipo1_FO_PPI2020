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
                
                <div className="card card__Header">
                <img src={ActEscritura} className="card-img-top img-fluid img_conoceremociones imgActEscritura"/>
                <div className="card-body">
                <Link to="/bonhomia/create"><h5 className="card-title Titulo">Escribe sobre tus emociones</h5></Link>
                    <p className="card-text Parrafo">Tipo: Escritura</p>
                </div>
            </div>

>>>>>>> Feature_Anghy
                <CardForm url={ActTest} Class="img_conoceremociones" cardTitle='Preguntas de emociones' cardText='Tipo: Test'/>
                </div>
                
                <TituloSecundario Class="TituloSecundario" TituloSecundario='"Cuida tus propias emociones y nunca las subestimes" -Robert Henri' />       
            </body>
        )
    }
}
export default ConocerEmocionesActividades;