'use strict';

const express = require('express');
const router = express.Router();
const buscadorController = require('../controllers/buscador.controller');

/**
 * GET BUSCADORES
 */
router.get('/', buscadorController.getBuscadores);

/**
 * GET ONE BUSCADOR
 */
router.get('/:id', buscadorController.getOneBuscador);

/**
 * REGISTER BUSCADOR
 */
router.post('/register', buscadorController.registerBuscador);

/**
 * LOGIN BUSCADOR
 */
router.post('/login', buscadorController.loginBuscador);

/**
 * PUT BUSCADOR
 */
router.put('/', buscadorController.putBuscador);

/**
 * DELETE BUSCADOR
 */
router.delete('/', buscadorController.deleteBuscador);

module.exports = router;