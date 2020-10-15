import React from 'react';
import NavBarra from '../components/Generales/navbarmenu';
import Fotoperfil from "../components/Perfil/Fotoperfil";
import ProgresoActividad from "../components/Perfil/ProgresoActividad";
import ProgresoEmociones from "../components/Perfil/ProgresoEmociones";
import Footer from '../components/Generales/Footer'; 

class Perfil extends React.Component {
    render(){
        return(
            <React.Fragment>
                <NavBarra/>
                <Fotoperfil/>
                <ProgresoActividad/>
                <ProgresoEmociones/>
                <Footer />  
            </React.Fragment>


        )
    }
}






export default Perfil;