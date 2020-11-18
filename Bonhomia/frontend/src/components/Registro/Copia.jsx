/* import React, { useState } from 'react';
import { React } from "react-router-dom";
import Axios from 'axios';
import '../../styles/Registro/TipoRegistroStyle.css';
import '../../styles/Generales/tipografias.css';
import BotonUsuario from '../InicioSesion/BotonUsuario';

class TipoRegistro extends React.Component {
    


    state = {
        
            nombre: "",
            correo: "",
            usuario: "",
            contraseña: "",
            edad: "",
            genero: "",
            mascota: ""
        
      };

      saludar = ()=>{
        console.log('Hola');
        useHistory().push("/bonhomia/inicio")
      }

      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
     registro = async()=>{
        const {nombre, correo, usuario, contraseña, edad, genero, mascota} = this.state
      await Axios.post('http://localhost:4000/api/registro/nuevo-registro', {name: nombre, email: correo, user: usuario, contra: contraseña, 
      age: edad, gender: genero, pet: mascota}).then((Response)=>{
        console.log(Response); 
      }).then((response)=>{
        console.log(response);
        console.log('Hola');
      }).catch((err)=>{
        console.log(err.message);
      });
    };
    render(){
    return (
      <body className="container-fluid">
        <div className= "row justify-content-center Registrobody">
          <form class="form-group form-group-sm">
            <div class="form-row">
                <div class="col-sm-10">
                  <label for="sm">Nombre Completo *</label>
                  <input type="text" 
                    name="nombre"
                    value={this.state.nombre}
                    onChange={this.handleChange}
                    class="form-control" id="nombre" placeholder="Nombre(s) Apellidos" required/>
                </div>
                <div class="col-sm-10">
                  <label for="sm">Correo Electrónico *</label>
                  <input type="text" 
                    name="correo"
                    value={this.state.correo}
                    onChange={this.handleChange}
                  class="form-control" id="correo" placeholder="correo@mail.com " required/>
                </div>
            </div>
            <div class="form-row">
                <div class="col-sm-5">
                  <label for="sm">Usuario *</label>
                  <input type="text" 
                    name="usuario"
                    value={this.state.usuario}
                    onChange={this.handleChange}
                  class="form-control" id="usuario" placeholder="Mi usuario" required/>
                </div>
                <div class="col-sm-5">
                  <label for="sm">Contraseña *</label>
                  <input type="password" 
                    name="contraseña"
                    value={this.state.contraseña}
                    onChange={this.handleChange}
                  class="form-control" id="contraseña" placeholder="Mi contraseña" required/>
                </div>
            </div>
            
            <div class="form-row">
                <div class="col-sm-4">
                  <label for="sm">Edad *</label>
                  <select class="custom-select" id="edad" 
                    name="edad"
                    value={this.state.edad}
                    onChange={this.handleChange}
                  required>
                    <option selected disabled value="">Elija una opción *...</option>
                    <option>Entre 13 y 18 años</option>
                    <option>Entre 19 y 23 años</option>
                    <option>Mayores a 23</option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <label for="sm">Género *</label>
                  <select class="custom-select" id="genero" 
                    name="genero"
                    value={this.state.genero}
                    onChange={this.handleChange}
                  required>
                    <option selected disabled value="">Elija una opción ...</option>
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <label for="sm">Tienes Mascota *</label>
                  <select class="custom-select" id="mascota" 
                    name="mascota"
                    value={this.state.mascota}
                    onChange={this.handleChange}
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

      <button type="button" className='text-center buttonvarios'  ></button>
        <button onClick={()=>{this.saludar()}}></button>

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

 */