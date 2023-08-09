'use strict';

import { BuscadorService } from "../../services/buscador.service.js";

document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

function loadData() {
    let user = JSON.parse(localStorage.getItem('activeUser'));

    let nombreBuscador = document.getElementById('nombreBuscador');
    let apellidosBuscador = document.getElementById('apellidosBuscador');
    let correoBuscador = document.getElementById('correoBuscador');
    let telefonoBuscador = document.getElementById('telefonoBuscador');
    let generoBuscador = document.getElementById('generoBuscador');

    BuscadorService.getOneBuscador(user).then(res => {
        let userData = res.data.data;

        console.log(userData);

        nombreBuscador.innerHTML = `${userData.nombreBuscador}`;
        apellidosBuscador.innerHTML = `${userData.apellidosBuscador}`;
        correoBuscador.innerHTML = `${userData.correoBuscador}`;
        telefonoBuscador.innerHTML = `${userData.telefonoBuscador}`;
        generoBuscador.innerHTML = `${userData.generoBuscador}`;
    });
}