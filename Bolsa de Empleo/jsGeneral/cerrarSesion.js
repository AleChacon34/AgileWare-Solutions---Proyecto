"use strict";
// import { crearBarraNavegacion } from "./barraNavegacionBuscador.js";
/**
 * Al cargarse las paginas, llama al evento del boton de cierre de sesion
 */
document.addEventListener("mouseover", () => {
  let btn = document.querySelector('#logOut');
  btn.addEventListener('click', logOut);
});

/**
 * Funcion que se encargar de redirigir a la pagina de inicio al dar 'click' en el boton de cierre de sesion
 */
function logOut() {
  Swal.fire(
    {
      icon: "question",
      title: "Cerrar sesión",
      text: "¿Está seguro(a) que desea cerrar la sesión?",
      showCancelButton: true,
      cancelButtonText: "Regresar",
      confirmButtonText: "Cerrar sesión"
    }
  ).then((result)=>{
    if (result.isConfirmed){
      location.replace("/Bolsa de Empleo/Pagina de Inicio/paginaInicio.html");
    }
  })
  
}
