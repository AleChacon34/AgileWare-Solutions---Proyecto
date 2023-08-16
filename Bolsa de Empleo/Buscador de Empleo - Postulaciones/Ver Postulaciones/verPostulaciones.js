'use strict';
let datosInvitaciones =
    {
        nombreEmpresa: "Test I", tituloOferta: "Oferta en papas", estadoPostulacion: "Enviada", idOferta: "123"
    }

document.addEventListener("DOMContentLoaded", ()=>{
    generarPostulaciones(datosInvitaciones);
})




/**
 * Al cargar la pagina, se le asigna el evento a los botones
 */
document.addEventListener("mouseOver", () => {
    let btns = document.querySelectorAll('.verPostulacion');
    for (let i = 0; i < btns.length; i++) {
        console.log()
        let btn = btns[i];
        btn.addEventListener("click", redirect);
    }
});

/**
 * Funcion que redirige a la pagina de la postulacion
 */
function redirect() {
    window.location.href = "postulacion.html";
}

function generarPostulaciones(datosInvitaciones){
    let addSec = document.createElement("section");
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "card");
    let addDivI = document.createElement("div");
    let addDivII = document.createElement("div");
    let addH2 = document.createElement("h2");
    let addBtn = document.createElement("button");
    addBtn.setAttribute("class", "verPostulacion")
    let parI =  document.createElement("p");
    let parII =  document.createElement("p");

//Agregar contenido a los elementos
    addH2.appendChild(document.createTextNode(datosInvitaciones.nombreEmpresa));
    parI.appendChild(document.createTextNode(datosInvitaciones.tituloOferta));
    parII.appendChild(document.createTextNode(datosInvitaciones.estadoPostulacion));
    addBtn.appendChild(document.createTextNode("Ver oferta"));
//Agrupar elementos
    addDivI.appendChild(addH2);
    addDivII.appendChild(parI, parII);
    mainDiv.append(addDivI, addDivII, addBtn);
    addSec.appendChild(mainDiv);
//Agregar elementos al main
    let mainBody = document.querySelector("main");
    mainBody.appendChild(addSec);
}