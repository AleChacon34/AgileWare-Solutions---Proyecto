"use strict";

import { UserService } from "../../services/user.service.js";
import { UserEmpresa } from "../../models/userEmpresa.model.js";

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    let form = document.querySelector('form');
    form.addEventListener('submit', getData);
});

function loadData() {
    let name = document.getElementById('name');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let gender = document.getElementById('gender');

    let id = localStorage.getItem('activeUser');
    UserService.getOneUser(id).then(res => {
        name.value = res.data.data.nombre;
        lastName.value = res.data.data.apellidos;
        email.value = res.data.data.correo;
        phone.value = res.data.data.telefono;
        gender.value = res.data.data.genero;
    });
}

function getData(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let newUser = new UserEmpresa(formData);
    console.log(newUser);
    verifiData(newUser);
}

function verifiData(newUser) {
    if (newUser.getNombre() == "") {
        errorValidationMessage();
        document.getElementById("name").style.border = "2px solid red";
    } else if (newUser.getApellidos() == "") {
        errorValidationMessage();
        document.getElementById("lastName").style.border = "2px solid red";
    } else if (newUser.getCorreo() == "") {
        errorValidationMessage();
        document.getElementById("email").style.border = "2px solid red";
    } else if (newUser.getTelefono() == "") {
        errorValidationMessage();
        document.getElementById("phone").style.border = "2px solid red";
    } else if (newUser.getContrasenia() == "") {
        errorValidationMessage();
        document.getElementById("pass").style.border = "2px solid red";
    } else if (newUser.getVerifyContrasenia() == "") {
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
    if (newUser.getVerifyContrasenia() == newUser.getContrasenia()) {
        updateData(newUser);
    } else {
        Swal.fire("Por favor, verifica las contraseñas", "", "error");
    }
}

function updateData(newUser) {
    let id = JSON.parse(localStorage.getItem('activeUser'));
    UserService.updateUser(id, newUser).then(res => {
        notificarActualizar();
        location.href = "/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Sistema-Perfil Usuario Empresarial/Sistema-Perfil -Usuario-Empresarial.html"
    }).catch(err => {
        Swal.fire({
            icon: "error",
            title: "Ha habido un error",
            text: "Por favor, inténtelo de nuevo"
        });
    });
}

function notificarActualizar(){
    Swal.fire({
        icon: "success",
        title: "Datos Actualizados",
        text: "Los datos fueron actualizados correctamente",
    });
}