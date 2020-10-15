import React from 'react';
import NavBarra from '../components/Generales/navbarNoRegistrados';
import TipoRegistros from '../components/Registro/FormularioRegistro';
import Footer from '../components/Generales/Footer'; 

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