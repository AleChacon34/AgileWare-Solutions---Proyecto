'use strict'

let estadoOferta = document.querySelector("#estado-oferta").textContent;

document.addEventListener("DOMContentLoaded", ()=>{
    if (estadoOferta == "Oferta pública"){
        console.log("Oferta Pública")
    }
    else if (estadoOferta == "Oferta oculta"){
        console.log("Oferta Oculta")
    }
    else{
        console.log("No funciona")
    }
});

module.exports(estadoOferta);
