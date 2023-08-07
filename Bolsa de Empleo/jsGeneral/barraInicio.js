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

    //Import and add Axios to head
    let newScriptAxios = document.createElement('script');
    newScriptAxios.setAttribute("src", "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js");

    //Add <script> and <link> to head
    htmlBody.append(newLinkI, newScriptAxios);

    


    
    // Function to set the active link based on the current URL
    function setActiveLinkByUrl() {
        const currentPath = window.location.pathname;
        const links = [newAnchI, newAnchII];

        // Remove the "active-link" class from all links
        links.forEach(link => link.classList.remove("active-link"));

        // Find the link that matches the current URL and add the "active-link" class
        links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active-link");
        }
        });
    }

    // Call the setActiveLinkByUrl function once on page load
    setActiveLinkByUrl();

    // Store the active link in localStorage on link click
    const links = [newAnchI, newAnchII];
    links.forEach(link => {
        link.addEventListener("click", () => {
        localStorage.setItem("activeLink", link.getAttribute("href"));
        });
    });

    // Retrieve the active link from localStorage on page load and set it as active
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
        links.forEach(link => {
        if (link.getAttribute("href") === storedActiveLink) {
            link.classList.add("active-link");
        }
        });
    }
}