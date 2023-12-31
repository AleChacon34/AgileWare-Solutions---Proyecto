'use strict';

import {postulacionService} from "../../services/postulaciones.services.js"
import {OfertaService} from "../../services/consultarOferta.services.js"
import { UserService } from "../../services/user.service.js";

let datosInvitaciones =
    {
        nombreBuscador: "Jonathan", apellidos: "Mora Herra", correo: "jmorah@correo.com", tituloOferta: "Oferta en papas", estadoPostulacion: "Enviada"
    }



document.addEventListener("DOMContentLoaded", ()=>{
    let id = localStorage.getItem('activeUser');
    let form = document.querySelector("#ofertaForm");

    generarPostulaciones(datosInvitaciones);

    postulacionService.findAll().then((response)=>{
        let data = response.data.data;
        UserService.getOneUser(id).then((response) => {
            let user = response.data.data;
            if (user.pertenencia == null || user.pertenencia === id) {
                data.forEach(() => {
                    postulacionService.findByIdPostulante().then((response) => {
                        let oferta = response.data.data;
                        if (oferta.pertenencia == user._id) {
                        }
                    });
                });
            } else {
                
            }
        });

        /*data.forEach((data)=>{
            let publicador = localStorage.getItem("activeUser");
            let idOferta =  data.idOferta;
            OfertaService.findOne(idOferta).then((response)=>{
                let data =  response.data.data;
                console.log(data);
            })

        })*/
    })
})

function generarPostulaciones(datosInvitaciones){
    //Crear elementos
    let addDiv =  document.createElement("div");
    let addSecI = document.createElement("section");
    let addAside = document.createElement("aside");
    let parI =  document.createElement("p");
    let parII =  document.createElement("p");
    let parIII =  document.createElement("p");
    let select = document.createElement("select");
    let optionI = document.createElement("option");
    let optionII = document.createElement("option");
    let optionIII = document.createElement("option");
    let optionIV = document.createElement("option");

    //Agregar contenido
    parI.appendChild(document.createTextNode("Postulante: " + datosInvitaciones.nombreBuscador + " " + datosInvitaciones.apellidos));
    parII.appendChild(document.createTextNode("Correo electrónico: " + datosInvitaciones.correo));
    parIII.appendChild(document.createTextNode("Título de la oferta: " + datosInvitaciones.tituloOferta));
    optionI.appendChild(document.createTextNode("Enviada"));
    optionII.appendChild(document.createTextNode("En revisión"));
    optionIII.appendChild(document.createTextNode("Aceptada"));
    optionIV.appendChild(document.createTextNode("Denegada"));

    //Agrupar elementos
    addSecI.append(parI, parII, parIII);
    select.append(optionI, optionII, optionIII, optionIV);
    addAside.append(select);
    addDiv.append(addSecI, addAside);
    let mainBody = document.querySelector("main");
    mainBody.appendChild(addDiv);
}