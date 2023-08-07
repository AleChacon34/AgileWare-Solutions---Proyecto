'use strict';

const express = require('express');
const router = express.Router();
const buscadorController = require('../controllers/empresa.controller');

/**
 * GET BUSCADORES
 */
router.get('/', empresaController.getEmpresa);