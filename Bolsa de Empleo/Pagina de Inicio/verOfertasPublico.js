"use strict";

document.addEventListener("DOMContentLoaded", () =>{
    let ofertaBtns = document.querySelectorAll("button[name='ver-oferta']");
        for (let i = 0; i < ofertaBtns.length; i++) {
            let btn = ofertaBtns[i];
            console.log(btn)
            btn.addEventListener('click', pedirIngreso);
        }
})

// Función para redirigir al usuario a iniciar sesión
function pedirIngreso(){
    console.log('Funciona')
    Swal.fire({
        icon: "error",
        title: "Error de Ingreso",
        text: "Por favor inicie sesión para postularse para esta oferta.",
        confirmButtonText: "Iniciar Sesión",
        showDenyButton: true,
        denyButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed){
            location.href="/Bolsa de Empleo/Sistema - Ingreso y Registro/Inicio de sesion/inicioSesion.html";
        }
    })
}