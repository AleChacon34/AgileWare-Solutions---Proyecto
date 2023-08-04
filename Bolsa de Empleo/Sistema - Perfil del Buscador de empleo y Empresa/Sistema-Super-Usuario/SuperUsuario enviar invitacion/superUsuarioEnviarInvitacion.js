'use strict';

document.addEventListener('DOMContentLoaded', () =>{
    let enviarBtn = document.querySelector('#enviar-invitacion');
    enviarBtn.addEventListener("click", enviarInvitacion);
})

function enviarInvitacion(e){
    let listaCorreo = [];
    e.preventDefault(e.target);
    let correoInvitado = document.querySelector("#correo");
    listaCorreo.push(correoInvitado.value);
    console.log(listaCorreo)
}