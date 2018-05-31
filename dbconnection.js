var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Realballz2016+',
    database: 'prueba_bd'
});

module.exports = connection;