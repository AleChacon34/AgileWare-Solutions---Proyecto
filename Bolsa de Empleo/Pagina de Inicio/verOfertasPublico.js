"use strict";

import { OfertaService } from "../services/consultarOferta.services.js"

document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("#busquedaForm");
    form.addEventListener("submit", filtrarOfertas)
    getOfertas();
});

function getOfertas(){
    //Acceder a las ofertas
    OfertaService.findAll().then((response) =>{
        let data = response.data.data
        data.forEach(crearSecciones)
    })
}

function crearSecciones(data){
    if (data.visibilidad === "Activa" && data.estadoOferta != "Oferta oculta"){
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
        textareaI.setAttribute("id", "requerimientosCuerpo");
        let addH4II = document.createElement('h4');
        addH4II.setAttribute("id", "descripcionOferta");
        let textareaII = document.createElement('textarea');
        textareaII.setAttribute("id", "descripcionCuerpo");
        let newBtn = document.createElement('button');
        newBtn.setAttribute("class", "verOferta");
        let addAside = document.createElement('aside');
        let img = document.createElement('img');
        img.setAttribute("src", "#");
        // img.setAttribute("alt", "#");

        //Agregar texto a cada elemento desde datosOfertas
        addH3I.appendChild(document.createTextNode(data.seccionTitulo));
        addH4I.appendChild(document.createTextNode("Requerimientos"));
        textareaI.appendChild(document.createTextNode(data.seccionRequerimientos));
        addH4II.appendChild(document.createTextNode("Descripción"));
        textareaII.appendChild(document.createTextNode(data.seccionDescripcion));
        newBtn.appendChild(document.createTextNode("Postularse para este puesto"));
        addAside.appendChild(img);

        //Agregar los H3, H4 y textarea al section, y este al Div
        
        addSec.append(addH3I, addH4I, textareaI, addH4II, textareaII, newBtn);
        addDiv.append(addAside, addSec);
        //Agregar Div al main
        let mainBody = document.querySelector('main');
        mainBody.insertBefore(addDiv, mainBody.children[1]);
    }
      
}

document.addEventListener("mouseover", () =>{
    let ofertaBtns = document.querySelectorAll(".verOferta");
        for (let i = 0; i < ofertaBtns.length; i++) {
            let btn = ofertaBtns[i];
            btn.addEventListener('click', pedirIngreso);
        }
})

// Función para redirigir al usuario a iniciar sesión
function pedirIngreso(){
    Swal.fire({
        icon: "error",
        title: "Error de Ingreso",
        text: "Por favor inicie sesión para postularse para este puesto",
        confirmButtonText: "Iniciar Sesión",
        showDenyButton: true,
        denyButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed){
            location.href="/Bolsa de Empleo/Sistema - Ingreso y Registro/Inicio de sesion/inicioSesion.html";
        }
    })
}

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
            }).then(()=>{
                location.reload();
            })
            
        }
        else{
            data.forEach(mostrarResultados);
        }   
    })
}

function mostrarResultados(data, paramBusqueda){
    if (paramBusqueda.value != ""){
        let mainBody = document.querySelector("main");
        for ( let div = 1; div <= mainBody.children.length; div++ ){
           mainBody.removeChild(mainBody.children[1]);
        }
        if (data.visibilidad === "Activa" && data.estadoOferta != "Oferta oculta"){
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
            textareaI.setAttribute("id", "requerimientosCuerpo");
            let addH4II = document.createElement('h4');
            addH4II.setAttribute("id", "descripcionOferta");
            let textareaII = document.createElement('textarea');
            textareaII.setAttribute("id", "descripcionCuerpo");
            let addAside = document.createElement('aside');
            let img = document.createElement('img');
            img.setAttribute("src", "#");
            //Agregar texto a cada elemento desde datosOfertas
            addH3I.appendChild(document.createTextNode(data.seccionTitulo));
            addH4I.appendChild(document.createTextNode("Requerimientos"));
            textareaI.appendChild(document.createTextNode(data.seccionRequerimientos));
            addH4II.appendChild(document.createTextNode("Descripción"));
            textareaII.appendChild(document.createTextNode(data.seccionDescripcion));
            addAside.appendChild(img);
            //Agregar los H3, H4 y textarea al section, y este al Div
            addSec.append(addH3I, addH4I, textareaI, addH4II, textareaII);
            addDiv.append(addAside, addSec);
            //Agregar Div al main
            mainBody = document.querySelector('main');
            mainBody.insertBefore(addDiv, mainBody.children[1]);
        }
    }
}