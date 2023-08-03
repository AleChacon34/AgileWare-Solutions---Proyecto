'use strict'

document.addEventListener("DOMContentLoaded", () => {
    let estadoBtn = document.querySelector("#estado-perfil")
    estadoBtn.addEventListener('click', desactivarPerfil);
})

function desactivarPerfil(){

    Swal.fire({
        icon: "warning",
        title: "Desactivación de usuario",
        text: "La desactivación del perfil inhabilitará el inicio de sesión de este empresa y de sus usuarios empresariales.",
        confirmButtonText: "Proceder",
        showDenyButton: true,
        denyButtonText: "Cancelar",
    }).then((response) => {
        Swal.fire({
            icon: "success",
            title: "Perfil desactivado con éxito",
            showConfirmButton: false,
            timer: 3500, 
        }).then(() => {
            window.location.replace("/Bolsa de Empleo/Empresa - Reporteria/Consultar invitaciones enviadas/consultarInvitaciones.html")
        });
    })   
}