'use strict';

const express = require('express');
const controller = require('./register.controller');

const router = express.Router();

router.post('/', controller.registerUser);

module.exports = router;
