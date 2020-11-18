import React from 'react';
import NavBarra from '../components/Generales/navbarNoRegistrados';
import Formulario from '../components/InicioSesion/FormularioInicioSesión';
import Footer from '../components/Generales/Footer';



class Usuario extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBarra />
                <Formulario />
                <Footer />
            </React.Fragment>
        )
    }
}
export default Usuario;