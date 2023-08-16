'use strict';

const postulacionModel = require('../models/postulacion.model');

/**
 * GET POSTULACIONES
 */
async function getPostulaciones(req, res) {
    const data = await postulacionModel.find({});
    res.send({ data });
}

/**
 * GET ONE POSTULACION
 */
async function getOnePostulacion(req, res) {
    const { id } = req.params;
    const data = await postulacionModel.findById(id);
    res.send({ data });
}

/**
 * CREATE POSTULACION
 */
async function createPostulacion(req, res) {
    const { body } = req;
    const { _id } = body;
    const postulacion = await postulacionModel.findOne({_id});

    if (!postulacion) {
        const { body } = req;
        const data = await postulacionModel.create(body);
        res.send({ data });
    }
}

/**
 * UPDATE POSTULACION
 */
async function updatePostulacion(req, res) {
    const { id } = req.params;
    const { body } = req;
    const data = await postulacionModel.findByIdAndUpdate(id, body);
    res.send({ data });
}

async function deletePostulacion(req, res) {
    const { id } = req.params;
    const data = await postulacionModel.findByIdAndDelete(id);
    res.send({ data });
}

module.exports = { getPostulaciones, getOnePostulacion, createPostulacion, updatePostulacion, deletePostulacion }