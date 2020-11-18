import React from 'react';

class Musica extends React.Component{
    render(){
        return(
            <div>
                <iframe width="100%" height="600" scrolling="no"  allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/319656316&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                    <div className="musica" >
                        <a href="https://soundcloud.com/ilyanaazman" title="ilyana azman" target="_blank" ></a> 
                        <a href="https://soundcloud.com/ilyanaazman/sets/best-of-mrrevillz" title="Best Of MrRevillz" target="_blank" ></a>
                    </div>
            </div>
        )
    }
}
export default Musica;