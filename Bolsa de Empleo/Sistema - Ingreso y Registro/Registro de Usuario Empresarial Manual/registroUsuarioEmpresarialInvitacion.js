"use-strict"

import { UserEmpresa } from "../../models/userEmpresa.model.js";
import { LoginService } from "../../services/login.service.js"

document.addEventListener("DOMContentLoaded", () =>{
    let form = document.querySelector("form");
    form.addEventListener("submit", getData);
});

function getData(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let newUser = new UserEmpresa(formData);
    console.log(newUser);
    guardarRegistro(newUser);
}

function guardarRegistro(newUser){

    if (!((newUser.getNombre() === "") || (newUser.getApellidos() === "") || (newUser.getCorreo() === "") || (newUser.getTelefono() === "") || (newUser.getGenero() === "") || (newUser.getContrasenia() === ""))){
        LoginService.registerUser(newUser).then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: 'La información del nuevo usuario empresarial ha sido guardada exitosamente.',
            });
            location.replace('iniciarSesion.html');
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'El usuario ya existe',
            });
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Información faltante',
            text: 'Por favor llene todos los espacios para completar el registro.',
        });
    }
}