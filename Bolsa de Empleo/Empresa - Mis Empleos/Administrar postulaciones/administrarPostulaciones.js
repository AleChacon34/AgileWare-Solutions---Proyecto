'use strict';

let datosInvitaciones = [
    {
        nombreBuscador: "Jonathan", apellidos: "Mora Herra", correo: "jmorah@correo.com", estadoPostulacion: "Enviada"
    },

    {
        nombreBuscador: "Marco", apellidos: "Mora Herra", correo: "jmorah@correo.com", estadoPostulacion: "En revisión"
    },

    {
        nombreBuscador: "Cristopher", apellidos: "Mora Herra", correo: "jmorah@correo.com", estadoPostulacion: "Rechazada"
    },

    {
        nombreBuscador: "Jacquelin", apellidos: "Mora Herra", correo: "jmorah@correo.com", estadoPostulacion: "Aceptada"
    },
];

document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("#ofertaForm");
    generarPostulaciones(datosInvitaciones);
})

function generarPostulaciones(){
    //Crear elementos
    let addDiv =  document.createElement("div");
    let addDivI = document.createElement("div");
    let parI =  document.createElement("p");
    let parII =  document.createElement("p");
    let select = document.createElement("select");
    let optionI = document.createElement("option");
    let optionII = document.createElement("option");
    let optionIII = document.createElement("option");
    let optionIV = document.createElement("option");

    //Agregar contenido
    parI.appendChild(document.createTextNode(nombreBuscador + " " + apellidos));
    parII.appendChild(document.createTextNode(correo));
    optionI.appendChild(document.createTextNode("Enviada"));
    optionII.appendChild(document.createTextNode("En revisión"));
    optionIII.appendChild(document.createTextNode("Aceptada"));
    optionIV.appendChild(document.createTextNode("Denegada"));


}