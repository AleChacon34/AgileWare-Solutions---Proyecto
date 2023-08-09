'use strict';

const mongoose = require('mongoose');

const SuperUserModel = mongoose.Schema(
    {
        nombreUsuario: {
            type: String
        }, 
        correo: {
            type: String
        },
        telefono: {
            type: Number
        }, 
        rol: {
            type: String,
            default: "superusuario"
        },
        contrasenia: {
            type: String
        }
    },
    {
        timestamps: true,
        versionkey: false
    }
);

module.exports = mongoose.model('SuperUserModel', SuperUserModel);