'use strict';


function welcome(callback)
{
    return callback("Welcome from login");
}

function login(user, callback)
{
    return callback(user.nombre == "Cristopher" && user.pass == "Mendoza");
}

var Login = {
    welcome,
    login
}

module.exports = Login;
