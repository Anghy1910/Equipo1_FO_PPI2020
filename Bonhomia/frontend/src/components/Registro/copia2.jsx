import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import '../../styles/Registro/TipoRegistroStyle.css';
import '../../styles/Generales/tipografias.css';
import BotonUsuario from '../InicioSesion/BotonUsuario';

function TipoRegistro () {

    const [nombre, setnombre] = useState('');
    const [correo, setcorreo] = useState('');
    const [usuario, setusuario] = useState('');
    const [password, setpassword] = useState('');
    const [edad, setedad] = useState('');
    const [genero, setgenero] = useState('');
    const [mascota, setmascota] = useState('');

    let history = useHistory();

    const registro = ()=>{
      Axios.post('http://localhost:4000/api/registro/nuevo-registro', {name: nombre, email: correo, user: usuario, contra: password, 
      age: edad, gender: genero, pet: mascota}).then((Response)=>{
        console.log(Response);
        if(Response.data.message === `Auth`){
            /* history.push("/bonhomia/inicio") */
            console.log(Response.data.message);
        }
      }).then((response)=>{
        console.log(response);
        console.log('Hola');
      })
      .catch((err)=>{
        console.log(err.message);
      });
    }    

    

    return (
      <body className="container-fluid">
        <div className= "row justify-content-center Registrobody">
          <form class="form-group form-group-sm">
            <div class="form-row">
                <div class="col-sm-10">
                  <label for="sm">Nombre Completo *</label>
                  <input required type="text" 
                    onChange={(e)=>{
                    setnombre(e.target.value
                    )}}
                    class="form-control" id="nombre" placeholder="Nombre(s) Apellidos" required/>
                </div>
                <div class="col-sm-10">
                  <label for="sm">Correo Electrónico *</label>
                  <input required type="text" 
                    onChange={(e)=>{
                      setcorreo(e.target.value
                      )}}
                  class="form-control" id="correo" placeholder="correo@mail.com " required/>
                </div>
            </div>
            <div class="form-row">
                <div class="col-sm-5">
                  <label for="sm">Usuario *</label>
                  <input required type="text" 
                    onChange={(e)=>{
                      setusuario(e.target.value
                      )}}
                  class="form-control" id="usuario" placeholder="Mi usuario" required/>
                </div>
                <div class="col-sm-5">
                  <label for="sm">Contraseña *</label>
                  <input required type="password" 
                    onChange={(e)=>{
                      setpassword(e.target.value
                      )}}
                  class="form-control" id="contraseña" placeholder="Mi contraseña" required/>
                </div>
            </div>
            
            <div class="form-row">
                <div class="col-sm-4">
                  <label for="sm">Edad *</label>
                  <select required class="custom-select" id="edad" 
                    onChange={(e)=>{
                      setedad(e.target.value
                      )}}
                  required>
                    <option selected disabled value="">Elija una opción *...</option>
                    <option>Entre 13 y 18 años</option>
                    <option>Entre 19 y 23 años</option>
                    <option>Mayores a 23</option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <label for="sm">Género *</label>
                  <select required class="custom-select" id="genero" 
                    onChange={(e)=>{
                      setgenero(e.target.value
                      )}}
                  required>
                    <option selected disabled value="">Elija una opción ...</option>
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <label for="sm">Tienes Mascota *</label>
                  <select required class="custom-select" id="mascota" 
                    onChange={(e)=>{
                      setmascota(e.target.value
                      )}}
                  required>
                    <option selected disabled value="">Elija una opción ...</option>
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
            </div>
          </form>
        </div>

        <div className="form-check autorizacion">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label autorizacion1" for="defaultCheck1">
            Acepto los términos y condiciones y autorizo a Bonhomía para el uso de mis datos de acuerdo a la declaración de privacidad
          </label>
      </div>

        <button type="submit" onClick={registro} />

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
export default TipoRegistro;

