'use strict';

const express = require('express');
const router = express.Router();
const buscadorController = require('../controllers/buscador.controller');

/**
 * GET BUSCADORES
 */
router.get('/', buscadorController.getBuscadores);

/**
 * POST BUSCADOR
 */
router.post('/', buscadorController.postBuscador);

/**
 * PUT BUSCADOR
 */
router.put('/', buscadorController.putBuscador);

/**
 * DELETE BUSCADOR
 */
router.delete('/', buscadorController.deleteBuscador);

module.exports = router;