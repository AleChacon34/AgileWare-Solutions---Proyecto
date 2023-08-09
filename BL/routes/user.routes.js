'use strict';

const userControllers = require('../controllers/user.controller');
const express = require('express')
const router = express.Router(); 


//Get Usuario//

router.get('/',userControllers.getUsuario);

//Get Usuario id//

router.get('/:id', userControllers.getUsuarioID);

//Put Usuario//

router.put('/put', userControllers.putUsuario);

//Delete Usuario//

router.delete('/delete', userControllers.deleteUsuario);


module.exports = router;