import React from 'react';
import NavBar from '../components/Generales/navbarAdmin';
import Cardperfil from '../components/Admin_Perfil/Cards_Perfil.jsx'
import Footer from '../components/Generales/Footer.jsx'

class PerfilAdmin extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Cardperfil/>
                <Footer/>                
            </React.Fragment>
        )
    }
}
export default PerfilAdmin;