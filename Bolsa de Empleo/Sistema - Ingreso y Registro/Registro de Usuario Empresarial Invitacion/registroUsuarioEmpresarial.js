"use-strict"

import { UserEmpresa } from "../../models/userEmpresa.model.js";

let listaUsuariosEmpresariales = [];


document.addEventListener("DOMContentLoaded", () =>{
    let form = document.querySelector("form");
    form.addEventListener("submit", completarRegistro);
});



function completarRegistro(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let newUser = new UserEmpresa(formData);
    

    guardarRegistro(newUser);
}

function guardarRegistro(newUser){
    if (!((newUser.getNombre() === "") || (newUser.getApellidos() === "") || (newUser.getCorreo() === "") || (newUser.getTelefono() === "") || (newUser.getGenero() === "") || (newUser.getContrasenia() === "") || (newUser.getVerifyContrasenia() === ""))){
        verificarContrasennia(newUser);
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Información faltante',
            text: 'Por favor llene todos los espacios para completar el registro.',
        })
    }
}
function verificarContrasennia(newUser){
    if (newUser.getContrasenia() === newUser.getVerifyContrasenia()){
        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'La información del nuevo usuario empresarial ha sido guardada exitosamente.',
        })  
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Información faltante',
                text: 'Las contraseñas no coinciden',
            })
        }
}