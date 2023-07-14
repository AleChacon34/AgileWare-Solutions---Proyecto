"use strict";

/**
 * Al cargar la pagina, ejecuta el evento asignado al boton
 */
document.addEventListener("DOMContentLoaded", () =>{
    let actualizarBtn = document.querySelector("button[name='actualizar-perfil']");
    actualizarBtn.addEventListener("click", notificarActualizar);
})

/**
 * Funcion que muestra la alerta de que se actualizaron los datos
 */
function notificarActualizar(){
    console.log("funciona")
    Swal.fire({
        icon: "success",
        title: "Datos Actualizados",
        text: "Los datos fueron actualizados correctamente",
        timer: 1500,
    })
}

