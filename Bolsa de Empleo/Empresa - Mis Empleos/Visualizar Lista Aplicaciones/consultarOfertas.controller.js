'use strict'

import { OfertaService } from "../../services/consultarOferta.services.js"

document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("#busquedaForm");
    form.addEventListener("submit", filtrarOfertas)
    getOfertas();
})

function getOfertas(){
    //Acceder a las ofertas
    OfertaService.findAll().then((response) =>{
        let data = response.data.data
        data.forEach(crearSecciones)
    })
}

function crearSecciones(data){
    if (data.visibilidad === "Activa" && data.publicador === "Empresa"){
        //Crear DIV principal con id
        let addDiv = document.createElement('div');
        //Crear section del div
        let addSec = document.createElement('section');
        addSec.setAttribute("id", data._id)
        //Crear h3, h4, textarea, anchor, p 
        let addH3I = document.createElement('h3');
        addH3I.setAttribute("id", "tituloOFerta");
        let addH4I = document.createElement('h4');
        addH4I.setAttribute("id", "requerimientos");
        let textareaI = document.createElement('textarea');
        textareaI.setAttribute("disabled", true);
        textareaI.setAttribute("id", "requerimientosCuerpo");
        let addH4II = document.createElement('h4');
        addH4II.setAttribute("id", "descripcionOferta");
        let textareaII = document.createElement('textarea');
        textareaII.setAttribute("disabled", true);
        textareaII.setAttribute("id", "descripcionCuerpo");
        let newAnch = document.createElement('a');
        let addPI = document.createElement('p');
        newAnch.setAttribute("id", "verInfo");
        newAnch.addEventListener('click', () => {
            verInformacion(data);
        });
        //Agregar texto a cada elemento desde datosOfertas
        addH3I.appendChild(document.createTextNode(data.seccionTitulo));
        addH4I.appendChild(document.createTextNode("Requerimientos"));
        textareaI.appendChild(document.createTextNode(data.seccionRequerimientos));
        addH4II.appendChild(document.createTextNode("Descripción"));
        textareaII.appendChild(document.createTextNode(data.seccionDescripcion));
        newAnch.appendChild(document.createTextNode("Ver información"));
        addPI.appendChild(document.createTextNode(data.estadoOferta));
        if (addPI.textContent === "Oferta pública"){
            addPI.setAttribute("id", "pOfertaPublica")
        }
        else if (addPI.textContent === "Oferta oculta"){
            addPI.setAttribute("id", "pOfertaOculta")
        }
        //Agregar los H3, H4 y textarea al section, y este al Div
        addSec.append(addH3I, addPI, addH4I, textareaI, addH4II, textareaII, newAnch);
        addDiv.appendChild(addSec);
        //Agregar Div al main
        let mainBody = document.querySelector('main');
        mainBody.insertBefore(addDiv, mainBody.children[1]);
        localStorage.setItem("currentIDs", JSON.stringify(data._id))  
    }
      
}



function verInformacion(data){
    localStorage.setItem("currentIDs", data._id);
    location.href = '/Bolsa de Empleo/Empresa - Mis Empleos/Visualizar Lista Aplicaciones/consultarOferta.html';
}

//Funcion para filtrar las ofertas
function filtrarOfertas(e){
    let paramBusqueda =  document.querySelector("#barraBusqueda");
    e.preventDefault(e.target);
    OfertaService.filter(paramBusqueda.value).then((response) => {
        let data = response.data.data;
        if(data == ""){
            Swal.fire({
                icon: "info",
                title: "Búsqueda",
                text: "No se encontraron resultados con los criterios brindados, por favor inténtelo de nuevo"
            })
            paramBusqueda.value = "";
        }
        else{
            data.forEach(mostrarResultados);
        }   
    })
}

function mostrarResultados(data, paramBusqueda){
    if (paramBusqueda.value != ""){
        let mainBody = document.querySelector("main");
        for ( let div = 1; div < mainBody.children.length; div++ ){
            mainBody.children[div].replaceChildren();
        }
        if (data.visibilidad === "Activa" && data.publicador === "Empresa"){
            console.log("Hola")
            //Crear DIV principal con id
            let addDiv = document.createElement('div');
            //Crear section del div
            let addSec = document.createElement('section');
            addSec.setAttribute("id", data._id)
            //Crear h3, h4, textarea, anchor, p 
            let addH3I = document.createElement('h3');
            addH3I.setAttribute("id", "tituloOFerta");
            let addH4I = document.createElement('h4');
            addH4I.setAttribute("id", "requerimientos");
            let textareaI = document.createElement('p');
            textareaI.setAttribute("id", "requerimientosCuerpo");
            let addH4II = document.createElement('h4');
            addH4II.setAttribute("id", "descripcionOferta");
            let textareaII = document.createElement('p');
            textareaII.setAttribute("id", "descripcionCuerpo");
            let newAnch = document.createElement('a');
            let addPI = document.createElement('p');
            newAnch.setAttribute("id", "verInfo");
            newAnch.addEventListener('click', () => {
                verInformacion(data);
            });
            //Agregar texto a cada elemento desde datosOfertas
            addH3I.appendChild(document.createTextNode(data.seccionTitulo));
            addH4I.appendChild(document.createTextNode("Requerimientos"));
            textareaI.appendChild(document.createTextNode(data.seccionRequerimientos));
            addH4II.appendChild(document.createTextNode("Descripción"));
            textareaII.appendChild(document.createTextNode(data.seccionDescripcion));
            newAnch.appendChild(document.createTextNode("Ver información"));
            addPI.appendChild(document.createTextNode(data.estadoOferta));
            if (addPI.textContent === "Oferta pública"){
                addPI.setAttribute("id", "pOfertaPublica")
            }
            else if (addPI.textContent === "Oferta oculta"){
                addPI.setAttribute("id", "pOfertaOculta")
            }
            //Agregar los H3, H4 y textarea al section, y este al Div
            addSec.append(addH3I, addPI, addH4I, textareaI, addH4II, textareaII, newAnch);
            addDiv.appendChild(addSec);
            //Agregar Div al main
            let mainBody = document.querySelector('main');
            mainBody.insertBefore(addDiv, mainBody.children[1]);
            localStorage.setItem("currentIDs", JSON.stringify(data._id))  
        }
    }
}