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
 * GET ONE BUSCADOR
 */
async function getOneBuscador(req, res) {
    const { id } = req.params;
    const data = await buscadorModel.findById(id);
    res.send({ data });
}

/**
 * REGISTER BUSCADOR
 */
async function registerBuscador(req, res) {
    const { body } = req;
    const { correoBuscador } = body;
    const user = await buscadorModel.findOne({ correoBuscador });

    if (!user) {
        const { body } = req;
        const data = await buscadorModel.create(body);
        res.send({ data });
        res.status(200);
    } else {
        res.status(501);
        res.send({ errorMessage: "EL USUARIO YA EXISTE" });
    }
}

/**
 * LOGIN BUSCADOR
 */
async function loginBuscador(req, res) {
    const { body } = req;
    const { correoBuscador, contraseniaBuscador } = body;
    const user = await buscadorModel.findOne({ correoBuscador });

    if (user.contraseniaBuscador == contraseniaBuscador) {
        res.send({ user });
        res.status(201);
    } else {
        res.status(401);
        res.send({ errorMessage: "INGRESO NO VALIDO" });
    }

}

/**
 * PUT BUSCADOR
 */
async function putBuscador(req, res) {
    const { id } = req.params;
    const { body } = req;
    const data = await buscadorModel.findByIdAndUpdate(id, body);
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

module.exports = { getBuscadores, getOneBuscador, registerBuscador, loginBuscador, putBuscador, deleteBuscador };