'use strict';


const express = require('express');
const bodyParser = require('body-parser');

const Persona = require('./routes/persona');
const Secret = require('./routes/secret');
const Login = require('./routes/login');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/api/persona', Persona);
app.use('/api/secret', Secret);
app.use('/api/login', Login);

module.exports = app;