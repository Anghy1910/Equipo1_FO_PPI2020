import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import EmocionesDemas from '../components/Actividades/EmocionesDemas/Body';
import Footer from '../components/Generales/Footer'; 

class PagEmocionesDemas extends React.Component{
    render(){
        return(
            <div className='PagConocerEmociones'> 
                <div className='Act1'>
                    <Navbar src={Navbar} alt='Navbar' />
                    <EmocionesDemas src={EmocionesDemas} alt='Body' />
                    <Footer src={Footer} alt="Footer"></Footer>
                </div>
            </div>
        )
    }
}
export default PagEmocionesDemas;