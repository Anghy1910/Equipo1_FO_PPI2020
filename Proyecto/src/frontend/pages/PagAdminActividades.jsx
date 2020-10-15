import React from 'react';
import NavBardentro from '../components/Generales/navbarmenu.jsx';
import Card1 from '../components/Admin_Actividades/Card1Admin.jsx'
import Footer from '../components/Generales/Footer.jsx'


class Admin_Actividades extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBardentro />
                <Card1/>
                <Footer/>
            </React.Fragment>

        )
    }
}
export default Admin_Actividades;