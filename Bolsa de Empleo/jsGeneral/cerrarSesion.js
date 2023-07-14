"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let anchor = document.querySelector('#logOut');
  anchor.onclick = logOut;
});

function logOut() {
  location.replace("/Bolsa de Empleo/Pagina de Inicio/paginaInicio.html");
}
