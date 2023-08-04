'use strict'

//Load Page
document.addEventListener("DOMContentLoaded", ()=>{
    crearBarraNavegacionEmpresarial();
});

function crearBarraNavegacionEmpresarial(){
    // Create NAV element and assign class
    let htmlBody = document.querySelector("body");
    let navBar = document.createElement('nav');
    navBar.classList.add("barraInicio");
    //Create Btn I, II
    let addBtnI = document.createElement('button');
    let addBtnII = document.createElement('button');
    //Add name for Btns
    addBtnI.setAttribute("name", "ver-inicio");
    addBtnII.setAttribute("name", "iniciar-sesion");
    //Create anchor I, II
    let newAnchI = document.createElement("a");
    newAnchI.href = "/Bolsa de Empleo/Pagina de Inicio/paginaInicio.html";
    let linkAnchI = document.createTextNode("Inicio");
    newAnchI.appendChild(linkAnchI);
    let newAnchII = document.createElement("a");
    newAnchII.href = "/Bolsa de Empleo/Sistema - Ingreso y Registro/Inicio de sesion/inicioSesion.html";
    let linkAnchII = document.createTextNode("Iniciar sesión");
    newAnchII.appendChild(linkAnchII);
    
    //Append <a> to Btn
    addBtnI.appendChild(newAnchI);
    addBtnII.appendChild(newAnchII);

    //Append Div to <nav>
    navBar.appendChild(addBtnI);
    navBar.appendChild(addBtnII);
    
    //Append NAV to BODY
    htmlBody.appendChild(navBar); 
    //Set <nav> as first element of Body
    htmlBody.insertBefore(navBar, htmlBody.children[0]);
    
    // Create Scripts and link 
    let htmlHead = document.querySelector('head');
    let newLinkI = document.createElement('link');
    
    //Set attributes for <script> and <link>
    newLinkI.setAttribute("href", "/Bolsa de Empleo/cssGeneral/barraInicio.css");
    newLinkI.setAttribute("rel", "stylesheet");

    //Add <script> and <link> to head
    htmlHead.appendChild(newLinkI);
}