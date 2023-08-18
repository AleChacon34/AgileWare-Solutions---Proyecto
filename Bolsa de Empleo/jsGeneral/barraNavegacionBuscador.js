'use strict'

//Load Page
document.addEventListener("DOMContentLoaded", ()=>{
    crearBarraNavegacionBuscador();
});

function crearBarraNavegacionBuscador(){
    // Create NAV element and assign class
    let htmlBody = document.querySelector("body");
    let navBar = document.createElement('nav');
    navBar.classList.add("navBar");
    // Create Div I, II, III< IV
    let addDivI = document.createElement('div');
    let addDivII = document.createElement('div');
    let addDivIII = document.createElement('div');
    let addDivIV = document.createElement('div');
    // Add class for I, IV
    addDivIV.classList.add("logout");
    // Create button for IV
    let newBtn = document.createElement('button');
    newBtn.setAttribute('id', "logOut");
    // Create Icon I, II, III, IV
    let addIconI = document.createElement("i");
    addIconI.classList.add("fa-solid","fa-user");
    let addIconII = document.createElement("i");
    addIconII.classList.add("fa-solid", "fa-briefcase");
    let addIconIII = document.createElement("i");
    addIconIII.classList.add("fa-solid", "fa-hand-pointer");
    let addIconIV = document.createElement("i");
    addIconIV.classList.add("fa-solid", "fa-right-from-bracket");
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
    
    //Append Icon to Div and Btn
    addDivI.appendChild(addIconI);
    addDivII.appendChild(addIconII);
    addDivIII.appendChild(addIconIII);
    newBtn.appendChild(addIconIV);
    //Append <a> to Div
    addDivI.appendChild(newAnchI);
    addDivII.appendChild(newAnchII);
    addDivIII.appendChild(newAnchIII);
    //Append Div to <nav>
    navBar.appendChild(addDivI);
    navBar.appendChild(addDivII);
    navBar.appendChild(addDivIII);
    navBar.appendChild(addDivIV);
    //Append button to Div
    addDivIV.appendChild(newBtn);
    //Append NAV to BODY
    htmlBody.appendChild(navBar);
    //Set <nav> as first element of Body
    htmlBody.insertBefore(navBar, htmlBody.children[0]);
    // Add Scripts to html/head
    let htmlHead = document.querySelector('head');
    let newScriptI = document.createElement('script');
    let newScriptII = document.createElement('script');
    let newScriptIII = document.createElement('script');
    let newLinkI = document.createElement('link');
    //Set attributes for <script> and <link>
    newScriptI.setAttribute("src", "https://kit.fontawesome.com/3d4c892592.js");
    newScriptI.setAttribute("crossorigin","anonymous");
    newScriptII.setAttribute("src", "/Bolsa de Empleo/jsGeneral/cerrarSesion.js");
    newScriptIII.setAttribute("src", "/Bolsa de Empleo/jsGeneral/SweetAlert.js");
    // newScriptII.setAttribute("type", "module");
    newLinkI.setAttribute("rel", "stylesheet");
    newLinkI.setAttribute("href", "/Bolsa de Empleo/cssGeneral/barraNavegacionBuscador.css")
    
    //Import and add Axios to head
    let newScriptAxios = document.createElement('script');
    newScriptAxios.setAttribute("src", "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js");

    //Add <script> and <link> to head
    htmlHead.append(newScriptI, newScriptII, newScriptIII);
    htmlHead.appendChild(newLinkI);
    htmlHead.appendChild(newScriptAxios);

    
    // Function to set the active link based on the current URL
function setActiveLinkByUrl() {
    const currentPath = window.location.pathname;
    const divs = [addDivI, addDivII, addDivIII];

    // Eliminar la clase "enlace activo" de todos los divs
    divs.forEach(div => div.classList.remove("active-link"));

    // Encuentre el div que coincida con la URL actual y agregue la clase "enlace activo"
    divs.forEach(div => {
    const link = div.querySelector("a");
    if (link && link.getAttribute("href") === currentPath) {
        div.classList.add("active-link");
    }
    });
}

  // Llame a la función setActiveLinkByUrl una vez en la carga de la página
setActiveLinkByUrl();

  // Almacene la URL activa en localStorage al hacer clic en el enlace
const divs = [addDivI, addDivII, addDivIII];
divs.forEach(div => {
    const link = div.querySelector("a");
    if (link) {
    link.addEventListener("click", () => {
        localStorage.setItem("activeURL", link.getAttribute("href"));
    });
    }
});

  // Recupere la URL activa de localStorage al cargar la página y configure el div correspondiente como activo
const storedActiveURL = localStorage.getItem("activeURL");
if (storedActiveURL) {
    const divWithActiveURL = divs.find(div => {
    const link = div.querySelector("a");
    return link && link.getAttribute("href") === storedActiveURL;
    });
    if (divWithActiveURL) {
    divWithActiveURL.classList.add("active-link");
    }
}
}