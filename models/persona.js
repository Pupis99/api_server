'use strict';

var db = require('../dbconnection');

function welcome(callback)
{
    return callback("Welcome desde persona");
}


function getPersonas(callback)
{

    return db.query("select * from persona", callback);
}

function addPersona(persona, callback)
{
    return db.query("insert into persona set ?", persona, callback);
}


var Persona =
{
    welcome,
    getPersonas,
    addPersona
}

module.exports = Persona;