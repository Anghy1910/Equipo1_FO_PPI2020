const express = require('express');
const cors = require('cors')
const mysql = require('mysql');
const app = express();

const mysqlConnection = require('../db/db');

app.use(express.json());
app.use(cors());

app.post('/nuevo-registro', (req,res)=>{
    const nombre_usuario = req.body.name;
    const username = req.body.user;
    const correo = req.body.email;
    const contraseña = req.body.contra;
    const edad = req.body.age;
    const genero = req.body.gender;
    const mascota = req.body.pet;

    mysqlConnection.query('INSERT INTO usuario (nombre_usuario, username, correo, contraseña, edad, genero, mascota) VALUES(?,?,?,?,?,?,?)', 
    [nombre_usuario, username, correo, contraseña, edad, genero, mascota], (err, result)=>{
        if (err) {
            return console.error(err.message);
        }
        res.json({ message:`Auth`, })
    });
});

module.exports = app;

