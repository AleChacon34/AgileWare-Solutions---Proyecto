'use strict';

import { OfertaService } from "../../services/consultarOferta.services.js"

document.addEventListener("DOMContentLoaded", () =>{
    let genBtn = document.querySelector("button[name='generar-reporte']");
    genBtn.addEventListener('click', imprimirReporte);
});

function imprimirReporte(){
    OfertaService.findAll().then((response)=>{
        let data = response.data.data;
        let opcionSeleccion = document.querySelector("#seleccion-reporte");
        console.log(data);
        console.log(data.visibilidad);
        //Borrar el cuerpo de la tabla ya existente en el HTML
        let crearTabla = document.querySelector(".tabla-datos tbody");
        crearTabla.innerHTML = "";
        
        //Visualizar ofertas de la empresa
        if (opcionSeleccion.value === "OFERTAS"){
            //Crear el Table Header
            let headRowO = crearTabla.insertRow()
            headRowO.insertCell(0).outerHTML ="<th>ID</th>";
            headRowO.insertCell(1).outerHTML ="<th>Título de la oferta</th>";
            headRowO.insertCell(2).outerHTML ="<th>Fecha de creación</th>";
            headRowO.insertCell(3).outerHTML ="<th>Estado</th>";

            data.forEach((data)=>{
                //Crear las filas con la informacion de los objetos
                if (data.visibilidad === "Activa" && data.publicador === "Empresa"){
                    let row = crearTabla.insertRow();
                    row.insertCell(0).appendChild(document.createTextNode(data._id));
                    row.insertCell(1).appendChild(document.createTextNode(data.seccionTitulo));
                    row.insertCell(2).appendChild(document.createTextNode(data.createdAt));
                    row.insertCell(3).appendChild(document.createTextNode(data.estadoOferta));   
                }
            });
        }  

        //Visualizar colaboradores
        if (opcionSeleccion.value === "COLABORADORES"){
            //Crear el Table Header
            let headRowO = crearTabla.insertRow()
            headRowO.insertCell(0).outerHTML ="<th>ID</th>";
            headRowO.insertCell(1).outerHTML ="<th>Nombre del colaborador</th>";
            headRowO.insertCell(2).outerHTML ="<th>Fecha de registro</th>";
            headRowO.insertCell(3).outerHTML ="<th>Puesto empresarial</th>";

            data.forEach((data)=>{
                //Crear las filas con la informacion de los objetos
                if (data.visibilidad === "Activa" && data.publicador === "Empresa"){
                    let row = crearTabla.insertRow();
                    row.insertCell(0).appendChild(document.createTextNode(data._id));
                    row.insertCell(1).appendChild(document.createTextNode(data.seccionTitulo));
                    row.insertCell(2).appendChild(document.createTextNode(data.createdAt));
                    row.insertCell(3).appendChild(document.createTextNode(data.estadoOferta));   
                }
            });
        };

        //Visualizar colaboradores
        if (opcionSeleccion.value === "BUSCADORES DE EMPLEO"){
            //Crear el Table Header
            let headRowO = crearTabla.insertRow()
            headRowO.insertCell(0).outerHTML ="<th>ID</th>";
            headRowO.insertCell(1).outerHTML ="<th>Nombre del buscador</th>";
            headRowO.insertCell(2).outerHTML ="<th>Correo electrónico</th>";

            data.forEach((data)=>{
                //Crear las filas con la informacion de los objetos
                if (data.visibilidad === "Activa" && data.publicador === "Empresa"){
                    let row = crearTabla.insertRow();
                    row.insertCell(0).appendChild(document.createTextNode(data._id));
                    row.insertCell(1).appendChild(document.createTextNode(data.seccionTitulo));
                    row.insertCell(2).appendChild(document.createTextNode(data.createdAt));
                }
            });
        };

        //Visualizar colaboradores
        if (opcionSeleccion.value === "POSTULACIONES DE EMPLEO"){
            //Crear el Table Header
            let headRowO = crearTabla.insertRow()
            headRowO.insertCell(0).outerHTML ="<th>ID</th>";
            headRowO.insertCell(1).outerHTML ="<th>Nombre del buscador</th>";
            headRowO.insertCell(2).outerHTML ="<th>Titulo de la oferta</th>";
            headRowO.insertCell(3).outerHTML ="<th>Estado de la postulación</th>";

            data.forEach((data)=>{
                //Crear las filas con la informacion de los objetos
                if (data.visibilidad === "Activa" && data.publicador === "Empresa"){
                    let row = crearTabla.insertRow();
                    row.insertCell(0).appendChild(document.createTextNode(data._id));
                    row.insertCell(1).appendChild(document.createTextNode(data.seccionTitulo));
                    row.insertCell(2).appendChild(document.createTextNode(data.createdAt));
                    row.insertCell(3).appendChild(document.createTextNode(data.estadoOferta));   
                }
            });
        };

        //Visualizar colaboradores
        if (opcionSeleccion.value === "INVITACIONES"){
            //Crear el Table Header
            let headRowO = crearTabla.insertRow()
            headRowO.insertCell(0).outerHTML ="<th>ID</th>";
            headRowO.insertCell(1).outerHTML ="<th>Puesto del usuario</th>";
            headRowO.insertCell(2).outerHTML ="<th>Fecha de envío</th>";
            headRowO.insertCell(3).outerHTML ="<th>Correo Electrónico</th>";

            data.forEach((data)=>{
                //Crear las filas con la informacion de los objetos
                if (data.visibilidad === "Activa" && data.publicador === "Empresa"){
                    let row = crearTabla.insertRow();
                    row.insertCell(0).appendChild(document.createTextNode(data._id));
                    row.insertCell(1).appendChild(document.createTextNode(data.seccionTitulo));
                    row.insertCell(2).appendChild(document.createTextNode(data.createdAt));
                    row.insertCell(3).appendChild(document.createTextNode(data.estadoOferta));   
                }
            });
        };
    });
}