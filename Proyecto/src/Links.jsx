import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PagInicioRegistrados from './frontend/pages/PagInicioRegistrados';
import PagActividades from './frontend/pages/PagActividades';
import PagTemporizador from './frontend/pages/PagTemporizador';
import PagConocerEmociones from './frontend/pages/PagConocerEmociones';
import PagEmocionesDemas from './frontend/pages/PagEmocionesDemas';
import PagManejarEmociones from './frontend/pages/PagManejarEmociones';
import PagManejarRelaciones from './frontend/pages/PagManejarRelaciones';
import PagMotivacionPropia from './frontend/pages/PagMotivacionPropia';
import PagCambioIcono from './frontend/pages/PagCambioIcono';
import Bonhomiauno from './frontend/pages/PagInicioNoRegistrados';
import AdminPerfil from './frontend/pages/PagPerfilAdmin'
import BonhomiaAdmin from './frontend/pages/PagAdmin'
import BonhomiaAdminactividades from './frontend/pages/PagAdminActividades'
import Musica from './frontend/pages/PagMusica'

function Links (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/bonhomia/inicio'component={PagInicioRegistrados} />
                <Route exact path='/bonhomia/actividades'component={PagActividades} />
                <Route exact path='/bonhomia/temporizador'component={PagTemporizador} />
                <Route exact path='/bonhomia/actividades/conoceremociones'component={PagConocerEmociones} />
                <Route exact path='/bonhomia/actividades/emocionesdemas'component={PagEmocionesDemas} />
                <Route exact path='/bonhomia/actividades/manejaremociones'component={PagManejarEmociones} />
                <Route exact path='/bonhomia/actividades/manejarrelaciones'component={PagManejarRelaciones} />
                <Route exact path='/bonhomia/actividades/motivacionpropia'component={PagMotivacionPropia} />
                <Route exact path='/bonhomia/perfil/cambioicono'component={PagCambioIcono} />
                <Route exact path= '/bonhomia/admin' component={BonhomiaAdmin}/>
                <Route exact path= '/bonhomia/adminactividades' component={BonhomiaAdminactividades}/>
                <Route exact path= '/bonhomia/perfiladmin' component={AdminPerfil}/>
                <Route exact path= '/bonhomia/musica' component={Musica}/>
                <Route exact path= '/bonhomia' component={Bonhomiauno}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Links;