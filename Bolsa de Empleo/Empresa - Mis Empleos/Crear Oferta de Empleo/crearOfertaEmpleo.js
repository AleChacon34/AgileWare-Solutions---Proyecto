"use-strict";
import { Oferta } from "./oferta.model.js";
import {OfertaService} from "../../services/consultarOferta.services.js"
// Asignamiento de alerta para los botones de Publicar y Ocultar Oferta

document.addEventListener("DOMContentLoaded", () =>{
   
    // let ocultarBtn = document.querySelector("button[name='ocultar']");
    let form = document.querySelector("#ofertaForm");
    form.addEventListener("submit", postOferta);
})


function postOferta(e){
  e.preventDefault(e.target);

  //Obtener el contenido de los espacios de la oferta
  let publicarBtn = document.querySelector("button[name='publicar']");
  let cuadroTitulo= document.querySelector("#seccionTitulo");
  let cuadroRequerimientos= document.querySelector("#seccionRequerimientos");
  let cuadroDescripcion= document.querySelector("#seccionDescripcion");

  //Poner el border de los espacios vacios en rojo
  
  if (cuadroTitulo.value === "" || cuadroRequerimientos.value === "" || cuadroDescripcion.value === ""){
    Swal.fire({
      icon: 'error',
      title: 'Por favor llene todos los espacios requeridos',
      confirmButtonText: 'Continuar',
    })
  } 
  if (cuadroTitulo.value === "" ){
    cuadroTitulo.style.border = "2px solid red";
  }

  if (cuadroRequerimientos.value === ""){
    cuadroRequerimientos.style.border = "2px solid red";
  }

  if (cuadroDescripcion.value === ""){
    cuadroDescripcion.style.border = "2px solid red";
  }

  else{
    const formData = new FormData(e.target);
    const nuevaOferta = new Oferta(formData);
    OfertaService.registrarOferta(nuevaOferta);
    alertaCreacion();
  }
} 

//Mensaje de confirmación
function alertaCreacion(){
  Swal.fire({
    customClass: {popup: "swal"},
    icon: 'success',
    title: 'Oferta agregada con éxito',
    confirmButtonText: 'Continuar',
  }).then((result) => {
    if (result.isConfirmed) {
        window.location.replace("/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarListaOfertas.html")
    };
  });
} 
  
