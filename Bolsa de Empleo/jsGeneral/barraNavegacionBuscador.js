'use strict'
//Load Page
document.addEventListener("DOMContentLoaded", ()=>{
    crearBarraNavegacion();
});

function crearBarraNavegacion(){
    // Create NAV element and assign class
    let htmlBody = document.querySelector("body");
    let navBar = document.createElement('nav');
    navBar.classList.add("navBar");
    //Append NAV to BODY
    htmlBody.appendChild(navBar);
    let addDivI = document.createElement('div');
    let addIcon = addDivI.appendChild(document.createElement("i"));
    addIcon.classList.add("fa-solid","fa-user");

    navBar.appendChild(addDivI);
}