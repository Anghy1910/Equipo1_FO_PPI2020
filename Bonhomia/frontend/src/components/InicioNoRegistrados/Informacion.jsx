import React from 'react';
import '../../styles/InicioNoRegistrados/Informacion.css';
import TituloPrincipal from '../Generales/TituloPrincipal.jsx'

class Informacion extends React.Component {
    render() {
        return (
            <body>
                <TituloPrincipal TituloPrincipal='¿Qué es inteligencia emocional?' />
                <div className="row justify-content-center h-100"> 
                <div className="card" id="CardInfo">
                    <div className="card-body">
                        <p className='P__informacion1'>Se define como el subconjunto de la inteligencia social que implica la capacidad de monitorizar los sentimientos y emociones propios y de los demás, de discriminar entre ellos y utilizar esta información para guiar el pensamiento de uno y acciones.</p>
                    </div>
                </div>
            </div>
            </body>
            

        )
    }
}
export default Informacion;