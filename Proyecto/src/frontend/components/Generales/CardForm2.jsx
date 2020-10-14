import React from 'react';

class CardForm2 extends React.Component{
    render(){
        return(
            <div className="card " className={this.props.Class}>
                <a className="navbar-brand" href="#">
                    <img src={this.props.Image} className="card-img img-fluid" className={this.props.Clase__1} alt={this.props.CardName} />
                </a>    
            </div>
        )
    }
}
export default CardForm2;  