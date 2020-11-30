const express = require("express");
const app = express();
const registro = require('./routes/registro.js');
const encuesta = require ('./routes/encuesta.js');
const perfil = require ('./routes/Perfil'); 
const notas = require('./routes/Notas.js');

//AJUSTES
app.set('port', 4000); 

//MIDLEWARE
app.use(express.json());

//RUTAS
app.get('/', (req, res) => {
    res.send('Nuestra primera app Express-MySQL');
})

app.use('/api/registro', registro);
app.use('/api/encuesta', encuesta);
app.use('/api/perfil', perfil);
app.use('/api/notas', notas);

//AJUSTES SERVIDOR
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get(`port`)}`)
});