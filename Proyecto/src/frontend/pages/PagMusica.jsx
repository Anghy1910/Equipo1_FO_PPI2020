import React from 'react';
import NavBardentro from '../components/Generales/navbarmenu.jsx';
import Bannermusica from '../components/Musica/Bannermusica.jsx';
import Canciones from '../components/Musica/Canciones.jsx'
import Footer from '../components/Generales/Footer.jsx'


class Bonhomiamusica extends React.Component{
    render (){
        return(
            <React.Fragment>
                <NavBardentro/>
                <Bannermusica/>
                <Canciones/>
                <Footer/>
            </React.Fragment>
        
        ) 
    }
}
export default Bonhomiamusica ;