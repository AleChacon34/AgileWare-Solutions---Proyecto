'use strict';

import { UserService } from "../../services/user.service.js";

document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

function loadData() {
    let id = JSON.parse(localStorage.getItem('activeUser'));

    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let correo = document.getElementById('correo');
    let telefono = document.getElementById('telefono');
    let genero = document.getElementById('genero');

    UserService.getOneUser(id).then(res => {
        let userData = res.data.data;

        console.log(userData);

        nombre.innerHTML = `${userData.nombre}`;
        apellidos.innerHTML = `${userData.apellidos}`;
        correo.innerHTML = `${userData.correo}`;
        telefono.innerHTML = `${userData.telefono}`;
        genero.innerHTML = `${userData.genero}`;
    });
}