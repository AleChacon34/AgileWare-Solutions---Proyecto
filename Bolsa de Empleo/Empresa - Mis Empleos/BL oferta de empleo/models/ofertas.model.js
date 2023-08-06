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
    },

    {
        timestamps: true  
    }
);

module.exports = mongoose.model("ofertas", OfertaModel);