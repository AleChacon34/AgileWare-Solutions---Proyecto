'use strict'

export let estadoOferta = document.querySelector("#estado-oferta");

document.addEventListener("DOMContentLoaded", ()=>{
    if (estadoOferta.textContent == "Oferta pública"){
        console.log("Oferta Pública")
    }
    else if (estadoOferta.textContent == "Oferta oculta"){
        console.log("Oferta Oculta")
    }
    else{
        console.log("No funciona")
    }
})
