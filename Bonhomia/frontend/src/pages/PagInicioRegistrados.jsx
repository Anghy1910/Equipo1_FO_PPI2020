import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import Header from '../components/InicioRegistrados/Header';
import Main from '../components/InicioRegistrados/Main';
import Footer from '../components/Generales/Footer'; 

class PagInicioRegistrados extends React.Component {
    render() {
        return (
            <div className='PaginaInicioRegistrados'>
                <div className='InicioComponentes'>
                    <Navbar src={Navbar} alt='Navbar' />
                    <Header src={Header} alt="Informacion IE" />
                    <Main src={Main} alt="Iconos Actividades" />
                    <Footer src={Footer} alt="Footer"></Footer>
                </div>
                
            </div>
        )
    }
}

export default PagInicioRegistrados;
