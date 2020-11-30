import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import '../../../../styles/Generales/Button.css';
import '../../../../styles/Registro/TipoRegistroStyle.css';
import '../../../../styles/Generales/tipografias.css';

function Nota() {

    const [title, setTitle] = useState('');
    const [fecha, setFecha] = useState('');
    const [content, setContent] = useState('');


    let history = useHistory();

    const crearNota = () => {
        Axios.post('http://localhost:4000/api/notas/nueva-nota', { titulo: title, dia: fecha, contenido: content }).then((Response) => {
            console.log(Response);
            if (Response.data.message === `Auth`) {
                history.push("/bonhomia/nota")
                console.log(Response.data.message);
            }
        }).then((response) => {
            console.log(response);
            console.log('Hola');
        })
            .catch((err) => {
                console.log(err.message);
            });
    }



    return (
        <body className="container-fluid">
            <div className="row justify-content-center Registrobody">
                <form class="form-group form-group-sm">
                    <div class="form-row">
                        <div class="col-sm-10">
                            <label for="sm">Titulo de la nota</label>
                            <input required type="text"
                                onChange={(e) => {
                                    setTitle(e.target.value
                                    )
                                }}
                                class="form-control" id="Titulo" placeholder="titulo de la nota" required />
                        </div>
                        <div class="col-sm-10">
                            <label for="sm">Fecha</label>
                            <input required type="text"
                                onChange={(e) => {
                                    setFecha(e.target.value
                                    )
                                }}
                                class="form-control" id="Fecha" placeholder="Fecha de realizaciòn" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-sm-5">
                            <label for="sm">Contenido</label>
                            <textarea required type="text"
                                onChange={(e) => {
                                    setContent(e.target.value
                                    )
                                }}
                                class="form-control" id="Contenido" placeholder="Contenido de nota" required />
                        </div>
                    </div>
                    <div>

                    </div>


                </form>
            </div>



            <div className='row justify-content-center h-100'>
                <button className='text-center buttonvarios' type="submit" onClick={crearNota}>Guardar</button>
            </div>

        </body>
    )
}
export default Nota;