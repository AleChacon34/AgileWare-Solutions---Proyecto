"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('#añadirEstudio');
    btn.onclick = () => {
        location.href = "agregarEstudio.html"
    };
});
