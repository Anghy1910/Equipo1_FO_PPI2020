import React from 'react';
import {Link} from 'react-router-dom';
import BotonUsuario from './BotonUsuario';
import '../../styles/InicioSesion/FormularioStyle.css';
import '../../styles/Generales/tipografias.css';
import perfilIcono from '../../images/perfilIcono.svg';
import bloquear from '../../images/bloquear.svg';

class Formulario extends React.Component {
    render() {
        return (
            <body>
                <div className='FormularioContainer'>
                    {/*Codigo Titulo */}
                    <div className='row justify-content-center h-100'>
                        <h1>Bienvenido</h1>
                    </div>
                    {/*Codigo Formulario */}
                    <div className="form-group">
                        <label for="exampleInputEmail1"><img className='Icono' src={perfilIcono} />Usuario</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" />
                    </div>
                    <br />
                    <br />
                    <div class="form-group">
                        <label for="exampleInputPassword1"><img className='Icono' src={bloquear} />Contraseña   </label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <br />
                    <div class="">
                        <label for="sm">Ingresar como...</label>
                        <select class="custom-select" id="genero" required>
                            <option selected disabled value="">Elija una opción...</option>
                            <option>Usuario</option>
                            <option>Administrador</option>
                        </select>
                    </div>
                    </div>
                    <br />

                    <Link to="/bonhomia/inicio"><BotonUsuario Button="Iniciar Sesión" /></Link>

                    <div className='row justify-content-center h-100 ingresos'>
                        <div>
                            <a className="linkFacebook col- mr-5 " href="#">Facebook</a>
                        </div>
                        <div>
                            <a className="linkGmail col-ml-5 offset-ml-5" href="#">Gmail</a>
                        </div>
                    </div>
            </body>

        )
    }
}
export default Formulario;