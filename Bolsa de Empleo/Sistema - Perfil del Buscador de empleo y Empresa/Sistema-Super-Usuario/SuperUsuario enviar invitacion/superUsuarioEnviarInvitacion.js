'use strict';

document.addEventListener('DOMContentLoaded', () =>{
    let enviarForm = document.querySelector('#enviar-invitacion');
    enviarForm.addEventListener("click", enviarInvitacion);
})

function enviarInvitacion(){
    let listaCorreo = [];
    let correoInvitado = document.querySelector("#correo");
    listaCorreo.push(correoInvitado.value);
    console.log(listaCorreo);
}