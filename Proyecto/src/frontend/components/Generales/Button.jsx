import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Generales/Button.css';
import '../../styles/Generales/tipografias.css';

class BotonUsuario extends React.Component{
    render(){
        return(        
            <div className='row justify-content-center h-100'>
                <Link to="/estadoanimo" > <button type="button" className='text-center buttonvarios'  >{this.props.Button}</button></Link>
            </div>
        )
    }
}
export default BotonUsuario;