const express = require("express");
const app = express();
const routes = require('./routes/routes');
const registro = require('./routes/registro.js');

//AJUSTES
app.set('port', 4000); 

//MIDLEWARE
app.use(express.json());

//RUTAS
app.get('/', (req, res) => {
    res.send('Nuestra primera app Express-MySQL');
})

app.use('/api', routes)
app.use('/api/registro', registro)

//AJUSTES SERVIDOR
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get(`port`)}`)
});