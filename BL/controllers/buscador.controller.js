'use strict';

const buscadorModel = require('../models/buscador.model');

/**
 * GET BUSCADORES
 */
async function getBuscadores(req, res) {
    const data = await buscadorModel.find({});
    res.send({ data });
}

module.exports = { getBuscadores };