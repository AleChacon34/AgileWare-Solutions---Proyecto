'use strict';

const mongoose = require ("mongoose");

const usuEmpresarialModel =  mongoose.Schema(
    {
        nombreUsuarioEmpresarial:{
            type: String
        },
        apellidoUsuarioEmpresarial:{
            type: String
        },
        correoUsuarioEmpresarial:{
            type: String
        },
        telefonoUsuarioEmpresarial:{
            type: Number
        },
        generoUsuarioEmpresarial:{
            type: String
        },
        contrasennaUsuarioEmpresarial:{
            type: String
        },
    }
);
module.exports = mongoose.model ('usuarioEmpresarial', usuEmpresarialModel)