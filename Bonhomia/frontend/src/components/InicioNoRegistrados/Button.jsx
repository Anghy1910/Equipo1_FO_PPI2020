import React from 'react';
import '../../styles/InicioNoRegistrados/button.css'
import {Link} from 'react-router-dom'

class LastButton extends React.Component{
    render (){
        return (
            <div>
                <button type="button" className="btn btn-primary btn-lg btn-block buttonvarios">{this.props.button}</button>
                <br />
            </div>
        )
    }
}
export default LastButton;