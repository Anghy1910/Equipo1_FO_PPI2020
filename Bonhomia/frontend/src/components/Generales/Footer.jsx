import React from 'react';
import '../../styles/Generales/footer.css';
import Derechos from '../../images/copyright.png';
class Footer extends React.Component{
    render(){
        return(        
    <footer class="footer">
        <div class="icons-social">
            <ul class="list-social">

                <li class="icons-social__item"><a class="icons-social__link text-light mr-2" href="#"><i class="icons-social__i fab fa-facebook"></i></a></li>
                <li class="icons-social__item"><a class="icons-social__link text-light mr-2" href="#"><i class="icons-social__i fab fa-instagram"></i></a></li>
                <li class="icons-social__item"><a class="icons-social__link text-light mr-2" href="#"><i class="icons-social__i fab fa-twitter"></i></a></li>

            </ul>
            <div class="container-footer">
        <p><img src={Derechos} className="Derechos" />Todos los derechos reservados</p>
    </div>
        </div>
    </footer>
        )
    }
}

export default Footer;