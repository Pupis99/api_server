'use strict';


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const Persona = require('./routes/persona');
const Secret = require('./routes/secret');
const Login = require('./routes/login');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



//app.use(express.static(path.join(__dirname, 'logacode')));
app.use('/', express.static('logacode', {redirect: false}));
app.use('/api/persona', Persona);
app.use('/api/secret', Secret);
app.use('/api/login', Login);

/*app.get('*', function(req, res, next)
{
    res.sendFile(path.resolve('logacode/index.html'));
});*/

module.exports = app;