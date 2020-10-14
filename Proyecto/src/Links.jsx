import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import PagInicioRegistrados from '../pages/PagInicioRegistrados';
// import PagActividades from '../pages/PagActividades';
// import PagTemporizador from '../pages/PagTemporizador';
// import PagConocerEmociones from '../pages/PagConocerEmociones';
// import PagEmocionesDemas from '../pages/PagEmocionesDemas';
// import PagManejarEmociones from '../pages/PagManejarEmociones';
// import PagManejarRelaciones from '../pages/PagManejarRelaciones';
// import PagMotivacionPropia from '../pages/PagMotivacionPropia';
// import PagCambioIcono from '../pages/PagCambioIcono';

function Links (){
    return(
        <BrowserRouter>
            <Switch>
                {/* <Route exact path='/bonhomia/inicio'component={PagInicioRegistrados} />
                <Route exact path='/bonhomia/actividades'component={PagActividades} />
                <Route exact path='/bonhomia/temporizador'component={PagTemporizador} />
                <Route exact path='/bonhomia/actividades/conoceremociones'component={PagConocerEmociones} />
                <Route exact path='/bonhomia/actividades/emocionesdemas'component={PagEmocionesDemas} />
                <Route exact path='/bonhomia/actividades/manejaremociones'component={PagManejarEmociones} />
                <Route exact path='/bonhomia/actividades/manejarrelaciones'component={PagManejarRelaciones} />
                <Route exact path='/bonhomia/actividades/motivacionpropia'component={PagMotivacionPropia} />
                <Route exact path='/bonhomia/perfil/cambioicono'component={PagCambioIcono} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Links;