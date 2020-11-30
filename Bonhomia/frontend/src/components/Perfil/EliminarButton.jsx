import React from 'react';
import { Link } from 'react-router-dom';

class Eliminarbutton extends React.Component {

    componentDidMount() {
        fetch('http://localhost:4000/api/perfil/co', { method: 'DELETE' })
            .then(res => res.json())
            .then(send => {
                this.setState({
                    enviar: send
                });
            });
    }
    render() {
        return (
            <div>
                <Link to="/bonhomia"> <button className="buttonvarios" >Eliminar{this.enviar} </button></Link>
            </div>
        );
    }
}
export default Eliminarbutton;