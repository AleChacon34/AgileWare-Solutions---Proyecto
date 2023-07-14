"use strict";

//Apenas la pagina se cargue, obtnedra al boton y le asignara un evento
document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector('#agregar');
    btn.onclick = displayAlert;
});

//La funcion 'displayAlert' muestra la alerta dependiendo del estado de los 'inputs'
function displayAlert() {
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let description = document.getElementById('description').value;
    if (title == "" || date == "" || description == "") {
        Swal.fire('Por favor, no dejar espacios en blanco', '', 'warning');
    } else {
        Swal.fire('¡Estudio agregado!', '', 'success'),
        setInterval(
            redirect,  
            900
        );
    }
}

//La funcion 'redirect' lleva de nuevo a la pagina de estudios de perfil
function redirect() {
    location.href = "UsuarioModificarPerfilAgregarEstudio.html";
}