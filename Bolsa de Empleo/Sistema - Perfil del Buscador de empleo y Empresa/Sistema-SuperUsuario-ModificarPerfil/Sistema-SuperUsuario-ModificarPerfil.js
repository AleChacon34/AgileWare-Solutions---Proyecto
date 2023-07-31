"use strict";

let superUser = {
    name: "Marco",
    lastName: "Chacon",
    email: "marco@gamil.com",
    phone: "11223344",
    gender: "Masculino",
    pass: "12345678",
}

document.addEventListener('DOMContentLoaded', () => {
    let btnActualizar = document.querySelector('#btnActualizar');
    btnActualizar.addEventListener('click', getData);
});

function getData() {
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let pass = document.getElementById('pass').value;
    let verifyPass = document.getElementById('verifyPass').value;

    let superUser = {
        name, 
        lastName,
        email,
        phone,
        pass,
        verifyPass
    }

    verifyData(superUser);
}

function verifyData(user) {
    if (user.name == "") {
        errorValidationMessage();
        document.getElementById("name").style.border = "2px solid red";
    } else if (user.lastName == "") {
        errorValidationMessage();
        document.getElementById("lastName").style.border = "2px solid red";
    } else if (user.email == "") {
        errorValidationMessage();
        document.getElementById("email").style.border = "2px solid red";
    } else if (user.phone == "") {
        errorValidationMessage();
        document.getElementById("phone").style.border = "2px solid red";
    } else if (user.pass == "") {
        errorValidationMessage();
        document.getElementById("pass").style.border = "2px solid red";
    } else if (user.verifyPass == "") {
        errorValidationMessage();
        document.getElementById("verifyPass").style.border = "2px solid red";
    } else {
        verifyPass(user);
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

function verifyPass(user) {
    if (user.verifyPass == user.pass) {
        updateData(user);
    } else {
        Swal.fire("Por favor, verifica las contraseñas", "", "error");
    }
}

function updateData(user) {
    superUser.name = user.name;
    superUser.lastName = user.lastName;
    superUser.email = user.email;
    superUser.phone = user.phone;
    superUser.pass = user.pass;

    notificarActualizar();
    console.log(user);
    location.href = "../Sistema-Super-Usuario/Sistema-Super-Usuario.html";
}