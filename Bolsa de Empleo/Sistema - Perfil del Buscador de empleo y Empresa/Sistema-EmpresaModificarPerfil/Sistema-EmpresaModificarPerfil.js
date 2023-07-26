"use strict";

let user = {
    enterpriseName: "AgileWare Solutions",
    email: "agileware@correo.com",
    phone: "11223344",
    pass: "agileware"
}

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector("#btn");
    btn.addEventListener('click', getData);
});

function getData() {
    let enterpriseName = document.getElementById("nombreEmpresa").value;
    let email = document.getElementById("correo").value;
    let phone = document.getElementById("telefono").value;
    let pass = document.getElementById("pass").value;
    let verifyPass = document.getElementById("verifyPass").value;

    let newUserData = {
        enterpriseName,
        email,
        phone, 
        pass,
        verifyPass
    }

    validateData(newUserData);
}

function validateData(userData) {
    if (userData.enterpriseName == "") {
        errorValidationMessage();
        document.getElementById("nombreEmpresa").style.border = "2px solid red";
    } else if (userData.email == "") {
        errorValidationMessage();
        document.getElementById("correo").style.border = "2px solid red";
    } else if (userData.phone == "") {
        errorValidationMessage();
        document.getElementById("telefono").style.border = "2px solid red";
    } else if (userData.pass == "") {
        errorValidationMessage();
        document.getElementById("pass").style.border = "2px solid red";
    } else if (userData.verifyPass == "") {
        errorValidationMessage();
        document.getElementById("verifyPass").style.border = "2px solid red";
    } else {
        verifyPass(userData);
    }
}

function verifyPass(userData) {
    if (userData.pass !== userData.verifyPass) {
        Swal.fire("Por favor, verifique la contraseña correctamente", "", "error");
    } else {
        updateData(userData);
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

function updateData(userData) {
    user.enterpriseName = userData.enterpriseName;
    user.email = userData.email;
    user.phone = userData.phone;
    user.pass = userData.pass;

    notificarActualizar();

    console.log(user);
}

function notificarActualizar(){
    Swal.fire({
        icon: "success",
        title: "Datos Actualizados",
        text: "Los datos fueron actualizados correctamente",
        timer: 1500,
    })
}