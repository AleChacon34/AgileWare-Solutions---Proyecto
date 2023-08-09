'use strict';

const userModel = require('../models/auth.model');

/**
 * REGISTER USER
 */
async function registerUser(req, res) {
    const { body } = req;
    const data = await userModel.create(body);
    res.status(200);
    res.send({ data });
}

module.exports = { registerUser };