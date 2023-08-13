'use strict'

import { OfertaService } from "../../services/consultarOferta.services.js"

document.addEventListener("DOMContentLoaded", ()=>{
    getOfertas();
})

function getOfertas(){
    //Acceder a las ofertas
    OfertaService.findAll().then((response) =>{
        let data = response.data.data
        data.forEach(crearSecciones)
    })
}

function crearSecciones(data){
    if (data.visibilidad === "Activa" && data.publicador === "Empresa"){
        //Crear DIV principal con id
        let addDiv = document.createElement('div');
        //Crear section del div
        let addSec = document.createElement('section');
        addSec.setAttribute("id", data._id)
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
        let newAnch = document.createElement('a');
        // newAnch.setAttribute("href", "/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarOferta.html");
        newAnch.setAttribute("id", "verInfo");
        newAnch.addEventListener('click', () => {
            verInformacion(data);
        });
        //Agregar texto a cada elemento desde datosOfertas
        addH3I.appendChild(document.createTextNode(data.seccionTitulo));
        addH4I.appendChild(document.createTextNode("Requerimientos"));
        textareaI.appendChild(document.createTextNode(data.seccionRequerimientos));
        addH4II.appendChild(document.createTextNode("Descripción"));
        textareaII.appendChild(document.createTextNode(data.seccionDescripcion));
        newAnch.appendChild(document.createTextNode("Ver información"));
        //Agregar los H3, H4 y textarea al section, y este al Div
        addSec.append(addH3I, addH4I, textareaI, addH4II, textareaII, newAnch);
        addDiv.appendChild(addSec);
        //Agregar Div al main
        let mainBody = document.querySelector('main');
        mainBody.insertBefore(addDiv, mainBody.children[1]);
        localStorage.setItem("currentIDs", JSON.stringify(data._id))  
    }
      
}

function verInformacion(data){
    localStorage.setItem("currentIDs", data._id);
    location.replace('/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarOferta.html')
    let htmlBody = document.querySelector('body');
    //let parentNode = e.target.parentNode;
    //parentNode
    //console.log(parentNode)
}