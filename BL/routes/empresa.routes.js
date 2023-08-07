'use strict';

const express = require('express');
const empresaController = require('../controllers/empresa.controller');

/**
 * GET EMPRESA
 */
router.get('/', empresaController.getEmpresa);
/**
 * REGISTER EMPRESA
 */
router.post('/register', empresaController.registerEmpresa);

/**
 * LOGIN EMPRESA
 */
router.post('/login', empresaController.loginEmpresa);

/**
 * PUT EMPRESA
 */
router.put('/', empresaController.putEmpresa);

/**
 * DELETE EMPRESA
 */
router.delete('/', empresaController.deleteEmpresa);

module.exports = router;
