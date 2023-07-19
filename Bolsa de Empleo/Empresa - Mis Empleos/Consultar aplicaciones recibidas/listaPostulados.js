'use strict';

document.addEventListener("DOMContentLoaded", () =>{
    let genBtn = document.querySelector("button[name='generar-reporte']");
    genBtn.addEventListener('click', generarReporte);
});

function generarReporte(){
    let datosUsuarios = [
        {nombre: "Jonathan", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", estado: "Enviada"},
        {nombre: "Marco", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", estado: "Enviada"},
        {nombre: "Cristopher", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", estado: "Enviada"}
    ]
    obtenerSeleccion(datosUsuarios);
}

function obtenerSeleccion(listaDatos){
    let opcionSeleccion = document.querySelector("#seleccion-reporte");
    imprimirReporte(listaDatos, opcionSeleccion);
}

function imprimirReporte(listaDatos, opcion){
    //Borrar el cuerpo de la tabla ya existente en el HTML
    let crearTabla = document.querySelector(".tabla-datos tbody");
    crearTabla.innerHTML = "";

    // Diferentes tipos de reportes
    switch (opcion.value){
        case "POSTULACIONES":
             //Crear el Table Header
            let headRow = crearTabla.insertRow(0)
            headRow.insertCell(0).outerHTML ="<th>Nombre</th>";
            headRow.insertCell(1).outerHTML ="<th>Apellidos</th>";
            headRow.insertCell(2).outerHTML ="<th>Correo Electrónico</th>";
            headRow.insertCell(3).outerHTML ="<th>Estado</th>";

            //Crear las filas con la informacion de los objetos
            for(let dato = 0;  dato < listaDatos.length; dato++){
                let row = crearTabla.insertRow((dato+1));
                row.insertCell(0).appendChild(document.createTextNode(listaDatos[dato].nombre));
                row.insertCell(1).appendChild(document.createTextNode(listaDatos[dato].apellidos));
                row.insertCell(2).appendChild(document.createTextNode(listaDatos[dato].correoElectronico));
                row.insertCell(3).appendChild(document.createTextNode(listaDatos[dato].estado));
            }
            break;
        case "COLABORADORES":
            console.log("COLABORADORES")
            break;
        case "BUSCADORES DE EMPLEO":
            console.log("BUSCADORES DE EMPLEO")
            break;
        case "MIS EMPLEOS":
            console.log("MIS EMPLEOS")
            break;
        default:
            break;
    }
   
}