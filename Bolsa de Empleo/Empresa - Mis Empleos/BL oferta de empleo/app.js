"use strict";

//Variables de las librerías
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const body_parser = require("body-parser");
const config = require("dotenv").config();

//Crear rutas
const ofertasRoutes = require("/");
const app = express();

//Establecer la seguridad y json
app.use(cors());
app.use(body_parser).json();
app.use(body_parser.urlencoded({ extended: false}));

//Configurar headers
app.use((request, response, next) =>{
    response.setHeader("Access-Control-Allow-Origin", '*');
    response.setHeader("Access-Control-Allow-Methods", "GET", "POST", "PUT", "OPTION", "PATCH", "DELETE");
    response.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

const db = mongoose.connect(process.env.MONGO_URI, {}).then((response) =>{
    console.log("CONNECTED TO DATABASE");

    app.listen(process.env.PORT, (response) =>{
        console.log(`Server listening at mongodb://localhost:${process.env.PORT}`);
    });
}, (error)=>{
    console.log("Error", error);
});

app.use(express.json());
app.use("/ofertas", ofertasRoutes);







