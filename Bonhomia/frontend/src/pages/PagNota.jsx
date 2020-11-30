import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import Crearnota from '../components/Actividades/ConocerEmociones/ActDiario/crearNota'
import Footer from '../components/Generales/Footer'; 

class PagCrearnota extends React.Component{
    render(){
        return(
            <div className='PagActividades'> 
                <Navbar src={Navbar} alt='Navbar' />
                    
                    <Crearnota/>
                <Footer src={Footer} alt="Footer"></Footer>
            </div>
        )
    }
}
export default PagCrearnota;