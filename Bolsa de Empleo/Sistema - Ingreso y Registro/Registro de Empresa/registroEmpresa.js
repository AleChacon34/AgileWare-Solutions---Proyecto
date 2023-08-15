"use strict";

import { UserEmpresa } from '../../models/userEmpresa.model.js';
import { LoginService } from '../../services/login.service.js'

document.addEventListener("DOMContentLoaded", () =>{
    let form = document.querySelector('form');
    form.addEventListener("submit", completarRegistro);
})

function completarRegistro(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let newUser = new UserEmpresa(formData);
    console.log(newUser);
    newUser.setApellidos("");
    newUser.setGenero("");
    newUser.setRol("Empresa");
    //guardarRegistro(newUser);
}

function guardarRegistro(newUser){

    if (!((newUser.getNombre() === "") || (newUser.getCorreo() === "") || (newUser.getTelefono() === "") || (newUser.getContrasenia() === ""))){
        LoginService.registerUser(newUser).then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
            });
            location.replace('/Bolsa de Empleo/Sistema - Ingreso y Registro/Inicio de sesion/inicioSesion.html');
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Error al registrar',
                text: 'Ha habido un error, por favor vuelta a intentarlo',
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
    