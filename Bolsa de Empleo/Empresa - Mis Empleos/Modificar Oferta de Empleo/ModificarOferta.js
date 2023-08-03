
'use strict';

// import { estadoOferta } from "/consultarOferta.js ";

//Agregar funcionalidades a todos los botones

document.addEventListener("DOMContentLoaded", () =>{
//     if (estadoOferta.textContent == "Oferta Pública"){
//         console.log("Oferta Pública")
//     }
//     else if (estadoOferta.textContent == "Oferta Oculta"){
//         console.log("Oferta Oculta")
//     }
//     else{
//         console.log("No funciona")
//     }
    let actualizarBtn = document.querySelector("#actualizar-btn");
    actualizarBtn.addEventListener('click', actualizarOferta);
    let eliminarBtn = document.querySelector("#eliminar-btn");
    eliminarBtn.addEventListener('click', eliminarOferta);
    let publicarBtn = document.querySelector("#publicar-btn");
    publicarBtn.addEventListener('click', publicarOferta);
    let ocultarBtn = document.querySelector("#ocultar-btn");
    ocultarBtn.addEventListener('click', ocultarOferta);
});

// Funcion para actualizar los datos de la Oferta
function actualizarOferta(){
    Swal.fire({
        icon: "warning",
        title: 'Actualización de Oferta',
        text: "¿Desea actualizar los datos de la oferta?",
        confirmButtonText: "Actualizar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
    }).then((result) => {
        Swal.fire({
            icon: "success",
            title: "Oferta actualizada con éxito",
            timer: 2500,
        }).then(() =>{
            if(result.isConfirmed){
                window.location.replace("/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarOferta.html");
            };
        });
    });
};

// Funcion para eliminar la Oferta
function eliminarOferta(){
    Swal.fire({
        icon: "warning",
        title: 'Eliminación de Oferta',
        text: "¿Desea eliminar los datos de la oferta?",
        confirmButtonText: "Eliminar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
    }).then((result) => {
        Swal.fire({
            icon: "success",
            title: "Oferta eliminada con éxito",
            timer: 2500,
        }).then(() =>{
            if(result.isConfirmed){
                window.location.replace("/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarOferta.html");
            };
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