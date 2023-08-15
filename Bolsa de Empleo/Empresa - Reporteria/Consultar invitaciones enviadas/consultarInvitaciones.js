'use strict';

import { UserService } from "../../services/user.service.js"

document.addEventListener("DOMContentLoaded", () =>{
    let genBtn = document.querySelector("button[name='generar-reporte']");
    genBtn.addEventListener('click', imprimirReporte);
});

function imprimirReporte(){
    let opcionSeleccion = document.querySelector("#seleccionReporte");
    //Borrar el cuerpo de la tabla ya existente en el HTML
    let crearTabla = document.querySelector(".tabla-datos tbody");
    crearTabla.innerHTML = "";
    UserService.filter("Empresa").then((response)=>{
        let data =  response.data.data;
        console.log(data)
    })

    // Diferentes tipos de reportes
    switch (opcion.value){
        case "INVITACIONES ENVIADAS":
            //Crear el Table Header
            let headRowI = crearTabla.insertRow(0)
            headRowI.insertCell(0).outerHTML ="<th>Nombre de la Empresa</th>";
            headRowI.insertCell(1).outerHTML ="<th>Correo Electrónico</th>";
            headRowI.insertCell(2).outerHTML ="<th>Correo Emisor</th>";

            //Crear las filas con la informacion de los objetos
            for(let dato = 0;  dato < listaDatos.length; dato++){
                let row = crearTabla.insertRow();
                row.insertCell(0).appendChild(document.createTextNode(listaDatos[dato].nombreEmpresa));
                row.insertCell(1).appendChild(document.createTextNode(listaDatos[dato].correoEmpresa));
                row.insertCell(2).appendChild(document.createTextNode(listaDatos[dato].correoEmisor));
            }
            break;
        case "REPORTE DE EMPRESAS":
            //Crear el Table Header
            let headRowR = crearTabla.insertRow(0)
            headRowR.insertCell(0).outerHTML ="<th>Nombre de la Empresa</th>";
            headRowR.insertCell(1).outerHTML ="<th>Correo Electrónico</th>";
            headRowR.insertCell(2).outerHTML ="<th>Estado perfil</th>";

            //Crear las filas con la informacion de los objetos
            for(let dato = 0;  dato < listaDatos.length; dato++){
                let row = crearTabla.insertRow();
                row.insertCell(0).appendChild(document.createTextNode(listaDatos[dato].nombreEmpresa));
                row.insertCell(1).appendChild(document.createTextNode(listaDatos[dato].correoEmpresa));
                // Crear enlace a cambio de estado de empresa
                let newAnch = document.createElement("a");
                newAnch.setAttribute("href", "/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Sistema-Super-Usuario/SuperUsuarioDesactivarEmpresas/desactivarEmpresas.html")
                newAnch.appendChild(document.createTextNode(listaDatos[dato].estadoEmpresa));
                row.insertCell(2).appendChild(newAnch);
            }
            break;
        default:
            break;
    }
}