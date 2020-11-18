import React from 'react';
import '../../styles/InicioNoRegistrados/cardsNoregistrados.css';
import inteligencia from '../../images/1Carrusel.png'
import objetivo from '../../images/2Carrusel.png'
import quienes from '../../images/3Carrusel.png'
import TituloPrincipal from '../Generales/TituloPrincipal.jsx'

class Carrusel extends React.Component{
    render (){
        return (
          <body>
            <TituloPrincipal TituloPrincipal='Bienvenido a Bonhomia' />
            <div className="container  btext">
              <div className="row">
                  <div className="col-6 contenedor">
                    <img className="img-fluid imagen shadow-lg p-3 mb-3 mt-3 rounded" src={quienes}/>
                  </div>
                  <div className="col-6 contenedor">
                    <img className="img-fluid imagen shadow-lg p-3 mb-3 mt-3 rounded" src={objetivo} />
                  </div>
                  <div className="col-6 contenedor" className="cardQuienes">
                    <img className="img-fluid imagen shadow-lg p-3 mb-3 mt-3 rounded" src={inteligencia} />
                  </div>
              </div>
          </div>
          </body>
          

            
        )
    }
}
export default Carrusel;
