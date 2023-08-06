'use strict';

const OfertaModel = require("../model/ofertas.model");

// Crear funciones de CRUD
//GET

async function getOfertas(request, response){
    const data = await OfertaModel.find({});
    response.send({data});
};

//POST

async function postOferta(request, response){
    const {body} = request;
    const data = await OfertaModel.create(body);
    response.send({data});
};

//UPDATE(PUT)
async function updateOferta(request, response){
    const {body} = request;
    const {_id} = body;
    const data = await OfertaModel.findOneAndUpdate({_id}, body);
    response.send({data});
};

//DELETE

async function deleteOferta(request, response){
    const {body} = request;
    const {_id} = body;
    const data = await OfertaModel.findOneAndDelete({_id});
    response.send({data});
};



module.exports = {getOfertas, postOferta, updateOferta, deleteOferta};
