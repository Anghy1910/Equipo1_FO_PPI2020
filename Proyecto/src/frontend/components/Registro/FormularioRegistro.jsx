import React from 'react';
import '../../styles/Registro/TipoRegistroStyle.css';
import '../../styles/Generales/tipografias.css';
import BotonUsuario from '../InicioSesion/BotonUsuario';

class TipoRegistro extends React.Component {
  render() {
    return (
      <body className="container-fluid">
        <div className= "row justify-content-center Registrobody">
          <form class="form-group form-group-sm">
            <div class="form-row">
                <div class="col-sm-10">
                  <label for="sm">Nombre Completo</label>
                  <input type="text" class="form-control" id="nombre" placeholder="Nombre(s) Apellidos" required/>
                </div>
                <div class="col-sm-10">
                  <label for="sm">Correo Electronico</label>
                  <input type="text" class="form-control" id="correo" placeholder="correo@mail.com " required/>
                </div>
            </div>
            <div class="form-row">
                <div class="col-sm-5">
                  <label for="sm">Usuario</label>
                  <input type="text" class="form-control" id="usuario" placeholder="Mi usuario" required/>
                </div>
                <div class="col-sm-5">
                  <label for="sm">Contraseña</label>
                  <input type="password" class="form-control" id="contraseña" placeholder="Mi contraseña" required/>
                </div>
            </div>
            <div class="form-row">
                <div class="col-sm-4">
                  <label for="sm">Edad</label>
                  <select class="custom-select" id="edad" required>
                    <option selected disabled value="">Elija una opción...</option>
                    <option>Entre 13 y 18 años</option>
                    <option>Entre 19 y 23 años</option>
                    <option>Mayores a 23</option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <label for="sm">Genero</label>
                  <select class="custom-select" id="genero" required>
                    <option selected disabled value="">Elija una opción...</option>
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <label for="sm">Tienes Mascota</label>
                  <select class="custom-select" id="mascota" required>
                    <option selected disabled value="">Elija una opción...</option>
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
            </div>
          </form>
        </div>

        <BotonUsuario Button="Registrarse" />

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
export default TipoRegistro;

