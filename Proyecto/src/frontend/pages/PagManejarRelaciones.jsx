import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import ManejarRelaciones from '../components/Actividades/ManejarRelaciones/Body';
import Footer from '../components/Generales/Footer'; 

class PagManejarRelaciones extends React.Component{
    render(){
        return(
            <div className='PagConocerEmociones'> 
                <div className='Act1'>
                    <Navbar src={Navbar} alt='Navbar' />
                    <ManejarRelaciones src={ManejarRelaciones} alt='Body' />
                    <Footer src={Footer} alt="Footer"></Footer>
                </div>
            </div>
        )
    }
}
export default PagManejarRelaciones;