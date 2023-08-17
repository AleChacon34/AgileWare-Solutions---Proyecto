'use strict';

const userControllers = require('../controllers/user.controller');
const express = require('express')
const router = express.Router(); 


//Get Usuario//
router.get('/',userControllers.getUsuario);

//Get Usuario id//
router.get('/:id', userControllers.getUsuarioID);

//Get usuario por correo
router.post('/emailFilter', userControllers.getUserByEmail);

//Filter Usuario
router.post(`/filtro`, userControllers.filterUsuario);

//Put Usuario//
router.put('/:id', userControllers.putUsuario);

//UPDATE PASSWORD
router.put('/', userControllers.updatePassword);

//Delete Usuario//
router.delete('/:id', userControllers.deleteUsuario);


module.exports = router;