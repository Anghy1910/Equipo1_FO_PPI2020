import React from 'react';
import NavBarra from '../components/Generales/navbarNoRegistrados';
//import TipoRegistros from '../components/Registro/FormularioRegistro';
import TipoRegistros from '../components/Registro/copia2'
import Footer from '../components/Generales/Footer'; 
import Espacio from '../components/Generales/Espacio.jsx'

class Registros extends React.Component {
    render(){
        return(
            <React.Fragment>
                <NavBarra/>
                <TipoRegistros/>
                <Footer />  
            </React.Fragment>

        )
    }
}






export default Registros;