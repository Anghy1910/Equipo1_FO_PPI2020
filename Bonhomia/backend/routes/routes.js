const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/db');

router.get('/usuarios', (req, res) => {

    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});
router.post('/nuevo-usuario', (req, res) => {
    const { nombre_usuario, correo, fecha_registro, contraseña} = req.body;

    let usuario = [nombre_usuario, correo, fecha_registro, contraseña];

    let nuevoUsuario = 'INSERT INTO usuario(nombre_usuario, correo, fecha_registro, contraseña) VALUES(?,?,?,?)';

    mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields) => {
        if (err) {
            return console.error(err.message)
        }
        res.json({ message: "Usuario registrado" })
    })
});

module.exports = router;