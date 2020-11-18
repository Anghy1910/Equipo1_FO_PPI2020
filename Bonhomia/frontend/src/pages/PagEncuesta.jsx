import React from 'react';
import NavBar from '../components/Generales/navbarmenu.jsx';
import Encuesta from '../components/Encuesta/Encuesta'
import Footer from '../components/Generales/Footer.jsx'
import Espacio from "../components/Generales/Espacio";

class Admin extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Espacio />
                <Encuesta/>
                <Footer/>
            </React.Fragment>

        )
    }
}
export default Admin;