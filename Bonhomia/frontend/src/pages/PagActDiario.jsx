import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import ActDiario from '../components/Actividades/ConocerEmociones/actDiario';
import Footer from '../components/Generales/Footer'; 

class PagActDiario extends React.Component{
    render(){
        return(
            <div className='PagActividades'> 
                <Navbar src={Navbar} alt='Navbar' />
                    <ActDiario src={ActDiario} alt='Body' />
                <Footer src={Footer} alt="Footer"></Footer>
            </div>
        )
    }
}
export default PagActDiario;