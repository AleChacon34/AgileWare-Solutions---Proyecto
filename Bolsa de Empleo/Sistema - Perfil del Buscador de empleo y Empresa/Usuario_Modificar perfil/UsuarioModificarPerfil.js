"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('#actualizar-perfil');
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
}