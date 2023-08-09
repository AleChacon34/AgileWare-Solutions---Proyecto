'use strict';

const userModel = require("../models/user.model");

//GET

async function getUser(request, response){
    const data = await userModel.find({});
    response.send({data});
};

//POST

async function postUser(request, response){
    const {body} = request;
    const data = await userModel.create(body);
    response.send({data});
};

//PUT
async function putUser(request, response){
    const {body} = request;
    const {_id} = body;
    const data = await userModel.findOneAndUpdate({_id}, body);
    response.send({data});
};

//DELETE

async function deleteUser(request, response){
    const {body} = request;
    const {_id} = body;
    const data = await userModel.findOneAndDelete({_id});
    response.send({data});
};

module.exports={getUser,postUser,putUser,deleteUser};
