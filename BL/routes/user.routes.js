'use strict';

const express = require('express')
const router = express.Router(); 
const userControllers = require('../controllers/user.controller');


//Get Usuario//

router.get('/',userControllers.getUsuario);

//Get Usuario id//

router.get('/:id', userControllers.getUsuarioID);

//Put Usuario//

router.put('/put', userControllers.putUsuario);

//Delete Usuario//

router.delete('/delete', userControllers.deleteUsuario);


module.exports = router;