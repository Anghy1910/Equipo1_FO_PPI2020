import React from 'react';
import {Link} from 'react-router-dom';
import Cards from '../components/InicioNoRegistrados/cardsNoregistrados.jsx';
import NavBarfuera from '../components/Generales/navbarNoRegistrados.jsx';
import Informacion from '../components/InicioNoRegistrados/Informacion.jsx';
import LastButton from '../components/InicioNoRegistrados/Button';
import Espacio from '../components/Generales/Espacio.jsx';
import Footer from '../components/Generales/Footer.jsx'

class Bonhomiauno extends React.Component{
    render (){
        return(
            <React.Fragment>
                <NavBarfuera/>
                <Cards/>
                <Espacio/>
                <Informacion/>
                <Link to="/registro"><LastButton button='Regístrate'/></Link>
                <Footer/>
        </React.Fragment>
        
        ) 
    }
}
export default Bonhomiauno ;