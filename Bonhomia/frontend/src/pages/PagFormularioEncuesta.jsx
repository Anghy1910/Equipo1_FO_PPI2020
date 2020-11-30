import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import Formulario from '../components/Encuesta/formulario';
import Footer from '../components/Generales/Footer';
import Espacio from '../components/Generales/Espacio';

class formularioEncuesta extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Espacio/>
                <Formulario/>
                <Espacio/>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default formularioEncuesta;