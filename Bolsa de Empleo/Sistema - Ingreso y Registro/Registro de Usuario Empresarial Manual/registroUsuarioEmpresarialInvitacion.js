"use-strict"

import { UserEmpresa } from "../../models/userEmpresa.model.js";
import { LoginService } from "../../services/login.service.js"

let listaUsuariosEmpresariales = [];

document.addEventListener("DOMContentLoaded", () =>{
    let form = document.querySelector("form");
    form.addEventListener("submit", getData);
});

function getData(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let newUser = new UserEmpresa(formData);
    validarRegistro(newUser);
}

function guardarRegistro(newUser){

    if (!((newUser.getNombre() === "") || (newUser.getApellidos() === "") || (newUser.getCorreo() === "") || (newUser.getTelefono() === "") || (newUser.getGenero() === "") || (newUser.getContrasenia() === ""))){
        LoginService.registerUser(newUser).then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',  
                text: 'La información del nuevo usuario empresarial ha sido guardada exitosamente.',
            });
            location.replace('/Bolsa de Empleo/Sistema - Ingreso y Registro/Inicio de sesion/inicioSesion.html');
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'El usuario ya existe',
            });
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Información faltante',
            text: 'Por favor llene todos los espacios para completar el registro.',
        });
    }
}



function validarRegistro(newUser){
    if (newUser.getNombre()===""){
        document.getElementById("nombre").style.border = "2px solid red";
        mensajeError();
    } 
    if (newUser.getApellidos()===""){
        document.getElementById("apellidos").style.border = "2px solid red";
        mensajeError();

    }
    if (newUser.getCorreo()===""){
        document.getElementById("correo").style.border = "2px solid red";
        mensajeError();

    }
    if (newUser.getTelefono()===""){
        document.getElementById("telefono").style.border = "2px solid red";
        mensajeError();

    }
    if (newUser.getGenero()===""){
        document.getElementById("genero").style.border = "2px solid red";
        mensajeError();

    }
    if (newUser.getContrasenia()===""){
        document.getElementById("contrasenia").style.border = "2px solid red";
        mensajeError();

    }
    if (newUser.getVerifyContrasenia()===""){
        document.getElementById("verifyContrasenia").style.border = "2px solid red";
        mensajeError();

    }
    if (newUser.getPertenencia()===""){
        document.getElementById("verifyContrasenia").style.border = "2px solid red";
        mensajeError();

    }
    else{
        guardarRegistro(newUser)
    }
}

function mensajeError(){
    Swal.fire({
        icon: 'error',
        title: 'Información faltante',
        text: 'Por favor llene todos los espacios para completar el registro.',
    })
    
}