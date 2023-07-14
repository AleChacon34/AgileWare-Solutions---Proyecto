"use strict";

document.addEventListener("DOMContentLoaded", () =>{
    actualizarBtn = document.querySelector("button[name='actualizar-perfil']");
    actualizarBt.addEventListener("click", notificarActualizar);
})


function notificarActualizar(){
    Swal.fire({
        icon: "success",
        title: "Datos Actualizados",
        text: "Los cambios fueron guardados de forma exitosa.",
        timer: 1500,
    })
}

