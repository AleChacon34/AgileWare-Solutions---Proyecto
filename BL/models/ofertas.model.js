'use strict'; 

//Call Mongoose
const mongoose = require("mongoose");

const OfertaModel = mongoose.Schema(
    {
        seccionTitulo: 
        {
            type: String
        },

        seccionRequerimientos:
        {
            type: String
        },

        seccionDescripcion: 
        {
            type: String
        },

        estadoOferta:
        {
            type: String
        },

        publicador: {
            type: mongoose.Types.ObjectId,
        },

        visibilidad:
        {
            type: String,
            default: "Activa"
        }
    },

    {
        timestamps: true,
        versionKey: false  
    }
);

module.exports = mongoose.model("ofertas", OfertaModel);