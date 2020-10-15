import React from 'react';
import upload from '../../images/upload.png'
import '../../styles/Admin/BannerAdmin.css'


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
            </section>
        )
    }
}
export default BannerAdmin;