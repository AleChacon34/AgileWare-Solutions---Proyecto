'use strict'
import { OfertaService } from "../../services/consultarOferta.services.js";

// let dataList = [{seccionTitulo: "Ingenieria", seccionRequerimientos: "Ninguno", seccionDescripcion: "Lorem Ipsum"}];

document.addEventListener("DOMContentLoaded", ()=>{
    let id = localStorage.getItem('currentIDs');
    OfertaService.findOne(id).then((response) =>{
        console.log(response)
        let data = response.data.data;
        //console.log(data);
        verOferta(data);
    })
})

function verOferta(data){
    //Crear Div principal
    let addDiv = document.createElement('div');
    addDiv.setAttribute("id", "mainDiv");
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
    let addBtnI = document.createElement('button');
    addBtnI.setAttribute("id", "modificarOferta")
    let addBtnII = document.createElement('button');
    addBtnII.setAttribute("id", "verPostulaciones");
    let newAnchI = document.createElement("a");
    newAnchI.setAttribute("href", "/Bolsa de Empleo/Empresa - Mis Empleos/Modificar Oferta de Empleo/ModificarOferta.html")
    let newAnchII = document.createElement("a");
    newAnchII.setAttribute("href", "/Bolsa de Empleo/Empresa - Mis Empleos/Consultar aplicaciones recibidas/listaPostulados.html")



    //Agregar texto a cada elemento desde datosOfertas
    addH3I.appendChild(document.createTextNode(data.seccionTitulo));
    addH4I.appendChild(document.createTextNode("Requerimientos"));
    textareaI.appendChild(document.createTextNode(data.seccionRequerimientos));
    addH4II.appendChild(document.createTextNode("Descripción"));
    textareaII.appendChild(document.createTextNode(data.seccionDescripcion));
    newAnchI.appendChild(document.createTextNode("MODIFICAR OFERTA"));
    newAnchII.appendChild(document.createTextNode("VER POSTULADOS"));


    
    //Agregar los H3, H4 y textarea al section, y este al Div
    addSec.append(addH3I, addH4I, textareaI, addH4II, textareaII);
    addDiv.appendChild(addSec);
    addBtnI.appendChild(newAnchI);
    addBtnII.appendChild(newAnchII);
    addAside.append(addBtnI, addBtnII);

    //Agregar Div y Aside al main
    let mainBody = document.querySelector('main');
    mainBody.insertBefore(addDiv, mainBody.children[0]);
    mainBody.insertBefore(addAside, mainBody.children[1]);

    
    
    // let estadoOferta = document.querySelector(".estado-oferta");
    // console.log(estadoOferta);
    // if (estadoOferta.textContent == "Oferta pública"){
    //     console.log("Oferta Pública");
    //     estadoOferta.removeAttribute("id");
    //     estadoOferta.setAttribute("id", "oferta-publica");
    // }
    // else if (estadoOferta.textContent == "Oferta oculta"){
    //     estadoOferta.removeAttribute("id");
    //     estadoOferta.setAttribute("id", "oferta-oculta");
    //     console.log("Oferta Oculta")
    // }
    // else{
    //     console.log("No funciona")
    // }
}
