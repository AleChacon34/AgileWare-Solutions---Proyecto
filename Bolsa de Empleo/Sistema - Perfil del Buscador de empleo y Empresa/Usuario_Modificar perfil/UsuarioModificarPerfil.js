"use strict";

import { UserService } from "../../services/user.service.js";

let user = {
    name: "Marco",
    lastName: "Chacon",
    email: "marco@gamil.com",
    phone: "11223344",
    gender: "Masculino",
    pass: "12345678",
}

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    let btn = document.querySelector('#actualizar_perfil');
    btn.addEventListener('click', getData);
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

function getData() {
    let nombre = document.getElementById('name').value;
    let apellidos = document.getElementById('lastName').value;
    let correo = document.getElementById('email').value;
    let telefono = document.getElementById('phone').value;
    let genero = document.getElementById('gender').value;
    let contrasenia = document.getElementById('pass').value;
    let verifyPass = document.getElementById('verifyPass').value;

    let newUser = {
        nombre, 
        apellidos,
        correo,
        telefono,
        genero,
        contrasenia,
        verifyPass
    }

    verifyData(newUser);
}

function verifyData(newUser) {
    if (newUser.nombre == "") {
        errorValidationMessage();
        document.getElementById("name").style.border = "2px solid red";
    } else if (newUser.apellidos == "") {
        errorValidationMessage();
        document.getElementById("lastName").style.border = "2px solid red";
    } else if (newUser.correo == "") {
        errorValidationMessage();
        document.getElementById("email").style.border = "2px solid red";
    } else if (newUser.telefono == "") {
        errorValidationMessage();
        document.getElementById("phone").style.border = "2px solid red";
    } else if (newUser.contrasenia == "") {
        errorValidationMessage();
        document.getElementById("pass").style.border = "2px solid red";
    } else if (newUser.verifyPass == "") {
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