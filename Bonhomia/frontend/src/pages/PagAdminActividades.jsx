import React from 'react';
import NavBar from '../components/Generales/navbarAdmin';
import Card1 from '../components/Admin_Actividades/Card1Admin.jsx'
import Footer from '../components/Generales/Footer.jsx'


class Admin_Actividades extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Card1/>
                <Footer/>
            </React.Fragment>

        )
    }
}
export default Admin_Actividades;