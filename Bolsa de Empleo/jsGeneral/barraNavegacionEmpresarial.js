'use strict'

//Load Page
document.addEventListener("DOMContentLoaded", ()=>{
    crearBarraNavegacionEmpresarial();
});

function crearBarraNavegacionEmpresarial(){
    // Create NAV element and assign class
    let htmlBody = document.querySelector("body");
    let navBar = document.createElement('nav');
    navBar.classList.add("navBar");
    //Create Div I, II, III, IV, V
    let addDivI = document.createElement('div');
    let addDivII = document.createElement('div');
    let addDivIII = document.createElement('div');
    let addDivIV = document.createElement('div');
    let addDivV = document.createElement('div');
    //Add class for logout V
    addDivV.classList.add("logout");
    //Create button for V
    let newBtn = document.createElement('button');
    newBtn.setAttribute('id', "logOut");
    //Create Icon I, II, III, IV, V
    let addIconI = document.createElement("i");
    addIconI.classList.add("fa-solid","fa-user");
    let addIconII = document.createElement("i");
    addIconII.classList.add("fa-solid", "fa-briefcase");
    let addIconIII = document.createElement("i");
    addIconIII.classList.add("fa-solid", "fa-arrow-up-right-from-square");
    let addIconIV = document.createElement("i");
    addIconIV.classList.add("fa-solid", "fa-users");
    let addIconV = document.createElement("i");
    addIconV.classList.add("fa-solid", "fa-right-from-bracket");
    
    //Create anchor I, II, III, IV
    let newAnchI = document.createElement("a");
    newAnchI.href = "/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Sistema-Perfil Empresa/Sistema-PerfilEmpresa.html";
    let linkAnchI = document.createTextNode("Perfil");
    newAnchI.appendChild(linkAnchI);
    let newAnchII = document.createElement("a");
    newAnchII.href = "/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarListaOfertas.html";
    let linkAnchII = document.createTextNode("Mis Empleos");
    newAnchII.appendChild(linkAnchII);
    let newAnchIII = document.createElement("a");
    newAnchIII.href = "/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarListaOfertas.html";
    let linkAnchIII = document.createTextNode("Reportes");
    newAnchIII.appendChild(linkAnchIII);
    let newAnchIV = document.createElement("a");
    newAnchIV.href = "/Bolsa de Empleo/Empresa - Colaboradores/Visualizar Colaboradores/visualizarReclutadores.html";
    let linkAnchIV = document.createTextNode("Colaboradores");
    newAnchIV.appendChild(linkAnchIV);
    
    //Append Icon to Div and Btn
    addDivI.appendChild(addIconI);
    addDivII.appendChild(addIconII);
    addDivIII.appendChild(addIconIII);
    addDivIV.appendChild(addIconIV);
    newBtn.appendChild(addIconV);
    //Append <a> to Div
    addDivI.appendChild(newAnchI);
    addDivII.appendChild(newAnchII);
    addDivIII.appendChild(newAnchIII);
    addDivIV.appendChild(newAnchIV);
    //Append Div to <nav>
    navBar.appendChild(addDivI);
    navBar.appendChild(addDivII);
    navBar.appendChild(addDivIII);
    navBar.appendChild(addDivIV);
    navBar.appendChild(addDivV);
    //Append button to Div
    addDivV.appendChild(newBtn);
    
    //Append NAV to BODY
    htmlBody.appendChild(navBar); 
    //Set <nav> as first element of Body
    htmlBody.insertBefore(navBar, htmlBody.children[0]);
    
    // Create Scripts and link 
    let htmlHead = document.querySelector('head');
    let newScriptI = document.createElement('script');
    let newScriptII = document.createElement('script');
    let newLinkI = document.createElement('link');
    
    //Set attributes for <script> and <link>
    newScriptI.setAttribute("src", "https://kit.fontawesome.com/3d4c892592.js");
    newScriptI.setAttribute("crossorigin","anonymous");
    newScriptII.setAttribute("src", "/Bolsa de Empleo/jsGeneral/cerrarSesion.js");
    newLinkI.setAttribute("rel", "stylesheet");
    newLinkI.setAttribute("href", "/Bolsa de Empleo/cssGeneral/barraNavegacionEmpresa.css")
    
    //Add <script> and <link> to head
    htmlHead.appendChild(newScriptI);
    htmlHead.appendChild(newScriptII);
    htmlHead.appendChild(newLinkI);
}