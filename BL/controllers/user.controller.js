'use strict';

const userModel = require("../models/user.model");

//GET

async function getUsuario(request, response){
    const data = await userModel.find({});
    response.send({data});
};

//GET ID

async function getUsuarioID(request, response){
    const data = await userModel.find({});
    response.send({data});
};

//PUT
async function putUsuario(request, response){
    const {body} = request;
    const {_id} = body;
    const data = await userModel.findOneAndUpdate({_id}, body);
    response.send({data});
};

//DELETE

async function deleteUsuario(request, response){
    const {body} = request;
    const {_id} = body;
    const data = await userModel.findOneAndDelete({_id});
    response.send({data});
};

module.exports={getUsuario,getUsuarioID,putUsuario,deleteUsuario};
