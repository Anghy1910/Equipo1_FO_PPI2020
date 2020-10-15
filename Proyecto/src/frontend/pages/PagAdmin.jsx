import React from 'react';
import NavBardentro from '../components/Generales/navbarmenu.jsx';
import Categorias from '../components/Admin/Categorias_Admin.jsx'
import Espacio from '../components/Generales/Espacio.jsx'
import Banner from '../components/Admin/Banner_Admin.jsx'
import ButtonAdmin from '../components/Generales/Button.jsx'
import Footer from '../components/Generales/Footer.jsx'


class Admin extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBardentro />
                <Espacio />
                <Categorias />
                <Banner/>
                <ButtonAdmin/>
                <Footer/>
            </React.Fragment>

        )
    }
}
export default Admin;