'use strict'

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
document.addEventListener("DOMContentLoaded", ()=>{
    generarOferta(datosOfertas);
})

function generarOferta(datosOfertas){
    for (let oferta = 0; oferta < datosOfertas.length; oferta++){
        console.log("Una oferta")
        //Crear DIV principal con id
        let addDiv = document.createElement('div');
        addDiv.setAttribute("id", "mainDiv");
        //Crear section del div
        let addSec = document.createElement('section');
        //Crear h4, h5 y textarea
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
        //Agregar texto a cada elemento desde datosOfertas
        addH4I.appendChild(document.createTextNode(datosOfertas.tituloOferta));
        addH5I.appendChild(document.createTextNode("Requerimientos"));
        textareaI.appendChild(document.createTextNode(datosOfertas.requerimientosCuerpo));
        addH5II.appendChild(document.createTextNode("Descripción"));
        textareaII.appendChild(document.createTextNode(datosOfertas.descripcionCuerpo));
        //Agregar los H4, H5 y textarea al section
        addSec.append(addH4I, addH5I, textareaI, addH5II, textareaII);
    }
}