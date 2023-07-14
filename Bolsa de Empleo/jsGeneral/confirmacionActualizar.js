"use strict";

document.addEventListener("DOMContentLoaded", () =>{
    let actualizarBtn = document.querySelector("button[name='actualizar-perfil']");
    actualizarBtn.addEventListener("click", notificarActualizar);
})

function notificarActualizar(){
    console.log("funciona")
    Swal.fire({
        icon: "success",
        title: "Datos Actualizados",
        text: "Los datos fueron actualizados correctamente",
        timer: 1500,
    })
}

