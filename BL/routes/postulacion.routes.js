'use strict';

const express = require('express');
const router = express.Router();
const postulacionController = require('../controllers/postulacion.controller');

/**
 * GET POSTULACIONES
 */
router.get('/', postulacionController.getPostulaciones);

/**
 * GET ON POSTULACION
 */
router.get('/:id', postulacionController.getOnePostulacion);

/**
 * CREATE POSTULACION
 */
router.post('/', postulacionController.createPostulacion);

/**
 * UPDATE POSTULACION
 */
router.put('/:id', postulacionController.updatePostulacion);

/**
 * DELETE POSTULACION
 */
router.delete('/:id', postulacionController.deletePostulacion);


module.exports = router;