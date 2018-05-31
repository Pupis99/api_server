'use strict';

var express = require('express');
var router = express.Router();
var PersonaController = require('../controllers/persona');


router.get('/welcome', PersonaController.welcome);
router.get('/', PersonaController.getPersonas);
router.post('/', PersonaController.addPersona);

module.exports = router;