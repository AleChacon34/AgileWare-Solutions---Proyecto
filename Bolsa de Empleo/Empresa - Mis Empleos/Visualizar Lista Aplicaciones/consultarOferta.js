'use strict'
import { OfertaService } from "../../services/consultarOferta.services.js";
import { Oferta } from "../Crear Oferta de Empleo/oferta.model.js";

// let dataList = [{seccionTitulo: "Ingenieria", seccionRequerimientos: "Ninguno", seccionDescripcion: "Lorem Ipsum"}];

document.addEventListener("DOMContentLoaded", ()=>{
    OfertaService.findOne("64d3f9bde22bc595f416a70c").then((response) =>{
        let data = response.data.data;
        console.log(data);
        verOferta
    })
})

function verOferta(data){
    //Crear Div principal
    let addDiv = document.createElement()
    
    
    
    let estadoOferta = document.querySelector(".estado-oferta");
    console.log(estadoOferta);
    if (estadoOferta.textContent == "Oferta pública"){
        console.log("Oferta Pública");
        estadoOferta.removeAttribute("id");
        estadoOferta.setAttribute("id", "oferta-publica");
    }
    else if (estadoOferta.textContent == "Oferta oculta"){
        estadoOferta.removeAttribute("id");
        estadoOferta.setAttribute("id", "oferta-oculta");
        console.log("Oferta Oculta")
    }
    else{
        console.log("No funciona")
    }
}
