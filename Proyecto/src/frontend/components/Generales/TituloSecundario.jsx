import React from 'react';

class TituloSecundario extends React.Component{
    render(){
        return(
        <h5 className="card-title" className={this.props.Class}>{this.props.TituloSecundario}</h5>
        )
    }
}
export default TituloSecundario