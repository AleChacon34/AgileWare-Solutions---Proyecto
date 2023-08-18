'use strict';

const userModel = require('../models/user.model');

/**
 * REGISTER USER
 */
async function registerUser(req, res) {
    const { correo } = req.body;
    const user = await userModel.findOne({ correo });

    if (!user) {
        const { body } = req;
        const data = await userModel.create(body);
        res.status(200);
        res.send({ data });
    } else {
        res.status(500);
        res.send({ errorMessage: "USUARIO YA EXISTENTE" });
    }
    
}

/**
 * LOGIN USER
 */
async function loginUser(req, res) {
    const { correo, contrasenia } = req.body;
    const data = await userModel.findOne({ correo });
    console.log(data);
    
    if (data.contrasenia == contrasenia) {
        res.status(200);
        res.send({ data });
    } else {
        res.status(401);
        res.send({ errorMessage: "USUARIO NO AUTORIZADO" });
    }
}

module.exports = { registerUser, loginUser };