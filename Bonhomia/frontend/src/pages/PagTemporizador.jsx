import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import Body from '../components/Temporizador/Body';
import Footer from '../components/Generales/Footer'; 

class PagTemporizador extends React.Component{
    render (){
        return(
            <div className='PaginaInicioRegistrados'>
                <div className='InicioComponentes'>
                    <Navbar src={Navbar} alt='Navbar' />
                    <Body src={Body} alt='Body' />
                    <Footer src={Footer} alt="Footer"></Footer>
                </div>                
            </div>            
        )
    }
}

export default PagTemporizador; 