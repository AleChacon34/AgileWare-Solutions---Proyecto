"use strict";

let autenticado = false;

let usuarios = [{
        correo: "administrador@administrador.com",
        pass: "admin",
        rol: "Administrador"
    }, 
    {
        correo: "buscador@buscador.com",
        pass: "buscador",
        rol: "Buscador de Empleo"
    }, 
    {
        correo: "super-usuario@super-usuario.com",
        pass: "super-usuario",
        rol: "Super-Usuario"
    }, 
    {
        correo: "empresa@empresa.com",
        pass: "empresa",
        rol: "Empresa de Empleo"
    }, 
    {
        correo: "manager@manager.com",
        pass: "manager",
        rol: "Manager"
    }, 
    {
        correo: "reclutador@reclutador.com",
        pass: "reclutador",
        rol: "Reclutador"
    }
];

document.addEventListener("DOMContentLoaded", () =>{
    let btnLogin = document.querySelector("#ing1");
    btnLogin.addEventListener("click", obtenerCredenciales);
});

function obtenerCredenciales(){
    let correo = document.querySelector("input[name='correo']");
    let pass = document.querySelector("input[name='pass']");
    console.log( correo, pass);
    let usuario = {
        correo:correo.value,
        pass:pass.value 
    }
    verificarDatosIngreso(usuario);
}

function verificarDatosIngreso(usuario){
    let usuarioCorrecto;
    for (let user of usuarios){
        console.log(usuario.correo);
        console.log(usuario.pass);
        if (usuario.correo === user.correo){
            if (usuario.pass === user.pass){
                autenticado = true
                usuarioCorrecto = user;
                
            }
        }
    }    
    if (autenticado){
        paginaInicio(usuarioCorrecto.rol);
    }
}

function paginaInicio(rol){
    if (rol === "Buscador de Empleo"){
        location.href = "/AgileWare-Solutions---Proyecto/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Perfil usuario/perfilUsuario.html";
    }

    else if(rol === "Administrador"){
        location.href = "https://www.facebook.com";
    }

    else if(rol === "Reclutador"){
        location.href = "https://www.google.com";
    }

    else if(rol === "Manager"){
        location.href = "http://github.com";
    }

    else if(rol === "Super-Usuario"){
        location.href = "https://www.twitter.com";
    }

    else if(rol === "Empresa"){
        location.href = "/AgileWare-Solutions---Proyecto/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Perfil usuario/perfilUsuario.html";
    }
}
        
