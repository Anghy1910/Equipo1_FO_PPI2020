import React from 'react';
import TituloPrincipal from '../Generales/TituloPrincipal';
import '../../styles/Admin_Perfil/Cardperfil_Admin.css';
import '../../styles/Generales/tipografias.css';
import PerfilAdmin from '../../images/PerfilAdmin.png';
class Cardperfil1 extends React.Component {
    render() {
        return (
            <body>
            <TituloPrincipal TituloPrincipal='Mi Perfil' /> 
            <div className="cardfotoperfil row justify-content-center align-items-center">
                <div className="card " className="Card_Fotoperfil">
                    <a className="navbar-brand" href="#">
                        <img src={PerfilAdmin} className="card-img img-fluid" className="fotoperfil" />
                    </a>
                    <div className="row justify-content-center">
                        <a className="AncleIconos" href="">Cambiar Foto</a>
                    </div>   
                </div>
                <div className="card" className="Card_Fotoperfil">
                    <div>
                        <h5 className="card-title tituloinfo">Nombre:<p className="card-text parrafoinfo">Santiago Ramírez</p></h5>
                        <h5 className="card-title tituloinfo">Nickname:<p className="card-text parrafoinfo">Estigma81</p></h5>
                        <h5 className="card-title tituloinfo">Email:<p className="card-text parrafoinfo">santiagoa@iefedericoozanam.edu</p></h5>
                        <h5 className="card-title tituloinfo">Edad:<p className="card-text parrafoinfo">Menor a 18 años</p></h5>
                        <h5 className="card-title tituloinfo">Mascotas:<p className="card-text parrafoinfo">Si tiene</p></h5>
                        <h5 className="card-title tituloinfo">Género:<p className="card-text parrafoinfo">Masculino</p></h5>
                    </div> 
                </div>
            </div>
        </body>
        )
    }
}
export default Cardperfil1;