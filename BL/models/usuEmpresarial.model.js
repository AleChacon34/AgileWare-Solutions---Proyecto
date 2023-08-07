'use strict';

const mongoose = require ("mongoose");

const usuEmpresarialModel =  mongoose.Schema(
    {
        usuarioempresarial:{
            type: String
        },
        usuEmpresarialApellido:{
            type: String
        },
        correo:{
            type: String
        },
        numeroTelefono:{
            type: String
        },
        seleccionGenero:{
            type: String
        },
        contrasenia:{
            type: String
        },
        verifycontrasenia:{
            type: String
        }
    },
);
module.exports = mongoose.model ('usuEmpresarial', usuEmpresarialModel)