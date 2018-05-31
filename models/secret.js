'use strict';

function welcome(callback)
{
    return callback("Welcome from protected user ");
}

var Secret = {
    welcome
}

module.exports = Secret;