'use strict';

const usuEmpresarialModel = require ('../models/usuEmpresarial.model');



//Log in Usuario Empresarial // 
async  function loginusuEmpresarial (req, res){
    const {body} = req;
    const {correo, contrasenia} = body;
    const user = await usuEmpresarialModel.findOne({correo});
    if (user.contrasenia == contrasenia){
        res.send({user});
        res.status(201);
    } else {
        res.status(401);
        res.send({errorMessage: "Ingreso no valido"})
    }
}

//Register Usuario Empresarial//
async function registerusuarioEmpresarial(req, res){
    const {body} = req;
    const {usuarioempresarial, usuEmpresarialApellido} = body;
    const user = await usuEmpresarialModel.findOne({usuarioempresarial, usuEmpresarialApellido});
    if (!user){
        const {body} = req
        const data = await usuEmpresarialModel.create(body);
        res.send({data});
        res.status(200);
    } else {
        res.status(501);
        res.send({errorMessage: "Este usuario ya existe"});
    }
}

//Get Usuario Empresarial //
async function getusuarioEmpresarial(req, res){
    const data = await usuEmpresarialModel.find({});
    res.send({data});
}

//Update Usuario Empresarial//
async function updateusuEmpresarial(req, res){
    const {body} = req;
    const {usuarioempresarial, usuEmpresarialApellido} = body;
    const data = await usuEmpresarialModel.findOneandUpdate({usuarioempresarial, usuEmpresarialApellido}, body);
    res.send({data});
}

//Delete Usuario Empresarial//
async function deletusuEmpresarial(req, res){
    const {body} = req;
    const {usuarioempresarial, usuEmpresarialApellido} = body;
    const data = await usuEmpresarialModel.findOneandDelete({usuarioempresarial, usuEmpresarialApellido}, body);
    res.send({data});
}

module.exports = {loginusuEmpresarial,registerusuarioEmpresarial,getusuarioEmpresarial,updateusuEmpresarial,deletusuEmpresarial};