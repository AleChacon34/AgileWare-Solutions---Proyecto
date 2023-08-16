'use strict';

const mongoose = require('mongoose');

const PostulacionModel = mongoose.Schema(
    {
        idOferta: {
            type: mongoose.Types.ObjectId
        },
        idPostulante: {
            type: mongoose.Types.ObjectId
        },
        estado: {
            type: String
        },
        visibilidad: {
            type: String,
            default: "Activa"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('Postulaciones', PostulacionModel);