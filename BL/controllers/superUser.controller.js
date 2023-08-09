'use strict';

const superUserModel = require('../models/superUsuario.model');

/**
 * GET SUPERUSERS
 */
async function getSuperUsers(req, res) {
    const data = await superUserModel.find({});
    res.send({ data });
} 

/**
 * REGISTER SUPERUSER
 */
async function registerSuperUser(req, res) {
    const { body } = req;
    const data = await superUserModel.create(body);
    res.send({ data });
}

/**
 * LOGIN SUPERUSER
 */
async function loginSuperUser(req, res) {
    const { correo, contrasenia } = req.body;
    const data = await superUserModel.findOne({ correo });

    if (data.contrasenia === contrasenia) {
        res.send({ data });
    }
}

module.exports = { getSuperUsers, registerSuperUser };