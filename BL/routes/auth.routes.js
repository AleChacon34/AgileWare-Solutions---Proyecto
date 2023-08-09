'use strict';

const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth.controller');

/**
 * REGISTER USER
 */
router.post('/register', authControllers.registerUser);

/**
 * LOGIN USER
 */
router.post('/login');

module.exports = router;