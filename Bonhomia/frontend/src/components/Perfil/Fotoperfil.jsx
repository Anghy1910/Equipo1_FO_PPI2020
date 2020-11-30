import React from 'react';
import TituloPrincipal from "../Generales/TituloPrincipal";
import '../../styles/Perfil/FotoperfilStyle.css'
import '../../styles/Generales/tipografias.css';
import PerfilAdmin from '../../images/PerfilAdmin.png';
import Botoneliminar from "./EliminarButton"

class Fotoperfil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usu: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:4000/api/perfil')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    usu: result
                });
            });
    }
    render() {
        const { usu } = this.state;
        return (
            <body>
                <TituloPrincipal TituloPrincipal="Mi Perfil" />
                <div className="cardfotoperfil row justify-content-center align-items-center">
                    <div className="card " className="Card_Fotoperfil">
                        <a className="navbar-brand" href="#">
                            <img src={PerfilAdmin} className="card-img img-fluid" className="fotoperfil" />
                        </a>
                        <div className="row justify-content-center">
                            <Botoneliminar />
                        </div>
                    </div>
                    <div className="card" className="Card_Fotoperfil">
                        <div key={usu}>
                            <h5 className="card-title tituloinfo">Nombre:<p className="card-text parrafoinfo">{usu.nombre_usuario}</p></h5>
                            <h5 className="card-title tituloinfo">Nickname: <p className="card-text parrafoinfo">{usu.username}</p></h5>
                            <h5 className="card-title tituloinfo">Email:<p className="card-text parrafoinfo">{usu.correo}</p></h5>
                            <h5 className="card-title tituloinfo">Edad: <p className="card-text parrafoinfo">{usu.edad}</p></h5>
                            <h5 className="card-title tituloinfo">Mascotas:<p className="card-text parrafoinfo">{usu.mascota}</p></h5>
                            <h5 className="card-title tituloinfo">Género:<p className="card-text parrafoinfo">{usu.genero}</p></h5>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}
export default Fotoperfil;