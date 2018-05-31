'use strict';

var jwt = require('../services/jwt');
var PersonaModel = require('../models/persona');

function welcome(req, res)
{
    PersonaModel.welcome(data=>{
        return res.status(200).send("<h1 style='text-align: center'>" + data + "</h1>");
    });
}

function getPersonas(req, res)
{
    PersonaModel.getPersonas((error, personas)=>{
        if (error) return res.status(500).send({Error: error});

        return res.status(200).send(personas);
    });
}


function addPersona(req, res)
{
    let persona = req.body;

    PersonaModel.addPersona(persona, (error, filas)=>{
        if (error) return res.status(500).send(error);

        return res.status(200).send(filas);
    });
}

var Persona =
{
    welcome,
    getPersonas,
    addPersona
}


module.exports = Persona;