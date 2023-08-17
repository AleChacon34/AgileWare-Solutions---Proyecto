"use strict";

import { OfertaService } from "../../services/consultarOferta.services.js";

document.addEventListener('DOMContentLoaded', () => {
    let id = localStorage.getItem('postulacionID');
    console.log(id)
    OfertaService.findOne(id).then((response)=>{
        let data = response.data.data;
        verOferta(data);
    })
    // let estado = document.querySelector('p');
    // estadoPostulacion(estado);
})

function estadoPostulacion(estado) {
    switch(estado.innerHTML) {
        case "EN REVISION":
            estado.style.backgroundColor = "orange";
            break;
        case "ACEPTADA":
            estado.style.backgroundColor = "greenyellow";
            break;
        case "RECHAZADA":
            estado.style.backgroundColor = "red";
            break;
        case "ENVIADA":
            estado.style.backgroundColor = "blue";
            break;
    }
}

function verOferta(data){
    //Crear Div principal
    let addDiv = document.createElement('div');
    addDiv.setAttribute("id", "mainDiv");
    //Crear section del div
    let addSec = document.createElement('section');
    //Crear h3, h4, textarea, anchor 
    let addH3I = document.createElement('h2');
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
    let addBtnI = document.createElement('button');
    addBtnI.setAttribute("id", "modificarOferta")
    let addBtnII = document.createElement('button');
    addBtnII.setAttribute("id", "verPostulaciones");
    let newAnchI = document.createElement("a");
    newAnchI.setAttribute("href", "/Bolsa de Empleo/Empresa - Mis Empleos/Modificar Oferta de Empleo/ModificarOferta.html")
    let newAnchII = document.createElement("a");
    newAnchII.setAttribute("href", "/Bolsa de Empleo/Empresa - Mis Empleos/Consultar aplicaciones recibidas/listaPostulados.html")
    let addPI = document.createElement("p");

    //Agregar texto a cada elemento desde datosOfertas
    addH3I.appendChild(document.createTextNode(data.seccionTitulo));
    addH4I.appendChild(document.createTextNode("Requerimientos"));
    textareaI.appendChild(document.createTextNode(data.seccionRequerimientos));
    addH4II.appendChild(document.createTextNode("Descripción"));
    textareaII.appendChild(document.createTextNode(data.seccionDescripcion));
    newAnchI.appendChild(document.createTextNode("MODIFICAR OFERTA"));
    newAnchII.appendChild(document.createTextNode("VER POSTULADOS"));
    addPI.appendChild(document.createTextNode(data.estadoOferta));
        if (addPI.textContent === "Oferta pública"){
            addPI.setAttribute("id", "pOfertaPublica");
        }
        else if (addPI.textContent === "Oferta oculta"){
            addPI.setAttribute("id", "pOfertaOculta");
        }
    //Agregar los H3, H4 y textarea al section, y este al Div
    addSec.append(addH3I, addPI, addH4I, textareaI, addH4II, textareaII);
    addDiv.appendChild(addSec);
    addBtnI.appendChild(newAnchI);
    addBtnII.appendChild(newAnchII);
    addAside.append(addBtnI, addBtnII);

    //Agregar Div y Aside al main
    let mainBody = document.querySelector('main');
    mainBody.insertBefore(addDiv, mainBody.children[0]);
    mainBody.insertBefore(addAside, mainBody.children[1]);
}