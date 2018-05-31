'use strict';

var LoginModel = require('../models/login');
var jwt = require('../services/jwt');


function welcome(req, res)
{
    LoginModel.welcome(data=>{
        return res.status(200).send("<h1 style='text-align: center'>" + data + "</h1>")
    });  
}

function login(req, res)
{
    let user = req.body;
    LoginModel.login(user, allow=>{
        if (!allow) return res.status(404).send({message: 'not allow'});
        
        return res.status(200).send({token: jwt.createToken(user)})
    });
}

var Login = {
    welcome,
    login
}

module.exports = Login;
