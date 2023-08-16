'use strict';

document.addEventListener("DOMContentLoaded", ()=>{
    generarPostulaciones;
})


/**
 * Al cargar la pagina, se le asigna el evento a los botones
 */
document.addEventListener("loadstart", () => {
    let btns = document.querySelectorAll('.verPostulacion');
    for (let i = 0; i < btns.length; i++) {
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

function generarPostulaciones(){
    let addSec = document.createElement("section");
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "card");
    let addDivI = document.createElement("div");
    let addDivII = document.createElement("div");
    let addH2 = document.createElement("h2");
    let addBtn = document.createElement("button");
    let parI =  document.createElement("p");
    let parII =  document.createElement("p");
    let parIII =  document.createElement("p");
}