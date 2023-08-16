'use strict';

import { UserService } from '../../services/user.service.js';

document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

function loadData() {
    let nombre = document.getElementById('nombre');
    let correo = document.getElementById('correo');
    let telefono = document.getElementById('telefono');

    let id = JSON.parse(localStorage.getItem('activeUser'));
    UserService.getOneUser(id).then(res => {
        nombre.innerHTML = `${res.data.data.nombre}`;
        correo.innerHTML = `${res.data.data.correo}`;
        telefono.innerHTML = `${res.data.data.telefono}`;
    });
}