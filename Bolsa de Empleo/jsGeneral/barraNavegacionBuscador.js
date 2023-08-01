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
    //Create Div I, II, III
    let addDivI = document.createElement('div');
    let addDivII = document.createElement('div');
    let addDivIII = document.createElement('div');
    //Create Icon I, II, III
    let addIconI = document.createElement("i");
    addIconI.classList.add("fa-solid","fa-user");
    let addIconII = document.createElement("i");
    addIconII.classList.add("fa-solid", "fa-briefcase");
    let addIconIII = document.createElement("i");
    addIconIII.classList.add("fa-solid", "fa-hand-pointer");
    //Create anchor I, II, III
    let newAnchI = document.createElement("a");
    newAnchI.href = "/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Perfil usuario/perfilUsuario.html";
    let linkAnchI = document.createTextNode("Perfil");
    newAnchI.appendChild(linkAnchI);
    let newAnchII = document.createElement("a");
    newAnchII.href = "/Bolsa de Empleo/Buscador de Empleo - Empleos/Visualizar empleos disponibles/visualizarEmpleos.html";
    let linkAnchII = document.createTextNode("Empleos");
    newAnchII.appendChild(linkAnchII);
    let newAnchIII = document.createElement("a");
    newAnchIII.href = "/Bolsa de Empleo/Buscador de Empleo - Postulaciones/Ver Postulaciones/verPostulaciones.html";
    let linkAnchIII = document.createTextNode("Postulaciones");
    newAnchIII.appendChild(linkAnchIII);
    
    //Append Icon to Div
    addDivI.appendChild(addIconI);
    addDivII.appendChild(addIconII);
    addDivIII.appendChild(addIconIII);
    //Append <a> to Div
    addDivI.appendChild(newAnchI);
    addDivII.appendChild(newAnchII);
    addDivIII.appendChild(newAnchIII);
    //Append Div to <nav>
    navBar.appendChild(addDivI);
    navBar.appendChild(addDivII);
    navBar.appendChild(addDivIII);
}