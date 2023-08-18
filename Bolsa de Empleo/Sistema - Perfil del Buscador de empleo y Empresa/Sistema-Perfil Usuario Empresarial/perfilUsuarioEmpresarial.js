'use strict';

import { UserService } from "../../services/user.service.js";

document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

function loadData() {
    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let correo = document.getElementById('correo');
    let telefono = document.getElementById('telefono');
    let genero = document.getElementById('genero');

    let id = localStorage.getItem('activeUser');
    UserService.getOneUser(id).then(res => {
        nombre.innerHTML = `${res.data.data.nombre}`;
        apellidos.innerHTML = `${res.data.data.apellidos}`;
        correo.innerHTML = `${res.data.data.correo}`;
        telefono.innerHTML = `${res.data.data.telefono}`;
        genero.innerHTML = `${res.data.data.genero}`;
    });
}