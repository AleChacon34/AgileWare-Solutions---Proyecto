"use-strict"

import { LoginService } from "../../services/login.service.js";
import { User } from "../../models/user.model.js";


document.addEventListener("DOMContentLoaded", () =>{
    let formData = document.querySelector("form");
    formData.addEventListener('submit', test);
})

function test(e) {
    e.preventDefault(e.target);
    let formData = new FormData(e.target);
    let newUser = new User(formData);
    guardarRegistro(newUser);
}

function guardarRegistro(newUser){
    if (!((newUser.getNombre() === "") || (newUser.getApellidos() === "") || (newUser.getCorreo() === "") || (newUser.getTelefono() === "") || (newUser.getGenero() === "") || (newUser.getContrasenia() === "") || (newUser.getVerifyContrasenia() === "" ))){
        LoginService.registerUser(newUser).then((res) => {
            console.log(res);
            Swal.fire({
                title: "Usuario registrado con exito",
                icon: "success"
            }).then(result => {
                location.href = "/Bolsa de Empleo/Sistema - Ingreso y Registro/Inicio de sesion/inicioSesion.html"
            });
        }).catch(err => {
            Swal.fire({
                title: "Usuario ya existente",
                icon: "error"
            })
        });
    } else{
        Swal.fire({
            icon: 'error',
            title: 'Información faltante',
            text: 'Por favor llene todos los espacios para completar el registro.',
        })
        validarRegistro(newUser);
    }
}

function validarRegistro (newUser){
    console.log (newUser)
    if (newUser.getNombre() === ""){
        document.getElementById("nombre-usuario").style.border = "2px solid red";
    } 
    if (newUser.getApellidos() === ""){
        document.getElementById("apellidos-usuario").style.border = "2px solid red";
    } 
    if (newUser.getCorreo() === ""){
        document.getElementById("correo").style.border = "2px solid red";
    } 
    if (newUser.getTelefono() === ""){
        document.getElementById("numero-telefono").style.border = "2px solid red";
    } 
    if (newUser.getGenero() === ""){
        document.getElementById("seleccion-genero").style.border = "2px solid red";
    } 
    if (newUser.getContrasenia() === ""){
        document.getElementById("contrasenia").style.border = "2px solid red";
    } 
    if (newUser.getVerifyContrasenia() === ""){
        document.getElementById("verifycontrasenia").style.border = "2px solid red";
    }
}