'use strict';

import { postulacionService } from "../../services/postulaciones.services.js";
import { OfertaService } from "../../services/consultarOferta.services.js";

document.addEventListener("DOMContentLoaded", ()=>{
    let idPostulante = localStorage.getItem("activeUser");
    postulacionService.findByIdPostulante(idPostulante).then((response)=>{
        let data =  response.data.data;
        data.forEach(generarPostulaciones)
    });
})

/**
 * Funcion que redirige a la pagina de la postulacion
 */
function redirect() {
    window.location.href = "postulacion.html";
}

function generarPostulaciones(data){
    OfertaService.findOne(data.idOferta).then((response)=>{
        let titulo = response.data.data.seccionTitulo;
        let addSec = document.createElement("section");
        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "card");
        let addDivI = document.createElement("div");
        let addDivII = document.createElement("div");
        let addH2 = document.createElement("h2");
        let addBtn = document.createElement("button");
        switch (data.estado){
            case "Enviada":
                addBtn.setAttribute("class", "verPostulacionEnviada");
                break;
            case "En revisión":
                addBtn.setAttribute("class", "verPostulacionEnRevision");
                break;
            case "Aceptada":
                addBtn.setAttribute("class", "verPostulacionAceptada");
                break;
            case "Denegada":
                addBtn.setAttribute("class", "verPostulacionDenegada");
            break;
        }
        let parI =  document.createElement("p");
        let parII =  document.createElement("p");

    //Agregar contenido a los elementos
        addH2.appendChild(document.createTextNode(titulo));
        parI.appendChild(document.createTextNode((data.updatedAt).substring(0, 10)));
        addBtn.appendChild(document.createTextNode(data.estado));
    //Agrupar elementos
        addDivI.appendChild(addH2);
        addDivII.appendChild(parI);
        mainDiv.append(addDivI, addDivII, addBtn);
        addSec.appendChild(mainDiv);
    //Agregar elementos al main
        let mainBody = document.querySelector("main");
        mainBody.appendChild(addSec);

    //Agregar funcion alos botones de oferta
        let btns = document.querySelectorAll('.verPostulacion');
        for (let i = 0; i < btns.length; i++) {
            console.log()
            let btn = btns[i];
            btn.addEventListener("click", redirect);
        }
    });   
}