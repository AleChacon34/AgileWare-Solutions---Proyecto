"use strict";

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
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let gender = document.getElementById('gender').value;
    let pass = document.getElementById('pass').value;
    let verifyPass = document.getElementById('verifyPass').value;

    let newUser = {
        name, 
        lastName,
        email,
        phone,
        gender,
        pass,
        verifyPass
    }

    verifyData(newUser);
}

function verifyData(newUser) {
    if (newUser.name == "") {
        errorValidationMessage();
        document.getElementById("name").style.border = "2px solid red";
    } else if (newUser.lastName == "") {
        errorValidationMessage();
        document.getElementById("lastName").style.border = "2px solid red";
    } else if (newUser.email == "") {
        errorValidationMessage();
        document.getElementById("email").style.border = "2px solid red";
    } else if (newUser.phone == "") {
        errorValidationMessage();
        document.getElementById("phone").style.border = "2px solid red";
    } else if (newUser.pass == "") {
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
    if (newUser.verifyPass == newUser.pass) {
        updateData(newUser);
    } else {
        Swal.fire("Por favor, verifica las contraseñas", "", "error");
    }
}

function updateData(newUser) {
    user.name = newUser.name;
    user.lastName = newUser.lastName;
    user.email = newUser.email;
    user.phone = newUser.phone;
    user.pass = newUser.pass;

    notificarActualizar();
    console.log(user);
}

function notificarActualizar(){
    Swal.fire({
        icon: "success",
        title: "Datos Actualizados",
        text: "Los datos fueron actualizados correctamente",
        timer: 1500,
    });
}