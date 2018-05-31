'use strict';

var SecretModel = require('../models/secret');

function welcome(req, res)
{
    SecretModel.welcome(data=>{
        return res.status(200).send("<h1 style='text-align: center'>" + data + req.user.nombre + "</h1>");
    });
}

var Secret = {
    welcome
}

module.exports = Secret;