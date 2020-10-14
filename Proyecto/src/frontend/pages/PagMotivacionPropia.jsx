import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import MotivacionPropia from '../components/Actividades/MotivacionPropia/Body';
import Footer from '../components/Generales/Footer'; 

class PagMotivacionPropia extends React.Component{
    render(){
        return(
            <div className='PagConocerEmociones'> 
                <div className='Act1'>
                    <Navbar src={Navbar} alt='Navbar' />
                    <MotivacionPropia src={MotivacionPropia} alt='Body' />
                    <Footer src={Footer} alt="Footer"></Footer>
                </div>
            </div>
        )
    }
}
export default PagMotivacionPropia;