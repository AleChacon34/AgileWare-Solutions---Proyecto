"use strict";

import { UserService } from "../../services/user.service.js";
import { User } from "../../models/user.model.js";

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    let form = document.querySelector('form');
    form.addEventListener('submit', getData);
});

function loadData() {
    let nombre = document.getElementById('name');
    let apellidos = document.getElementById('lastName');
    let correo = document.getElementById('email');
    let telefono = document.getElementById('phone');
    let genero = document.getElementById('gender');

    let id = JSON.parse(localStorage.getItem('activeUser'));
    
    UserService.getOneUser(id).then(res => {
        nombre.value = res.data.data.nombre;
        apellidos.value = res.data.data.apellidos;
        correo.value = res.data.data.correo;
        telefono.value = res.data.data.telefono;
        genero.value = res.data.data.genero;
    });
}

function getData(e) {
    e.preventDefault()
    let formData = new FormData(e.target);
    let newUser = new User(formData);
    newUser.setRol("Buscador");
    verifyData(newUser);
}

function verifyData(newUser) {
    if (newUser.getNombre() == "") {
        errorValidationMessage();
        document.getElementById("name").style.border = "2px solid red";
    } if (newUser.getApellidos() == "") {
        errorValidationMessage();
        document.getElementById("lastName").style.border = "2px solid red";
    } if (newUser.getCorreo() == "") {
        errorValidationMessage();
        document.getElementById("email").style.border = "2px solid red";
    } if (newUser.getTelefono() == "") {
        errorValidationMessage();
        document.getElementById("phone").style.border = "2px solid red";
    } if (newUser.getContrasenia() == "") {
        errorValidationMessage();
        document.getElementById("pass").style.border = "2px solid red";
    } if (newUser.getVerifyContrasenia() == "") {
        errorValidationMessage();
        document.getElementById("verifyPass").style.border = "2px solid red";
    } else {
        verifyPass(newUser);
    }
}

function errorValidationMessage() {
    Swal.fire({
        title: "No dejar espacios en blanco",
        icon: "error",
        customClass: {
            confirmButton: "btnError"
        }
    });
}

function verifyPass(newUser) {
    if (newUser.verifyPass == newUser.contrasenia) {
        UserService.updateUser(JSON.parse(localStorage.getItem('activeUser')), newUser).then(res => {
            notificarActualizar();
            setInterval(1000);
            location.href = "/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Perfil usuario/perfilUsuario.html"
        });
    } else {
        Swal.fire("Por favor, verifica las contraseñas", "", "error");
    }
}

function notificarActualizar(){
    Swal.fire({
        icon: "success",
        title: "Datos Actualizados",
        text: "Los datos fueron actualizados correctamente",
        timer: 1500,
    });
}