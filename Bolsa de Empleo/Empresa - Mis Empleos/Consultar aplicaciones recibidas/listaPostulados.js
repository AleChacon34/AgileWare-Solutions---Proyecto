'use strict';

datos = [
    {nombre: "Jonathan", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", estado: "Enviada"},
    {nombre: "Marco", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", estado: "Enviada"},
    {nombre: "Cristopher", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", estado: "Enviada"}
]

document.addEventListener("DOMContentLoaded", () =>{
    let genBtn = document.querySelector("button[name='generar-reporte']");
    genBtn.addEventListener('click', generarReporte);
});

function generarReporte(datos){
    document.createElement("table");

}