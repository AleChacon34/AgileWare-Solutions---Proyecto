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
            alert("Usuario Funciona!!!");
            if (usuario.pass === user.pass){
                autenticado = true
                usuarioCorrecto = user;
                console.log(usuarioCorrecto.rol)
            }
        }
    }    
    // if (autenticado){
    //     paginaInicio(usuarioCorrecto.rol);
    // }
}

// function paginaInicio(rol){
//     if (rol === "Buscador de Empleo"){
//         window.location.href = "/AgileWare-Solutions---Proyecto/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Perfil usuario/perfilUsuario.html";
//     }

//     else if(rol === "Administrador"){
//         window.location.href = "facebook.com";
//     }

//     else if(rol === "Reclutador"){
//         window.location.href = "google.com";
//     }

//     else if(rol === "Manager"){
//         window.location.href = "192.168.0.1";
//     }

//     else if(rol === "Super-Usuario"){
//         window.location.href = "twitter.com";
//     }

//     else if(rol === "Empresa"){
//         window.location.href = "/AgileWare-Solutions---Proyecto/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Perfil usuario/perfilUsuario.html";
//     }
// }
        
