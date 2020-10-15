import React from 'react';
import Cardperfil from '../components/Admin_Perfil/Cards_Perfil.jsx'
import NavBardentro from '../components/Generales/navbarmenu.jsx';
import Footer from '../components/Generales/Footer.jsx'

class PerfilAdmin extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBardentro/>
                <Cardperfil/>
                <Footer/>                
            </React.Fragment>
        )
    }
}
export default PerfilAdmin;