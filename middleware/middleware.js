'use strict';

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_pupis';

exports.ensureAuth = function(req, res, next)
{
    //console.log(req.headers);
    if (!req.headers.authorization)
    {
        return res.status(403).send({message: 'La petición no tiene cabecera de autenticación'});
    }

    var token = req.headers.authorization.replace(/['"]+/g, '');

    try {
        var payload = jwt.decode(token, secret);

        if (payload.exp <= moment().unix())
        {
            return res.status(401).send({message: 'Token expirado'});
        }
    }
    catch (ex) {
        return res.status(404).send({message: 'Token no es válido'});
    }

    //console.log(payload);
    req.user = payload;

    //console.log(req.user);
    next();
}