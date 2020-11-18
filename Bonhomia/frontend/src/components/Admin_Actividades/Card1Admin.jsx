import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Admin_Actividades/CardAdmin.css'
import Actividades from '../../images/ActividadesAdmin.png';
import Musica from '../../images/MusicaAdmin.png';

class Card1 extends React.Component {
    render() {
        return (
            <div className="card-group">
                <div className="card">
                    <Link to="/bonhomia/admin"><img src={Actividades} className="Administrador__card"id="Imagencard_Admin"/></Link>
                </div>
                <div class="card" >
                    <Link to="/bonhomia/admin"><img src={Musica} className="Administrador__card" id="Imagencard_Admin2"/></Link>
                </div>
            </div>
        )
    }
}
export default Card1;