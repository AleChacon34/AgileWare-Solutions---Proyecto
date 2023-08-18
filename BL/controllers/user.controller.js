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

//GET USER BY EMAIL
async function getUserByEmail(req, res) {
    const { body } = req;
    const { correo } = body;
    const data = await userModel.find({ correo });
    res.send({ data }); 
}

//FILTER
async function filterUsuario(request, response) {
    const { rol } = request.body;
    const data = await userModel.find({rol});
    response.send({ data });
};

//UPDATE PASSWORD
async function updatePassword(req, res) {
    const { body } = req;
    const { correo } = body;
    const data = await userModel.findOneAndUpdate({ correo }, body);
    res.status(200);
    res.send({ data });
}

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

module.exports = { getUsuario, getUsuarioID, updatePassword, putUsuario, deleteUsuario, filterUsuario, getUserByEmail };
