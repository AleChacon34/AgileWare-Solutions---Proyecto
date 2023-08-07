'use strict';

const express = require('express');
const router = express.router; 
const usuEmpresarialcontroller = require('../controllers/usuEmpresarial.controller');

//Login Usuario Empresarial//
router.post('/login', usuEmpresarialcontroller.loginusuEmpresarial);

//Register Usuario Empresarial//
router.post('/register'), (usuEmpresarialcontroller.registerusuarioEmpresarial);

//Get Usuario Empresarial//
router.get('/', usuEmpresarialcontroller.getusuarioEmpresarial);

//Update Usuario Empresarial//
router.get('/', usuEmpresarialcontroller.updateusuEmpresarial);

//Delete Usuario Empresarial //
router.delete('/',usuEmpresarialcontroller.deletusuEmpresarial);

module.exports = router;