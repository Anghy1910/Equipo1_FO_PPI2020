import React from "react";
import {Link} from 'react-router-dom';
import "../../styles/Generales/navbarMenu.css";
import '../../styles/Generales/tipografias.css';
import Logo from "../../images/Logo.png";
import Logout from '../../images/logout.png';
import PerfilUsuario from '../../images/Usuario.png';

class menu extends React.Component {
render() {
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/bonhomia/inicio" className="navbar-brand">
                    <img className='navbar-brand_img' width="60px" height="60px" src={Logo}/>
                </Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <Link to="/bonhomia/actividades" className="nav-item nav-link">Actividades</Link>
                    <Link to="/bonhomia/musica" className="nav-item nav-link" target="_blank">Música</Link>
                    <Link to="/bonhomia/temporizador" className="nav-item nav-link">Temporizador</Link>
            </div>      
            <div className="navbar-brand" id="navbarNav">
                <Link to="/bonhomia" className="navbar-brand"><img className="navbar-brand_img" width="60px" height="60px" src={Logout} alt="Perfil" /></Link>
                <Link to="/perfiluser" className="navbar-brand"><img className="navbar-brand_img" width="65px" height="65px" src={PerfilUsuario} alt="Perfil" /></Link>
            </div>
        </nav>
        </React.Fragment>
        );
    }
}
export default menu;