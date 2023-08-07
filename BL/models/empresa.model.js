'use strict';

const mongoose = require('mongoose');

const empresaModel = mongoose.Schema(
    {
        nombreEmpresa:{
            type: String
        },
        contraseniaEmpresa:{
            type: String
        },
        correoEmpresa:{
            type: String
        }, 
        fotoEmpresa:{
            type: String
        },
        archivosEmpresa:{
            type: String
        },
        telefonoEmpresa:{
            type: Number
        }
        
        
    },
    {
        timestamps: true,
        versionKey: false
    }
);
module.exports = mongoose.model('EmpresaModel', empresaModel);