    'use strict';

const OfertaModel = require("../models/ofertas.model");

// Crear funciones de CRUD
//GET

async function getOfertas(request, response){
    const data = await OfertaModel.find({});
    response.send({data});
};

//GET ONE

async function getOneOferta(request, response) {
    const { id } = request.params;
    const data = await OfertaModel.findById(id);
    response.send({ data });
}

//POST

async function postOferta(request, response){
    const {body} = request;
    const data = await OfertaModel.create(body);
    response.send({data});
};

//UPDATE(PUT)
async function updateOferta(request, response){
    const {body} = request;
    const { id } = request.params;
    const data = await OfertaModel.findByIdAndUpdate(id, body);
    response.send({data});
};

//DELETE

async function deleteOferta(request, response){
    const {body} = request;
    const { id } = request.params;
    const data = await OfertaModel.findByIdAndDelete(id, body);
    response.send({data});
};



module.exports = {getOfertas, postOferta, getOneOferta, updateOferta, deleteOferta};
