import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PagInicioRegistrados from './pages/PagInicioRegistrados';
import PagActividades from './pages/PagActividades';
import PagTemporizador from './pages/PagTemporizador';
import PagConocerEmociones from './pages/PagConocerEmociones';
import PagEmocionesDemas from './pages/PagEmocionesDemas';
import PagManejarEmociones from './pages/PagManejarEmociones';
import PagManejarRelaciones from './pages/PagManejarRelaciones';
import PagMotivacionPropia from './pages/PagMotivacionPropia';
import PagCambioIcono from './pages/PagCambioIcono';
import PagInicioNoRegistrados from './pages/PagInicioNoRegistrados';
import AdminPerfil from './pages/PagPerfilAdmin'
import BonhomiaAdmin from './pages/PagAdmin'
import BonhomiaAdminactividades from './pages/PagAdminActividades'
import Musica from './pages/PagMusica'
import InicioSesion from './pages/InicioSesion';
import Perfil from './pages/PerfilUsuario';
import Registros from './pages/Registro';
import Emociones from './pages/VentanaEmociones';
import Encuesta from './pages/PagEncuesta';
import ActDiario from './pages/PagActDiario';

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
                <Route exact path= '/bonhomia' component={PagInicioNoRegistrados}/>
                <Route exact path='/login' component={InicioSesion}/>
                <Route exact path='/perfiluser' component={Perfil}/>
                <Route exact path='/registro' component={Registros}/>
                <Route exact path='/estadoanimo' component={Emociones}/>
                <Route exact path='/bonhomia/encuesta'component={Encuesta} />
                <Route exact path='/bonhomia/actdiario'component={ActDiario} />
            </Switch>
        </BrowserRouter>
    )
}

export default Links;