import React from 'react';

class CardForm2 extends React.Component{
    render(){
        return(
            <div className="card" className={this.props.Class}>
                <a className="navbar-brand" href="#">
                    <img src={this.props.Image} className="card-img img-fluid" className={this.props.Clase__1} alt={this.props.CardName} />
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                    </div>
                </a>    
            </div>
        )
    }
}
export default CardForm2;