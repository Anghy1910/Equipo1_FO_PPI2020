import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/InicioRegistrados/Main.css';
import CardForm2 from '../Generales/CardForm2';
import Actividades from '../../images/Actividades.png';
import Musica from '../../images/Musica.png';
import Temporizador from '../../images/Temporizador.png';

class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="container row col-md">
                    <div className="card1">
                        <Link to="/bonhomia/actividades"><CardForm2 Class='card_inicio' Image={Actividades} Clase__1="card_inicio" CardName='Actividades' /></Link>
                    </div>
                    <div className="card1">
                        <Link to="/bonhomia/musica"><CardForm2 Class='card_inicio' Image={Musica} Clase__1="card_inicio" CardName='Musica' /></Link>
                    </div>
                    <div className="card1">
                        <Link to="/bonhomia/temporizador"><CardForm2 Class='card_inicio' Image={Temporizador} Clase__1="card_inicio" CardName='Temporizador' /></Link>
                    </div>
                </div>
            </main>
        )
    }
}
export default Main;