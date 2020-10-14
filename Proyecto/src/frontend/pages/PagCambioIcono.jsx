import React from 'react';
import Navbar from '../components/Generales/navbarmenu';
import Body from '../components/CambioIcono/body';
import Footer from '../components/Generales/Footer'; 

class CambioIcono extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <Body />
                <Footer />
            </div>
        )
    }
}
export default CambioIcono;