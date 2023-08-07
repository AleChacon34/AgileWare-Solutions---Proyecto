'use strict';

const empresaModel = require('../models/empresa.model');

/**
 * GET EMPRESA
 */
async function getEmpresa(req, res) {
    const data = await empresaModel.find({});
    res.send({ data });
}

/**
 * POST EMPRESA
 */
async function postEmpresa(req, res) {
    const { body } = req;
    const data = await empresaModel.create(body);
    res.send({ data });
}


/**
 * PUT EMPRESA
 */
async function putEmpresa(req, res) {
    const { body } = req;
    const { nombreEmpresa } = body;
    const data = await empresaModel.findOneAndUpdate({ nombreEmpresa }, body);
    res.send({ data });
}

/**
 * DELETE EMPRESA
 */
async function deleteEmpresa(req, res) {
    const { body } = req;
    const { nombreEmpresa } = body;
    const data = await empresaModel.findOneAndDelete({nombreEmpresa});
    res.send({ data });
}

module.exports = { getEmpresa, postEmpresa, putEmpresa, deleteEmpresa };


