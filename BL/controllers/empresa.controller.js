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
 * REGISTER EMPRESA
 */
async function registerEmpresa(req, res) {
    const { body } = req;
    const { nombreEmpresa } = body;
    const user = await empresaModel.findOne({ nombreEmpresa });

    if (!user) {
        const { body } = req;
        const data = await empresaModel.create(body);
        res.send({ data });
        res.status(200);
    } else {
        res.status(501);
        res.send({ errorMessage: "EL USUARIO YA EXISTE" });
    }
}

/**
 * LOGIN EMPRESA
 */
async function loginEmpresa(req, res) {
    const { body } = req;
    const { correoEmpresa, contraseniaEmpresa } = body;
    const user = await empresaModel.findOne({ correoEmpresa });

    if (user.contraseniaEmpresa == contraseniaEmpresa) {
        res.send({ user });
        res.status(201);
    } else {
        res.status(401);
        res.send({ errorMessage: "INGRESO NO VALIDO" });
    }

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

module.exports = { getEmpresa, postEmpresa, putEmpresa, deleteEmpresa,registerEmpresa,loginEmpresa};


