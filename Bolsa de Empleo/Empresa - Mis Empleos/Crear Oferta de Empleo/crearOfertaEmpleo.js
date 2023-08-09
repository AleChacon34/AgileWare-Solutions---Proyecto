"use-strict";

// Asignamiento de alerta para los botones de Publicar y Ocultar Oferta

document.addEventListener("DOMContentLoaded", () =>{
   
    // let ocultarBtn = document.querySelector("button[name='ocultar']");
    let form = document.querySelector("#ofertaForm");
    form.addEventListener("submit", postOferta);
})

// function publicarOferta(e){
//     e.preventDefault(e.target);
//     Swal.fire({
//         customClass: {popup: "swal"},
//         icon: 'success',
//         title: 'Oferta publicada con éxito',
//         confirmButtonText: 'Continuar',
//       }).then((result) => {
//         if (result.isConfirmed) {
//             window.location.replace("/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarListaOfertas.html")
//         };
//       });
// }

// function ocultarOferta(e){
//     e.preventDefault(e.target);
//     console.log("oculta")
//     Swal.fire({
//         customClass: {popup: "swal"},
//         icon: 'success',
//         title: 'Oferta ocultada con éxito',
//         confirmButtonText: 'Continuar',
//       }).then((result) => {
//         if (result.isConfirmed) {
//             window.location.replace("/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarListaOfertas.html")
//         }
//       });
// }

function postOferta(){
  let publicarBtn = document.querySelector("button[name='publicar']");
  let cuadroTitulo= document.querySelector("#seccionTitulo");
  let cuadroRequerimientos= document.querySelector("#seccionRequerimientos");
  let cuadroDescripcion= document.querySelector("#seccionDescripcion");

  if ((cuadroTitulo.value === "" && cuadroRequerimientos.value === "" && cuadroDescripcion.value === "")){
    publicarBtn.disabled = true;
    console.log("Vacio")
  }
  else{
    Swal.fire({
      customClass: {popup: "swal"},
      icon: 'success',
      title: 'Oferta publicada con éxito',
      confirmButtonText: 'Continuar',
    }).then((result) => {
      if (result.isConfirmed) {
          window.location.replace("/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarListaOfertas.html")
      };
    });
  }
}
