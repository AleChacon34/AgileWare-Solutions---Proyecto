'use strict';

const express = require('express');
const router = express.Router();
const buscadorController = require('../controllers/buscador.controller');

/**
 * GET BUSCADORES
 */
router.get('/', buscadorController.getBuscadores);

module.exports = router;