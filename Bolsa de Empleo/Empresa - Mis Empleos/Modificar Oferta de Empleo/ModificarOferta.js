
'use strict';

// import { estadoOferta } from "/consultarOferta.js ";
import {OfertaService} from "../../services/consultarOferta.services.js";

//Agregar funcionalidades a todos los botones

document.addEventListener("DOMContentLoaded", () =>{
    let eliminarBtn = document.querySelector("#eliminarBtn");
    eliminarBtn.addEventListener("click", eliminarOferta);
    let id = localStorage.getItem('currentIDs');
    OfertaService.findOne(id).then((response)=>{
        let data = response.data.data;
        verOferta(data);
    })
    let form = document.querySelector("#ofertaForm");
    form.addEventListener("submit", actualizarOferta);
});

// Funcion para desplegar la informacion de la oferta seleccionada
function verOferta(data){
    let seccionTitulo = document.querySelector("#seccionTitulo");
    seccionTitulo.value = data.seccionTitulo;
    let seccionRequerimientos = document.querySelector("#seccionRequerimientos");
    seccionRequerimientos.value = data.seccionRequerimientos;
    let seccionDescripcion = document.querySelector("#seccionDescripcion");
    seccionDescripcion.value = data.seccionDescripcion;
    let estadoOferta = document.querySelector("#estadoOferta");
    estadoOferta.value = data.estadoOferta;
}


// Funcion para actualizar los datos de la Oferta
function actualizarOferta(e){
    e.preventDefault(e.target);
    Swal.fire({
        icon: "warning",
        title: 'Actualización de Oferta',
        text: "¿Desea actualizar los datos de la oferta?",
        confirmButtonText: "Actualizar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
    }).then((result) => {
        let id = localStorage.getItem('currentIDs');
        let seccionTitulo = document.querySelector("#seccionTitulo").value;
        let seccionRequerimientos = document.querySelector("#seccionRequerimientos").value;
        let seccionDescripcion = document.querySelector("#seccionDescripcion").value;
        let estadoOferta = document.querySelector("#estadoOferta").value;
        OfertaService.updateOne(id, seccionTitulo, seccionRequerimientos, seccionDescripcion, estadoOferta);
        Swal.fire({
            icon: "success",
            title: "Oferta actualizada con éxito",
        }).then(()=>{
                window.location.replace("/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarOferta.html");
            });
    });
};

// Funcion para cambiar la visibilidad de una oferta a Inactiva (eliminacion logica)
function eliminarOferta(){
    Swal.fire({
        icon: "warning",
        title: 'Eliminación de Oferta',
        text: "¿Desea eliminar los datos de la oferta?",
        confirmButtonText: "Eliminar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
    }).then((result) => {
        let id = localStorage.getItem('currentIDs');
        let seccionTitulo = document.querySelector("#seccionTitulo").value;
        let seccionRequerimientos = document.querySelector("#seccionRequerimientos").value;
        let seccionDescripcion = document.querySelector("#seccionDescripcion").value;
        let estadoOferta = document.querySelector("#estadoOferta").value;
        let visibilidad =  "Inactiva"
        OfertaService.updateOne(id, seccionTitulo, seccionRequerimientos, seccionDescripcion, estadoOferta, visibilidad);
        Swal.fire({
            icon: "success",
            title: "Oferta eliminada con éxito",
        }).then(()=>{
                window.location.replace("/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarListaOfertas.html");
            });
    });
};

// Funcion para actualizar los datos de la Oferta
function publicarOferta(){
    Swal.fire({
        customClass: ({
            container: '.container',
            popup: ".popup",
        }),
        icon: "warning",
        title: '¿Desea publicar la oferta?',
        text: "Esta oferta será visible públicamente",
        confirmButtonText: "Publicar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
    }).then((result) => {
        Swal.fire({
            icon: "success",
            title: "Oferta publicar con éxito",
            timer: 2500,
        }).then(() =>{
            if(result.isConfirmed){
                window.location.replace("/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarOferta.html");
            };
        });
    });
};

// Funcion para eliminar la Oferta
function ocultarOferta(){
    Swal.fire({
        icon: "warning",
        title: '¿Desea ocultar la oferta?',
        text: "Esta oferta dejará de ser visible públicamente",
        confirmButtonText: "Ocultar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
    }).then((result) => {
        Swal.fire({
            icon: "success",
            title: "Oferta ocultada con éxito",
            timer: 2500,
        }).then(() =>{
            if(result.isConfirmed){
                window.location.replace("/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarOferta.html");
            };
        });
    });
};