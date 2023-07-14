"use strict";

document.addEventListener("DOMContentLoaded", () =>{
    let actualizarBtn = document.querySelector("button[name='recuperar-contrasenna']");
    actualizarBtn.addEventListener("click", notificarActualizar);
})

function notificarActualizar(){
    console.log("funciona")
    Swal.fire({
        icon: "success",
        text: "Recibirá un correo con la información para la recuperación de contraseña.",
        confirmButtonText: "Continuar",
    })
}
