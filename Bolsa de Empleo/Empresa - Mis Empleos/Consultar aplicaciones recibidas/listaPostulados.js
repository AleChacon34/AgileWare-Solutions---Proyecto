'use strict';

document.addEventListener("DOMContentLoaded", () =>{
    let genBtn = document.querySelector("button[name='generar-reporte']");
    genBtn.addEventListener('click', generarReporte);
});

function generarReporte(){
    let datosUsuariosO = [
        {id: "#123", titulo: "Ingeniería Mecatrónica", estado: "Pública"},
        {id: "#321", titulo: "Diseño Web", estado: "Oculta"},
        {id: "#213", titulo: "Data Analysis", estado: "Pública"}
    ]

    let datosUsuariosC = [
        {nombre: "Jonathan", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", rol: "Aministrador"},
        {nombre: "Marco", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", rol: "Manager"},
        {nombre: "Cristopher", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", rol: "Reclutador"}
    ]

    let datosUsuariosB = [
        {nombre: "Jonathan", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", estado: "Enviada", numeroTelefonico: "8888-8888"},
        {nombre: "Marco", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", estado: "Enviada", numeroTelefonico: "8888-8888"},
        {nombre: "Cristopher", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", estado: "Enviada", numeroTelefonico: "8888-8888"}
    ]

    let datosUsuariosP = [
        {nombre: "Jonathan", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", postulacion: "titulo de la oferta", estado: "Enviada"},
        {nombre: "Marco", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", postulacion: "titulo de la oferta", estado: "En revisión"},
        {nombre: "Cristopher", apellidos: "Mora Herra", correoElectronico: "jmorah@ucenfotec.ac.cr", postulacion: "titulo de la oferta", estado: "Denegada"}
    ]
    let opcionSeleccion = document.querySelector("#seleccion-reporte");

    switch (opcionSeleccion.value){
        case "OFERTAS":
            imprimirReporte(datosUsuariosO, opcionSeleccion);
            break;
        case "COLABORADORES":
            imprimirReporte(datosUsuariosC, opcionSeleccion);
            break;
        case "BUSCADORES DE EMPLEO":
            imprimirReporte(datosUsuariosB, opcionSeleccion);
            break;
        case "POSTULACIONES DE EMPLEO":
            imprimirReporte(datosUsuariosP, opcionSeleccion);
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
        case "OFERTAS":
            //Crear el Table Header
            let headRowO = crearTabla.insertRow(0)
            headRowO.insertCell(0).outerHTML ="<th>ID de la Oferta</th>";
            headRowO.insertCell(1).outerHTML ="<th>Título</th>";
            headRowO.insertCell(2).outerHTML ="<th>Estado</th>";

            //Crear las filas con la informacion de los objetos
            for(let dato = 0;  dato < listaDatos.length; dato++){
                let row = crearTabla.insertRow();
                row.insertCell(0).appendChild(document.createTextNode(listaDatos[dato].id));
                row.insertCell(1).appendChild(document.createTextNode(listaDatos[dato].titulo));
                row.insertCell(2).appendChild(document.createTextNode(listaDatos[dato].estado));
            }
            break;
        case "COLABORADORES":
            //Crear el Table Header
            let headRowC = crearTabla.insertRow(0)
            headRowC.insertCell(0).outerHTML ="<th>Nombre</th>";
            headRowC.insertCell(1).outerHTML ="<th>Apellidos</th>";
            headRowC.insertCell(2).outerHTML ="<th>Correo Electrónico</th>";
            headRowC.insertCell(3).outerHTML ="<th>Rol</th>";

            //Crear las filas con la informacion de los objetos
            for(let dato = 0;  dato < listaDatos.length; dato++){
                let row = crearTabla.insertRow();
                row.insertCell(0).appendChild(document.createTextNode(listaDatos[dato].nombre));
                row.insertCell(1).appendChild(document.createTextNode(listaDatos[dato].apellidos));
                row.insertCell(2).appendChild(document.createTextNode(listaDatos[dato].correoElectronico));
                row.insertCell(3).appendChild(document.createTextNode(listaDatos[dato].rol));
            }
            break;
        case "BUSCADORES DE EMPLEO":
            //Crear el Table Header
            let headRowB = crearTabla.insertRow(0)
            headRowB.insertCell(0).outerHTML ="<th>Nombre</th>";
            headRowB.insertCell(1).outerHTML ="<th>Apellidos</th>";
            headRowB.insertCell(2).outerHTML ="<th>Correo Electrónico</th>";
            headRowB.insertCell(3).outerHTML ="<th>Número de teléfono</th>";

            //Crear las filas con la informacion de los objetos
            for(let dato = 0;  dato < listaDatos.length; dato++){
                let row = crearTabla.insertRow();
                row.insertCell(0).appendChild(document.createTextNode(listaDatos[dato].nombre));
                row.insertCell(1).appendChild(document.createTextNode(listaDatos[dato].apellidos));
                row.insertCell(2).appendChild(document.createTextNode(listaDatos[dato].correoElectronico));
                row.insertCell(3).appendChild(document.createTextNode(listaDatos[dato].numeroTelefonico));
            }
            break;
        case "POSTULACIONES DE EMPLEO":
            //Crear el Table Header
            let headRowP = crearTabla.insertRow(0)
            headRowP.insertCell(0).outerHTML ="<th>Nombre</th>";
            headRowP.insertCell(1).outerHTML ="<th>Apellidos</th>";
            headRowP.insertCell(2).outerHTML ="<th>Correo Electrónico</th>";
            headRowP.insertCell(3).outerHTML ="<th>Oferta Postulada</th>";
            headRowP.insertCell(4).outerHTML ="<th>Estado</th>";

            //Crear las filas con la informacion de los objetos
            for(let dato = 0;  dato < listaDatos.length; dato++){
                let row = crearTabla.insertRow();
                row.insertCell(0).appendChild(document.createTextNode(listaDatos[dato].nombre));
                row.insertCell(1).appendChild(document.createTextNode(listaDatos[dato].apellidos));
                row.insertCell(2).appendChild(document.createTextNode(listaDatos[dato].correoElectronico));
                row.insertCell(3).appendChild(document.createTextNode(listaDatos[dato].postulacion));
                row.insertCell(4).appendChild(document.createTextNode(listaDatos[dato].estado));
            }
            break;
        default:
            break;
    }
   
}