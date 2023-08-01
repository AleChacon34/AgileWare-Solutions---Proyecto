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
    //Create Div I
    let addDivI = document.createElement('div');
    //Create Icon I
    let addIcon = document.createElement("i");
    addIcon.classList.add("fa-solid","fa-user");
    //Create anchor I
    let newAnch = document.createElement("a");
    newAnch.href = "/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Perfil usuario/perfilUsuario.html";
    let linkAnch = document.createTextNode("Perfil");
    newAnch.appendChild(linkAnch);
    
    //Append Icon to Div
    addDivI.appendChild(addIcon);
    addDivI.appendChild(newAnch)
    navBar.appendChild(addDivI);
}