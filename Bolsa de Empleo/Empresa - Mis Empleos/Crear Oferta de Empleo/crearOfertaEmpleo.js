"use-strict";

// Asignamiento de alerta para los botones de Publicar y Ocultar Oferta

document.addEventListener("DOMContentLoaded", () =>{
    let publicarBtn = document.querySelector("button[name='publicar']");
    let ocultarBtn = document.querySelector("button[name='ocultar']");
    publicarBtn.addEventListener("click", publicarOferta);
    ocultarBtn.addEventListener("click", ocultarOferta);
})

function publicarOferta(){
    Swal.fire({
        title: 'Oferta publicada con éxito',
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: 'Continuar',
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.replace("/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarListaOfertas.html")
        }
      })
}

function ocultarOferta(){
    console.log("oculta")
    Swal.fire({
        title: 'Oferta ocultada con éxito',
        confirmButtonText: 'Continuar',
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.replace("/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarListaOfertas.html")
        }
      })
}