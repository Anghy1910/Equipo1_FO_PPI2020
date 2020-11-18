const mysql = require('mysql');
const { route } = require('../routes/routes');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_bonhomia',
    multipleStatements: true
})

mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada')
    }
})

module.exports = mysqlConnection