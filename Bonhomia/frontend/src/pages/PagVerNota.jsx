import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import Nota from '../components/Actividades/ConocerEmociones/ActDiario/Nota.jsx'
import Footer from '../components/Generales/Footer'; 

class PagVerNota extends React.Component{
    render(){
        return(
            <div className='PagActividades'> 
                <Navbar src={Navbar} alt='Navbar' />
                    <Nota/>
                <Footer src={Footer} alt="Footer"></Footer>
            </div>
        )
    }
}
export default PagVerNota;