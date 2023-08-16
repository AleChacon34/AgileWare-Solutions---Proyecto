'use strict';

import { UserService } from "../../services/user.service.js"

document.addEventListener("DOMContentLoaded", () =>{
    let genBtn = document.querySelector("button[name='generar-reporte']");
    genBtn.addEventListener('click', imprimirReporte);
});

function imprimirReporte(){
    let opcionSeleccion = document.querySelector("#seleccionReporte");
    
    //Ver reporte de empresas
    if(opcionSeleccion.value === "REPORTE DE EMPRESAS"){
        UserService.filter("Empresa").then((response)=>{
            let data =  response.data.data;
            data.forEach((data)=>{ 
                //Borrar el cuerpo de la tabla ya existente en el HTML
                let crearTabla = document.querySelector(".tabla-datos tbody");
                crearTabla.innerHTML = "";
                //Crear el Table Header
                let headRowI = crearTabla.insertRow(0)
                headRowI.insertCell(0).outerHTML ="<th>Nombre de la Empresa</th>";
                headRowI.insertCell(1).outerHTML ="<th>Correo Electrónico</th>";
                headRowI.insertCell(2).outerHTML ="<th>Estado del perfil</th>";

                //Crear las filas con la informacion de los objetos
                let row = crearTabla.insertRow();
                row.insertCell(0).appendChild(document.createTextNode(data.nombre));
                row.insertCell(1).appendChild(document.createTextNode(data.correo));
                let estadoSelect = document.createElement("select");
                estadoSelect.setAttribute("id", "estadoSelect")
                let estadoOptionI = document.createElement("option");
                estadoOptionI.appendChild(document.createTextNode(data.visibilidad));
                let estadoOptionII = document.createElement("option");
                if (data.visibilidad === "Activa"){
                    estadoOptionII.appendChild(document.createTextNode("Inactiva"));
                }
                else if (data.visibilidad === "Inactiva"){
                    estadoOptionII.appendChild(document.createTextNode("Activa"));
                }
                estadoSelect.append(estadoOptionI, estadoOptionII);
                row.insertCell(2).appendChild(estadoSelect);
            })
        })
    }
    
    //Ver reporte de Administradores
    if(opcionSeleccion.value === "REPORTE DE ADMINISTRADORES"){
        UserService.filter("Administrador").then((response)=>{
            let data =  response.data.data;
            data.forEach((data)=>{ 
                //Borrar el cuerpo de la tabla ya existente en el HTML
                let crearTabla = document.querySelector(".tabla-datos tbody");
                crearTabla.innerHTML = "";
                //Crear el Table Header
                let headRowI = crearTabla.insertRow(0)
                headRowI.insertCell(0).outerHTML ="<th>Nombre de la Empresa</th>";
                headRowI.insertCell(1).outerHTML ="<th>Correo Electrónico</th>";
                headRowI.insertCell(2).outerHTML ="<th>Pertenencia</th>";
                headRowI.insertCell(3).outerHTML ="<th>Estado del perfil</th>";

                //Crear las filas con la informacion de los objetos
                let row = crearTabla.insertRow();
                row.insertCell(0).appendChild(document.createTextNode(data.nombre));
                row.insertCell(1).appendChild(document.createTextNode(data.correo));
                row.insertCell(2).appendChild(document.createTextNode(data.pertenencia));
                let estadoSelect = document.createElement("select");
                estadoSelect.setAttribute("id", "estadoSelect")
                let estadoOptionI = document.createElement("option");
                estadoOptionI.appendChild(document.createTextNode(data.visibilidad));
                let estadoOptionII = document.createElement("option");
                if (data.visibilidad === "Activa"){
                    estadoOptionII.appendChild(document.createTextNode("Inactiva"));
                }
                else if (data.visibilidad === "Inactiva"){
                    estadoOptionII.appendChild(document.createTextNode("Activa"));
                }
                estadoSelect.append(estadoOptionI, estadoOptionII);
                row.insertCell(3).appendChild(estadoSelect);
                
            })
        })
    }
}