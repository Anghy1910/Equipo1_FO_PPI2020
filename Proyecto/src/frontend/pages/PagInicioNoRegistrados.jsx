import React from 'react';
import Cards from '../components/InicioNoRegistrados/cardsNoregistrados.jsx';
import NavBarfuera from '../components/Generales/navbarNoRegistrados.jsx';
import Informacion from '../components/InicioNoRegistrados/Informacion.jsx';
import LastButton from '../components/Generales/Button.jsx';
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
                
                <Espacio />
                <LastButton button='Regístrate'/>
                <Footer/>
        </React.Fragment>
        
        ) 
    }
}
export default Bonhomiauno ;