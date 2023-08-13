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
            console.log(localStorage.getItem("rolUsuario"))
            break;
        case "Un buscador de empleo...":
            localStorage.setItem("rolUsuario", "Buscador");
            console.log(localStorage.getItem("rolUsuario"))
            break;
        case "El manager de una empresa...":
            localStorage.setItem("rolUsuario", "Manager");
            console.log(localStorage.getItem("rolUsuario"))
            break; 
        case "El reclutador de una empresa...":
            localStorage.setItem("rolUsuario", "Reclutador");
            console.log(localStorage.getItem("rolUsuario"))
            break;  
        case "El administrador de una empresa...":
            localStorage.setItem("rolUsuario", "Administrador");
            console.log(localStorage.getItem("rolUsuario"))
            break; 
    }   
}