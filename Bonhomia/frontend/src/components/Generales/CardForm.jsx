import React from 'react';
class CardForm extends React.Component {
    render () {
        return (
            <div className="card card__Header">
                <img src={this.props.url} className="card-img-top img-fluid" className={this.props.Class}/>
                <div className="card-body">
                    <h5 className="card-title Titulo">{this.props.cardTitle}</h5>
                    <p className="card-text Parrafo">{this.props.cardText}</p>
                </div>
            </div>
        )
    }
}
export default CardForm;