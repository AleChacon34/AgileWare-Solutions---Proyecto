'use strict'

import { OfertaService } from "../Services consultarOfertas/consultarOferta.services.js";

let datosOfertas = [
    {
      tituloOferta: "Ingeniería en Sistemas", requerimientosCuerpo: "5 años de experiencia", descripcionCuerpo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, nesciunt magnam saepe, ipsam doloremque facere placeat cumque suscipit totam voluptates soluta, atque blanditiis officiis deserunt. Eius cumque dolor voluptatum praesentium." 
    },
    {
        tituloOferta: "Ingeniería en Mecatronica", requerimientosCuerpo: "2 años de experiencia", descripcionCuerpo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, nesciunt magnam saepe, ipsam doloremque facere placeat cumque suscipit totam voluptates soluta, atque blanditiis officiis deserunt. Eius cumque dolor voluptatum praesentium." 
    },
    {
        tituloOferta: "Ingeniería en Programación", requerimientosCuerpo: "15 años de experiencia", descripcionCuerpo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, nesciunt magnam saepe, ipsam doloremque facere placeat cumque suscipit totam voluptates soluta, atque blanditiis officiis deserunt. Eius cumque dolor voluptatum praesentium." 
    }
]
document.addEventListener("scroll", ()=>{
    generarOferta(datosOfertas);
})

function generarOferta(datosOfertas){
    //Acceder a las ofertas
    OfertaService.findAll().then((response) =>{
        data = response.data
        console.log(data)
    });

    for (let oferta = 0; oferta < response.data; oferta++){
        console.log("Una oferta")
        //Crear DIV principal con id
        let addDiv = document.createElement('div');
        addDiv.setAttribute("id", "mainDiv");
        //Crear section del div
        let addSec = document.createElement('section');
        //Crear h4, h5, textarea, anchor 
        let addH4I = document.createElement('h4');
        addH4I.setAttribute("id", "tituloOFerta");
        let addH5I = document.createElement('h5');
        addH5I.setAttribute("id", "requerimientos");
        let textareaI = document.createElement('textarea');
        textareaI.setAttribute("id", "requerimientosCuerpo");
        let addH5II = document.createElement('h5');
        addH5II.setAttribute("id", "descripcionOferta");
        let textareaII = document.createElement('textarea');
        textareaII.setAttribute("id", "descripcionCuerpo");
        let newAnch = document.createElement('a');
        newAnch.setAttribute("href", "/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarOferta.html");
        //Agregar texto a cada elemento desde datosOfertas
        addH4I.appendChild(document.createTextNode(datosOfertas[oferta].tituloOferta));
        addH5I.appendChild(document.createTextNode("Requerimientos"));
        textareaI.appendChild(document.createTextNode(datosOfertas[oferta].requerimientosCuerpo));
        addH5II.appendChild(document.createTextNode("Descripción"));
        textareaII.appendChild(document.createTextNode(datosOfertas[oferta].descripcionCuerpo));
        newAnch.appendChild(document.createTextNode("Ver oferta"));
        //Agregar los H4, H5 y textarea al section, y este al Div
        addSec.append(addH4I, addH5I, textareaI, addH5II, textareaII, newAnch);
        addDiv.appendChild(addSec);
        //Agregar Div al main
        let mainBody = document.querySelector('main');
        mainBody.insertBefore(addDiv, mainBody.children[1]);    
    }
}