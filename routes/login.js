'use strict'

var express = require('express');
var router = express.Router();



var LoginController = require('../controllers/login');


router.get('/welcome', LoginController.welcome);
router.post('/', LoginController.login);

module.exports = router;