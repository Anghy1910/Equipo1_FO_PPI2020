import React from "react";
import {Link} from 'react-router-dom';
import "../../styles/Generales/tipografias.css";
import '../../styles/Generales/navbarMenu.css';
import Logo from "../../images/Logo.png";

class NavBarfuera extends React.Component {
render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <h1 className="TituloLogo">
                    <a className="navbar-brand" href="/">
                        <img className='navbar-brand_img' width="50px" height="50px" src={Logo} alt="/"/>
                    </a>Bonhomía
            </h1>
            <div className="navbar-brand" id="navbarNav">
                <Link to="/bonhomia/inicio" className="nav-item nav-link aInicio">Registrate</Link>
                <Link to="/bonhomia/inicio" className="nav-item nav-link aInicio">Inicio de Sesión</Link>
               
                   
            </div>      
        </nav>
        );
    }
}
export default NavBarfuera;