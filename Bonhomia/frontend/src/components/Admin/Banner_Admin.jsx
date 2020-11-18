import React from 'react';
import {Link} from 'react-router-dom';
import upload from '../../images/upload.png'
import '../../styles/Admin/BannerAdmin.css'
import ButtonAdmin from '../Generales/Button'

class BannerAdmin extends React.Component {
    render() {
        return (
            <section>
                <div>
                    <div className="Banner">
                        <div>
                            <a href="/"><img src={upload} height="auto" width="auto" id="Banner_Admin-img" alt=""/></a>   
                        </div>
                    </div> 
                    <br/>
                </div>
                <Link to="/bonhomia/adminactividades"><ButtonAdmin Button="Subir"/></Link>

            </section>
        )
    }
}
export default BannerAdmin;