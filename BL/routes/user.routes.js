'use strict';

const express = require('express')
const router = express.Router(); 
const userControllers = require('../controllers/user.controller');


//Get Usuario//

router.get('/',userControllers.getUsuario);

//Get Usuario id//

router.get('/:id', userControllers.getUsuarioID);

//Register Usuario//

router.get('/register', userControllers.registerUser);

//Login Usuario//

router.get('/login', userControllers.loginUser);

//Put Usuario//

router.get('/put', userControllers.putUsuario);

//Delete Usuario//

router.get('/delete', userControllers.deleteUsuario);

//Update Usuario//

router.get('/update', userControllers.updateUsuario);

module.exports = router;