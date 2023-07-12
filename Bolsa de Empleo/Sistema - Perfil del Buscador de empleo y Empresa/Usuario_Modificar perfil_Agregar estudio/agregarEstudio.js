"use strict";

document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector("#añadirEstudio");
    btn.onclick = redirect;

    let btn2 = document.querySelector('#agregar');
    btn2.onclick = displayAlert;
});

function redirect() {
    location.href = "agregarEstudio.html";
}

function displayAlert() {
    Swal.fire('¡Estudio agregado!', '', 'success');
    location.href = "UsuarioModificarPerfilAgregarEstudio.html";
}