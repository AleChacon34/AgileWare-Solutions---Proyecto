'use strict';

//Obtener Js de controller y llamar a Express
const ofertasController = require("../controllers/ofertas.controller");
const express = require("express");

//Activar rutas
const router = express.Router();

//GET Oferta
router.get("/", ofertasController.getOfertas);

//GET ONE oferta
router.get('/:id', ofertasController.getOneOferta);

//FILTER ofertas
router.post(`/filtro`, ofertasController.filterOferta)

//Post Oferta
router.post("/", ofertasController.postOferta);

//Update(put) Oferta
router.put("/:id", ofertasController.updateOferta);

//Delete Oferta
router.delete("/", ofertasController.deleteOferta);

module.exports = router;
