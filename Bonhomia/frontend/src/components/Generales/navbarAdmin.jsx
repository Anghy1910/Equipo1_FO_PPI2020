import React from "react";
import {Link} from 'react-router-dom';
import "../../styles/Generales/navbarMenu.css";
import '../../styles/Generales/tipografias.css';
import Logo from "../../images/Logo.png";
import Logout from '../../images/logout.png';
import PerfilUsuario from '../../images/Usuario.png';

class menuAdmin extends React.Component {
render() {
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/bonhomia/adminactividades" className="navbar-brand">
                    <img className='navbar-brand_img' width="60px" height="60px" src={Logo}/>
                </Link>      
            <div className="navbar-brand" id="navbarNav">
                <Link to="/bonhomia" className="navbar-brand"><img className="navbar-brand_img" width="60px" height="60px" src={Logout} alt="Perfil" /></Link>
                <Link to="/bonhomia/perfiladmin" className="navbar-brand"><img className="navbar-brand_img" width="65px" height="65px" src={PerfilUsuario} alt="Perfil" /></Link>
            </div>
        </nav>
        </React.Fragment>
        );
    }
}
export default menuAdmin;