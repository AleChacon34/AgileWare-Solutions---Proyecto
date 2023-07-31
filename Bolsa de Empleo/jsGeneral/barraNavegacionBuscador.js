'use strict'

document.addEventListener("DOMContentLoaded", ()=>{
    crearBarraNavegacion();
});

function crearBarraNavegacion(){
    let navBar = document.createElement('navBar');
    navBar.classList.add("navBar");
    let addDivI = navBar.appendChild(Object.assign(
        document.createElement('div'),
        {
            classList: "navDiv",
            innerHTML: "div <p>Hola</p>"
        }
    ));
}