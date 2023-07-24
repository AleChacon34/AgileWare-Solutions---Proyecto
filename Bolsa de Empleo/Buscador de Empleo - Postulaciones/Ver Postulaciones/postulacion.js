"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let estado = document.querySelector('p');
    estadoPostulacion(estado);
})

function estadoPostulacion(estado) {
    switch(estado.innerHTML) {
        case "EN REVISION":
            estado.style.backgroundColor = "orange";
            break;
        case "ACEPTADA":
            estado.style.backgroundColor = "greenyellow";
            break;
        case "RECHAZADA":
            estado.style.backgroundColor = "red";
            break;
        case "ENVIADA":
            estado.style.backgroundColor = "blue";
            break;
    }
}