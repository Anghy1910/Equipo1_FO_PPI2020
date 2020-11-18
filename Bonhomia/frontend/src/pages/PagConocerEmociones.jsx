import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import ConocerEmociones from '../components/Actividades/ConocerEmociones/Body';
import Footer from '../components/Generales/Footer'; 

class PagConocerEmociones extends React.Component{
    render(){
        return(
            <div className='PagConocerEmociones'> 
                <div className='Act1'>
                    <Navbar src={Navbar} alt='Navbar' />
                    <ConocerEmociones src={ConocerEmociones} alt='Body' />
                    <Footer src={Footer} alt="Footer"></Footer>
                </div>
            </div>
        )
    }
}
export default PagConocerEmociones;