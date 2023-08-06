'use strict';

const buscadorModel = require('../models/buscador.model');

/**
 * GET BUSCADORES
 */
async function getBuscadores(req, res) {
    const data = await buscadorModel.find({});
    res.send({ data });
}

/**
 * POST BUSCADOR
 */
async function postBuscador(req, res) {
    const { body } = req;
    const data = await buscadorModel.create(body);
    res.send({ data });
}

/**
 * PUT BUSCADOR
 */
async function putBuscador(req, res) {
    const { body } = req;
    const { nombreBuscador, apellidosBuscador } = body;
    const data = await buscadorModel.findOneAndUpdate({ nombreBuscador, apellidosBuscador }, body);
    res.send({ data });
}

/**
 * DELETE BUSCADOR
 */
async function deleteBuscador(req, res) {
    const { body } = req;
    const { nombreBuscador, apellidosBuscador } = body;
    const data = await buscadorModel.findOneAndDelete({nombreBuscador, apellidosBuscador});
    res.send({ data });
}

module.exports = { getBuscadores, postBuscador, putBuscador, deleteBuscador };