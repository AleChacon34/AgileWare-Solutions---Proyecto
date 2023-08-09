'use strict';

//Obtener Js de controller y llamar a Express
const ofertasController = require("../controllers/ofertas.controller");
const express = require("express");

//Activar rutas
const router = express.Router();

//GET Oferta
router.get("/", ofertasController.getOfertas);

//Post Oferta
router.post("/", ofertasController.postOferta);

//Update(put) Oferta
router.put("/", ofertasController.updateOferta);

//Delete Oferta
router.delete("/", ofertasController.deleteOferta);

module.exports = router;
