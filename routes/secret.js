'use strict';

var express = require('express');
var router = express.Router();
var SecretController = require('../controllers/secret');

var middleware = require('../middleware/middleware');

router.get('/welcome', middleware.ensureAuth, SecretController.welcome);

module.exports = router;