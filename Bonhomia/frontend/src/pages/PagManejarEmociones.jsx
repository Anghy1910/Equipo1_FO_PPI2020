import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import ManejarEmociones from '../components/Actividades/ManejarEmociones/Body';
import Footer from '../components/Generales/Footer'; 

class PagManejarEmociones extends React.Component{
    render(){
        return(
            <div className='PagConocerEmociones'> 
                <div className='Act1'>
                    <Navbar src={Navbar} alt='Navbar' />
                    <ManejarEmociones src={ManejarEmociones} alt='Body' />
                    <Footer src={Footer} alt="Footer"></Footer>
                </div>
            </div>
        )
    }
}
export default PagManejarEmociones;