import React from 'react';
import NavBar from '../components/Generales/navbarAdmin';
import Categorias from '../components/Admin/Categorias_Admin.jsx'
import Espacio from '../components/Generales/Espacio.jsx'
import Banner from '../components/Admin/Banner_Admin.jsx'
import Footer from '../components/Generales/Footer.jsx'


class Admin extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Espacio />
                <Categorias />
                <Banner/>
                <Footer/>
            </React.Fragment>

        )
    }
}
export default Admin;