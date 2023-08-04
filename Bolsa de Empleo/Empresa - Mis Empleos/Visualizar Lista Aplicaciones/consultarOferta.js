'use strict'


document.addEventListener("DOMContentLoaded", ()=>{
    let estadoOferta = document.querySelector(".estado-oferta");
    console.log(estadoOferta);
    if (estadoOferta.textContent == "Oferta pública"){
        console.log("Oferta Pública");
        estadoOferta.removeAttribute("id");
        estadoOferta.setAttribute("id", "oferta-publica");
    }
    else if (estadoOferta.textContent == "Oferta oculta"){
        estadoOferta.removeAttribute("id");
        estadoOferta.setAttribute("id", "oferta-oculta");
        console.log("Oferta Oculta")
    }
    else{
        console.log("No funciona")
    }
});