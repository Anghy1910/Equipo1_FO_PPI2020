import React, { useState } from 'react';
import '../../../../styles/Actividades/ConocerEmociones/Nota/Nota.css';

class Notas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            note: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/notas')
            .then(res => res.json())
            .then(result => {
                this.setState({

                    note: result
                });
            });
    }

    render() {
        const { note } = this.state;
        return (
            <body>
                <div className="row">
                    {note.map(note => (
                        <div className="col-md-4 p-2" key={note}>
                            <div className="card" id="cardNota">
                                <div className="card-header d-flex justify-content-between" id="notaHeader">
                                    <h5>{note.title}</h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                        {note.content}
                                    </p>
                                    <p>
                                        Fecha: {note.fecha}
                                    </p>

                                </div>

                            </div>
                        </div>
                    ))
                    }
                </div>
            </body>
        );
    }
}


export default Notas;