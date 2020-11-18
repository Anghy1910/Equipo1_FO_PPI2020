import React from 'react';
import '../../styles/InicioSesion/FormularioStyle.css';
import '../../styles/Generales/tipografias.css';

class BotonUsuario extends React.Component{
    render(){
        return(        
            <div className='row justify-content-center h-100'>
                <button type="button" className='text-center buttonvarios'  >{this.props.Button}</button>
            </div>
        )
    }
}
export default BotonUsuario;
