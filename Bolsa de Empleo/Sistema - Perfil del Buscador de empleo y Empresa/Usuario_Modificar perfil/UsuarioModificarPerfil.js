"use strict";

import { BuscadorService } from "../../services/buscador.service.js";

let user = {
    name: "Marco",
    lastName: "Chacon",
    email: "marco@gamil.com",
    phone: "11223344",
    gender: "Masculino",
    pass: "12345678",
}

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('#actualizar_perfil');
    btn.addEventListener('click', getData);
});

function getData() {
    let nombreBuscador = document.getElementById('name').value;
    let apellidosBuscador = document.getElementById('lastName').value;
    let correoBuscador = document.getElementById('email').value;
    let telefonoBuscador = document.getElementById('phone').value;
    let generoBuscador = document.getElementById('gender').value;
    let contraseniaBuscador = document.getElementById('pass').value;
    let verifyPass = document.getElementById('verifyPass').value;

    let newUser = {
        nombreBuscador, 
        apellidosBuscador,
        correoBuscador,
        telefonoBuscador,
        generoBuscador,
        contraseniaBuscador,
        verifyPass
    }

    verifyData(newUser);
}

function verifyData(newUser) {
    if (newUser.nombreBuscador == "") {
        errorValidationMessage();
        document.getElementById("name").style.border = "2px solid red";
    } else if (newUser.apellidosBuscador == "") {
        errorValidationMessage();
        document.getElementById("lastName").style.border = "2px solid red";
    } else if (newUser.correoBuscador == "") {
        errorValidationMessage();
        document.getElementById("email").style.border = "2px solid red";
    } else if (newUser.telefonoBuscador == "") {
        errorValidationMessage();
        document.getElementById("phone").style.border = "2px solid red";
    } else if (newUser.contraseniaBuscador == "") {
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
    if (newUser.verifyPass == newUser.contraseniaBuscador) {
        BuscadorService.updateBuscador(JSON.parse(localStorage.getItem('activeUser')), newUser).then(res => {
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