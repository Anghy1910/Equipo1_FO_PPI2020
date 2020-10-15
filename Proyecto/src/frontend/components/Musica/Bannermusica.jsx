import React from 'react';
import Musica2 from '../../images/Musica2.png'
import '../../styles/Musica/Bannermusica.css'

class Bannermusica extends React.Component{
    render (){
        return(
            <section>
                <div>
                    <div className="Banner">
                        <div>
                            <img src={Musica2} id="Banner__img" />
                        </div>
                        <div>
                            <h1 id="Banner__texto">Música</h1>
                        </div> 
                    </div>
                </div>
            </section>
        )
    }
}
export default Bannermusica;