'use strict';

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_pupis';

exports.createToken = function(user) {
    var payload = {
        nombre: user.nombre,
        pass: user.pass,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };
    console.log(payload.id);

    return jwt.encode(payload, secret);
}