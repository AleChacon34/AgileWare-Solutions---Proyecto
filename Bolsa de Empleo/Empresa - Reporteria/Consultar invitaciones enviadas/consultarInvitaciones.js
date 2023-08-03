'use strict';

document.addEventListener("DOMContentLoaded", () =>{
    let genBtn = document.querySelector("button[name='generar-reporte']");
    genBtn.addEventListener('click', generarReporte);
});

function generarReporte(){
    let datosEmpresas = [
        {nombreEmpresa: "Empresa1", correoEmpresa: "empresa@empresa.com", estadoEmpresa: "Inactiva"},
        {nombreEmpresa: "Empresa2", correoEmpresa: "empresa@empresa.com", estadoEmpresa: "Activa"},
        {nombreEmpresa: "Empresa3", correoEmpresa: "empresa@empresa.com", estadoEmpresa: "Activa"},
        {nombreEmpresa: "Empresa4", correoEmpresa: "empresa@empresa.com", estadoEmpresa: "Inactiva"},
        {nombreEmpresa: "Empresa5", correoEmpresa: "empresa@empresa.com", estadoEmpresa: "Activa"},
        {nombreEmpresa: "Empresa6", correoEmpresa: "empresa@empresa.com", estadoEmpresa: "Inactiva"}
    ];

    let datosInvitaciones = [
        {nombreEmpresa: "Empresa1", correoEmpresa: "empresa@empresa.com", correoEmisor: "super-usuario@super-usuario.com"},
        {nombreEmpresa: "Empresa2", correoEmpresa: "empresa@empresa.com", correoEmisor: "super-usuario@super-usuario.com"},
        {nombreEmpresa: "Empresa3", correoEmpresa: "empresa@empresa.com", correoEmisor: "super-usuario@super-usuario.com"},
        {nombreEmpresa: "Empresa4", correoEmpresa: "empresa@empresa.com", correoEmisor: "super-usuario@super-usuario.com"},
        {nombreEmpresa: "Empresa5", correoEmpresa: "empresa@empresa.com", correoEmisor: "super-usuario@super-usuario.com"},
        {nombreEmpresa: "Empresa6", correoEmpresa: "empresa@empresa.com", correoEmisor: "super-usuario@super-usuario.com"}
    ];

    let opcionSeleccion = document.querySelector("#seleccion-reporte");

    switch (opcionSeleccion.value){
        case "INVITACIONES ENVIADAS":
            imprimirReporte(datosInvitaciones, opcionSeleccion);
            break;
        case "REPORTE DE EMPRESAS":
            imprimirReporte(datosEmpresas, opcionSeleccion);
            break;
        default:
            break;
    }
}

function imprimirReporte(listaDatos, opcion){
    //Borrar el cuerpo de la tabla ya existente en el HTML
    let crearTabla = document.querySelector(".tabla-datos tbody");
    crearTabla.innerHTML = "";

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