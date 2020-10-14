import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import Actividades from '../components/Actividades/Body';
import Footer from '../components/Generales/Footer'; 

class PagActividades extends React.Component{
    render(){
        return(
            <div className='PagActividades'> 
                <Navbar src={Navbar} alt='Navbar' />
                    <Actividades src={Actividades} alt='Body' />
                <Footer src={Footer} alt="Footer"></Footer>
            </div>
        )
    }
}
export default PagActividades;