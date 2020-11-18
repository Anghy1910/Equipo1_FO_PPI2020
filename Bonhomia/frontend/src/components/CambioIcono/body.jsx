import React from 'react';
import CardForm2 from '../Generales/CardForm2';
import '../../styles/IconosUsuario/Body.css';
import IconoMujer1 from '../../images/IconoUsuarioMujer1.png';
import IconoMujer2 from '../../images/IconoUsuarioMujer2.png';
import IconoHombre1 from '../../images/IconoUsuarioHombre1.png';
import IconoHombre2 from '../../images/IconoUsuarioHombre2.png';

class IconosUsuario extends React.Component{
    render(){
        return(
            <body>
                <div className="row justify-content-center h-100">
                    <CardForm2 Class="Card_Iconos" Image={IconoMujer1} Clase__1="Iconos Iconos1" CardName="Icono1"/>
                    <CardForm2 Class="Card_Iconos" Image={IconoMujer2} Clase__1="Iconos Iconos1" CardName="Icono1"/>
                </div>
                <div className="row justify-content-center h-100">
                    <CardForm2 Class="Card_Iconos" Image={IconoHombre1} Clase__1="Iconos" CardName="Icono1"/>
                    <CardForm2 Class="Card_Iconos" Image={IconoHombre2} Clase__1="Iconos" CardName="Icono1"/>
                </div>
                
                <div className="row justify-content-center">
                <a className="AncleIconos" href="">Subir</a>
                </div>

                <div className="row justify-content-center">
                    <button type="button" className="btn btn-diseño mr-5 botoniconos">Aceptar</button>
                    <button type="button" className="btn btn-diseño botoniconos">Cancelar</button>
                </div>
            </body>
        )
    }
}
export default IconosUsuario;