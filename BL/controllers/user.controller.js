'use strict';

const userModel = require("../models/user.model");

//GET USERS
async function getUsuario(request, response){
    const data = await userModel.find({});
    response.send({data});
};

//GET ONE USER
async function getUsuarioID(request, response){
    try {
        const { id } = request.params;
        const data = await userModel.findById(id);
        response.status(200);
        response.send({ data });
    } catch (e) {
        response.status(404);
        response.send({ errorMessage: "NO SE ENCONTRO EL USUARIO" });
    }
};

//UPDATE USER
async function putUsuario(request, response){
    const { id } = request.params;
    const { body } = request;
    const data = await userModel.findByIdAndUpdate(id, body);
    response.status(200);
    response.send({ data });
};

//DELETE USER
async function deleteUsuario(request, response){
    const { body } = request;
    const { _id } = body;
    const data = await userModel.findOneAndDelete({_id});
    response.send({data});
};

module.exports = { getUsuario, getUsuarioID, putUsuario, deleteUsuario };
