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
            localStorage.setItem("rolUsuario", "Empresa");
            window.location.href = "../../Registro de Empresa/registroEmpresa.html"
            break;
        case "Un buscador de empleo...":
            localStorage.setItem("rolUsuario", "Buscador");
            window.location.href = "../../Registro de Buscador de Empleo/buscadorEmpleo.html"
            break;
        case "El manager de una empresa...":
            localStorage.setItem("rolUsuario", "Manager");
            break; 
        case "El reclutador de una empresa...":
            localStorage.setItem("rolUsuario", "Reclutador");
            break;  
        case "El administrador de una empresa...":
            localStorage.setItem("rolUsuario", "Administrador");
            break; 
    }   
}