"use strict";

/**
 * Al cargarse las paginas, llama al evento del boton de cierre de sesion
 */
document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector('#logOut');
  btn.onclick = logOut;
});

/**
 * Funcion que se encargar de redirigir a la pagina de inicio al dar 'click' en el boton de cierre de sesion
 */
function logOut() {
  location.replace("/Bolsa de Empleo/Pagina de Inicio/paginaInicio.html");
}
