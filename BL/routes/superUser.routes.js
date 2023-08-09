'use strict';

const express = require('express');
const router = express.Router();
const superUserControllers = require('../controllers/superUser.controller');

/**
 * GET SUPERUSER
 */
router.get('/', superUserControllers.getSuperUsers);

/**
 * REGISTER SUPERUSER
 */
router.post('/register', superUserControllers.registerSuperUser);

/**
 * LOGIN SUPERUSER
 */
router.post('/login', );

/**
 * PUT SUPERUSER
 */
router.put('/:id', );

module.exports = router;