import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import Lista from '../components/Actividades/ConocerEmociones/ActDiario/NotesList';
import Crearnota from '../components/Actividades/ConocerEmociones/ActDiario/CreateNote'
import Footer from '../components/Generales/Footer'; 

class PagCrearnota extends React.Component{
    render(){
        return(
            <div className='PagActividades'> 
                <Navbar src={Navbar} alt='Navbar' />
                    <Lista/>
                    <Crearnota/>
                <Footer src={Footer} alt="Footer"></Footer>
            </div>
        )
    }
}
export default PagCrearnota;