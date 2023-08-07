'use strict';

const mongoose = require('mongoose');

const buscadorModel = mongoose.Schema(
    {
        nombreBuscador: {
            type: String
        }, 
        apellidosBuscador: {
            type: String
        },
        correoBuscador: {
            type: String
        },
        telefonoBuscador: {
            type: Number
        },
        generoBuscador: {
            type: String
        },
        contraseniaBuscador: {
            type: String
        }, 
        rol: {
            type: String,
            default: "buscador",
        },
        fotoPerfil: {
            type: Buffer
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('BuscadorModel', buscadorModel);