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
    let addDiv = document.createElement('div');
    //Crear section del div
    let addSec = document.createElement('section');
    //Crear h3, h4, textarea, anchor 
    let addH3I = document.createElement('h3');
    addH3I.setAttribute("id", "tituloOFerta");
    let addH4I = document.createElement('h4');
    addH4I.setAttribute("id", "requerimientos");
    let textareaI = document.createElement('p');
    textareaI.setAttribute("id", "requerimientosCuerpo");
    let addH4II = document.createElement('h4');
    addH4II.setAttribute("id", "descripcionOferta");
    let textareaII = document.createElement('p');
    textareaII.setAttribute("id", "descripcionCuerpo");
    let addAside =  document.createElement('aside');
    let addBtnI = document

    //Agregar texto a cada elemento desde datosOfertas
    addH3I.appendChild(document.createTextNode(data.seccionTitulo));
    addH4I.appendChild(document.createTextNode("Requerimientos"));
    textareaI.appendChild(document.createTextNode(data.seccionRequerimientos));
    addH4II.appendChild(document.createTextNode("Descripción"));
    textareaII.appendChild(document.createTextNode(data.seccionDescripcion));
    
    
    
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
