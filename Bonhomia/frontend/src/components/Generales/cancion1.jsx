import React from 'react';
class Cancion1 extends React.Component {
    render() {
        return (
            <div>
                <div className="alert alert-primary" id={this.props.idcancion}>
                    <img src={this.props.imagenmusica} id="Cancion__img" alt="" />
                    <p className="d-inline-block " id="Cancion__texto"><a href={this.props.linkmusica} className={this.props.idancle}>{this.props.nombrecancion}</a></p>
                    <p className="d-inline-block " id={this.props.claseautor}>{this.props.nombreautor}</p>
                    <p className="d-inline-block " id={this.props.idduracion}>{this.props.duracioncancion}</p>
                </div>
                
            </div>
        )
    }

}
export default Cancion1;
