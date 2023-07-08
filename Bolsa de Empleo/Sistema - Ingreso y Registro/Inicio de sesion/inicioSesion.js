"use strict";

let usuarios = [{
        correo: "administrador@administrador.com",
        pass: "admin",
        rol: "administrador"
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
    let usuario = {
        correo:correo.value,
        pass:pass.value, 
    }
    verificarDatosIngreso(usuario);
}

function verificarDatosIngreso(usuario){
    for (let user of usuarios){
        console.log(usuario.correo);
        console.log(usuarios.correo);
        if (usuario.correo === usuarios.correo){
            alert("Usuario Funciona!!!");
            if (usuario.pass === usuarios.pass){
                alert("Contraseña correcta!!!");
                paginaIncio(usuarios.rol);
            }
            else{
                alert("Contraseña incorrecta!!!");
            }       
        }
        else{
            alert("Usuario Incorrecto!!!");
        }
    }
}

function paginaIncio(){
    window.location.href = "#";
}