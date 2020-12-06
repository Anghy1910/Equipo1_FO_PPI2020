const { Router } = require("express");
const router = Router();
const mysqlConnection = require('../db/db');
const cors = require('cors')

router.use(cors());

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario  ', (err, rows, fields) => {
        if (!err) {
            res.json(rows[0])
        } else {
            console.log(err);
        }
    })
})

router.delete('/co', (req, res) => {
    const { id_usuario } = req.params;
    mysqlConnection.query('DELETE FROM usuario WHERE id_usuario < 100  ', [id_usuario], (err, rows, fields) => {
        if (!err) {
            res.json({ status: "Listo" });
        } else {
            console.log(err)
        }
    })
})
module.exports = router;