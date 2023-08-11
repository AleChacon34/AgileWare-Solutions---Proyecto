"use strict";

const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    apellidos: {
      type: String,
    },
    correo: {
      type: String,
    },
    telefono: {
      type: Number,
    },
    genero: {
      type: String,
    },
    contrasenia: {
      type: String,
    },
    rol: {
      type: String,
      default: "Buscador",
    },
    foto: {
      type: Buffer,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


module.exports = mongoose.model('UserModel', userModel);