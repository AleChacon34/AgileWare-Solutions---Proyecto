"use strict";

document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector('#agregar');
    btn.onclick = displayAlert;
});

function displayAlert() {
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let description = document.getElementById('description').value;
    if (title == "" || date == "" || description == "") {
        Swal.fire('Por favor, no dejar espacios en blanco', '', 'warning');
    } else {
        Swal.fire('¡Estudio agregado!', '', 'warning'),
        setInterval(
            redirect,  
            900
        );
    }
}

function redirect() {
    location.href = "UsuarioModificarPerfilAgregarEstudio.html";
}