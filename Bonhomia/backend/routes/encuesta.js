const express = require('express');
const cors = require('cors')
const mysql = require('mysql');
const app = express();

const mysqlConnection = require('../db/db');

app.use(express.json());
app.use(cors());

app.post('/', (req,res)=>{
    const puntaje = req.body.score;
    
    console.log(puntaje)

    mysqlConnection.query('INSERT INTO encuesta (puntaje) VALUES(?)', 
    [puntaje], (err, result)=>{
        if (err) {
            return console.error(err.message);
        }
        res.json({ message:`Auth`, })
    });
});

module.exports = app;

