'use strict'

document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("#mainForm");
    form.addEventListener("submit", registrarTipoUsuario);
})

function registrarTipoUsuario(e){
    e.preventDefault(e.target);
    let rolUsuario = document.querySelector("#seleccionUsuario");
    console.log(rolUsuario.value);
    switch (rolUsuario.value){
        case "Una empresa que busca ofrecer empleos en el plataforma...":
            window.location.href = "../../Registro de Empresa/registroEmpresa.html"
            break;
        case "Un buscador de empleo...":
            window.location.href = "../../Registro de Buscador de Empleo/buscadorEmpleo.html"
            break;
        case "El manager de una empresa...":
            window.location.href = "../../Registro de Usuario Empresarial Manual/registroUsuarioEmpresarialInvitacion.html"
            break; 
        case "El reclutador de una empresa...":
            window.location.href = "../../Registro de Usuario Empresarial Manual/registroUsuarioEmpresarialInvitacion.html"
            break;  
        case "El administrador de una empresa...":
            window.location.href = "../../Registro de Usuario Empresarial Manual/registroUsuarioEmpresarialInvitacion.html"
            break; 
    }   
}