import React from 'react';
import NavBardentro from '../components/Generales/navbarmenu.jsx';
import Mensaje from '../components/MensajeEmociones/Mensaje.jsx'
import Footer from '../components/Generales/Footer.jsx'


class PagMensaje extends React.Component{
    render (){
        return(
            <React.Fragment>
                <NavBardentro/>
                <Mensaje/>
                <Footer/>
            </React.Fragment>
        
        ) 
    }
}
export default PagMensaje ;