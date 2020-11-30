const express = require('express');
const cors = require('cors')
const mysql = require('mysql');
const app = express();

const mysqlConnection = require('../db/db');

app.use(express.json());
app.use(cors());

app.post('/nueva-nota', (req, res) => {
    const title = req.body.titulo;
    const fecha = req.body.dia;
    const content = req.body.contenido;


    mysqlConnection.query('INSERT INTO notas (title,fecha,content) VALUES(?,?,?)',
        [title, fecha, content], (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            res.json({ message: `Auth`, })
        });
});
app.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM notas', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    })
})
module.exports = app;