import React from 'react';
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
                <LastButton button='Regístrate'/>
                <Footer/>
        </React.Fragment>
        
        ) 
    }
}
export default Bonhomiauno ;