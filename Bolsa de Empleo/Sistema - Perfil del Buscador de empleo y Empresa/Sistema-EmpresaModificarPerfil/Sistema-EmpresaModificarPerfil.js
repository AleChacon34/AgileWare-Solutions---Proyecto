"use strict";

import { UserEmpresa } from '../../models/userEmpresa.model.js';
import { UserService } from '../../services/user.service.js';

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    let form = document.querySelector('form');
    form.addEventListener('submit', getData);
});

function loadData() {
    let nombre = document.getElementById('nombre');
    let correo = document.getElementById('correo');
    let telefono = document.getElementById('telefono');

    let id = JSON.parse(localStorage.getItem('activeUser'));
    UserService.getOneUser(id).then(res => {
        nombre.value = res.data.data.nombre;
        correo.value = res.data.data.correo;
        telefono.value = res.data.data.telefono;
    });
}

function getData(e) {
    e.preventDefault();
    console.log(e.target);
    let formData = new FormData(e.target);
    let newUser = new UserEmpresa(formData);
    console.log(newUser);
    //validateData(newUser);
}

function validateData(userData) {
    if (userData.getNombre() == null) {
        errorValidationMessage();
        document.getElementById("nombre").style.border = "2px solid red";
    } else if (userData.getCorreo() == null) {
        errorValidationMessage();
        document.getElementById("correo").style.border = "2px solid red";
    } else if (userData.getTelefono() == null) {
        errorValidationMessage();
        document.getElementById("telefono").style.border = "2px solid red";
    } else if (userData.getContrasenia() == null) {
        errorValidationMessage();
        document.getElementById("contrasenia").style.border = "2px solid red";
    } else if (userData.getVerifyContrasenia() == null) {
        errorValidationMessage();
        document.getElementById("verifyContrasenia").style.border = "2px solid red";
    } else {
        verifyPass(userData);
    }
}

function verifyPass(userData) {
    if (userData.getContrasenia() !== userData.getVerifyContrasenia()) {
        Swal.fire("Por favor, verifique la contraseña correctamente", "", "error");
    } else {
        let id = JSON.parse(localStorage.getItem('activeUser'));
        UserService.updateUser(id, userData).then(res => {
            Swal.fire({
                icon: "success",
                title: "Datos Actualizados",
                text: "Los datos fueron actualizados correctamente",
                timer: 1500,
            });
        }).catch(err => {
            Swal.fire({
                icon: "error",
                title: "Ha habido un error",
                text: "Por favor, intentelo de nuevo",
                timer: 1500,
            });
        });
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