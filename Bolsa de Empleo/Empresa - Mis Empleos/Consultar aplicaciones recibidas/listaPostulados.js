'use strict';

// let datosUsuarios = [
//     {nombre: "Jonathan", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", estado: "Enviada"},
//     {nombre: "Marco", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", estado: "Enviada"},
//     {nombre: "Cristopher", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", estado: "Enviada"}
// ]

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
    imprimirReporte(datosUsuarios);
}

function imprimirReporte(datosUsuarios){
    //Crear una tabla, agregarla al body y asignarle una clase

    let crearTabla = document.querySelector(".tabla-datos tbody");
    crearTabla.innerHTML = "";
    //Crear el Table Header
    let headRow = crearTabla.insertRow(0)
    headRow.insertCell(0).outerHTML ="<th>Nombre</th>";
    headRow.insertCell(1).outerHTML ="<th>Apellidos</th>";
    headRow.insertCell(2).outerHTML ="<th>Correo Electrónico</th>";
    headRow.insertCell(3).outerHTML ="<th>Estado</th>";

    //Crear las filas con la informacion de los objetos
    console.log(datosUsuarios.length)
    for(let dato = 0;  dato < datosUsuarios.length; dato++){
        console.log("Funcionaaa")
        console.log(datosUsuarios)
        console.log(datosUsuarios.nombre)
        console.log(datosUsuarios.apellidos)
        let row = crearTabla.insertRow((dato+1));
        row.insertCell(0).appendChild(document.createTextNode(datosUsuarios[dato].nombre));
        row.insertCell(1).appendChild(document.createTextNode(datosUsuarios[dato].apellidos));
        row.insertCell(2).appendChild(document.createTextNode(datosUsuarios[dato].correoElectronico));
        row.insertCell(3).appendChild(document.createTextNode(datosUsuarios[dato].estado));
    }
}