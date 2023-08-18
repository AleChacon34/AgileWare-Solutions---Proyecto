"use strict";
    
import { LoginService } from "../../services/login.service.js";

let autenticado = false;
let usuarioAutenticado = false;
let usuarioCorrecto = false;
/**
 * Lista de usuarios quemados que se les permite entra a la pagina
 */
let usuarios = [
    {
        correo: "administrador@administrador.com",
        pass: "admin",
        rol: "Administrador"
    }, 
    {
        correo: "buscador@buscador.com",
        pass: "buscador",
        rol: "Buscador de Empleo"
    }, 
    {
        correo: "super-usuario@super-usuario.com",
        pass: "super-usuario",
        rol: "Super-Usuario"
    }, 
    {
        correo: "empresa@empresa.com",
        pass: "empresa",
        rol: "Empresa de Empleo"
    }, 
    {
        correo: "manager@manager.com",
        pass: "manager",
        rol: "Manager"
    }, 
    {
        correo: "reclutador@reclutador.com",
        pass: "reclutador",
        rol: "Reclutador"
    }
];

/**
 * Al cargar la pagina, se le asigna el evento al boton de ingresar
 */
document.addEventListener("DOMContentLoaded", () =>{
    let btnLogin = document.querySelector("#ing1");
    btnLogin.addEventListener("click", obtenerCredenciales);

    let btnRegistro = document.querySelector('#registro');
    btnRegistro.addEventListener('click', redirect);
});

/**
 * Funcion que obtiene las credenciales de los 'inputs' para luego ser verificados
 */
function obtenerCredenciales(){
    let correo = document.querySelector("input[name='correo']").value;
    let contrasenia = document.querySelector("input[name='pass']").value;
    let usuario = {
        correo,
        contrasenia
    }
    verificarDatosIngreso(usuario);
}

/**Funcion que verificar los datos ingresados y autentica*/
function verificarDatosIngreso(usuario){
    if (usuario.contrasenia != "" && usuario.correo != "") {
        LoginService.loginUser(usuario).then((res) => {
            Swal.fire({
                title: "¡Ingreso permitido!",
                icon: "success"
            }).then((result) => {
                localStorage.setItem('activeUser', res.data.data._id);
                if (res.data.data.rol == "buscador"){
                    location.replace("/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Perfil usuario/perfilUsuario.html");
                } else if (res.data.data.rol == "Administrador") {
                    location.replace('/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Sistema-Perfil Usuario Empresarial/Sistema-Perfil -Usuario-Empresarial.html');
                } else if (res.data.data.rol == "Manager") {
                    location.replace('/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Sistema-Perfil Usuario Empresarial/Sistema-Perfil -Usuario-Empresarial.html');
                } else if (res.data.data.rol == "Reclutador") {
                    location.replace('/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Sistema-Perfil Usuario Empresarial/Sistema-Perfil -Usuario-Empresarial.html');
                } else if (res.data.data.rol == "Superusuario") {
                    location.replace('/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Sistema-Super-Usuario/Sistema-Super-Usuario.html');
                } else if (res.data.data.rol == "Empresa") {
                    location.replace('/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Sistema-Perfil Empresa/Sistema-PerfilEmpresa.html');
                }
            });
        }).catch(err => {
            console.log(err);
            Swal.fire({
                title: "¡Ingreso denegado!",
                text: "Inténtelo de nuevo",
                icon: "error"
            });
        });
    } else {
        Swal.fire({
            title: "¡Hay espacios en blanco!",
            text: "Por favor, llene todos los espacios",
            icon: "error"
        });
    }
}

/**Funcion que realiza la autenticacion final*/
function autenticar() {
    if (usuarioAutenticado){
        if (autenticado) {
            paginaInicio(usuarioCorrecto.rol);
        } else {
            Swal.fire({
                icon: 'error',
                title: '¡Contraseña incorrecta!',
                text: 'Por favor verifique sus datos',
                footer: '<a href="">Contactar SAC</a>'
            });
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: '¡Usuario incorrecto!',
            text: 'Por favor verifique sus datos',
            footer: '<a href="">Contactar SAC</a>'
        });
    }
    usuarioAutenticado = false;
    autenticado = false;
}

/**
 * Funcion que evalua el rol para redireccionar a la pagina correspondiente 
 */
function paginaInicio(rol){
    if (rol === "Buscador de Empleo"){
        location.replace("/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Perfil usuario/perfilUsuario.html");
    }

    else if(rol === "Administrador"){
        location.replace("/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Sistema-Perfil Usuario Empresarial/Sistema-Perfil -Usuario-Empresarial.html");
    }

    else if(rol === "Reclutador"){
        location.replace("/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Sistema-Perfil Usuario Empresarial/Sistema-Perfil -Usuario-Empresarial.html");
    }

    else if(rol === "Manager"){
        location.replace("/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Sistema-Perfil Usuario Empresarial/Sistema-Perfil -Usuario-Empresarial.html");
    }

    else if(rol === "Super-Usuario"){
        location.replace("/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Sistema-Super-Usuario/Sistema-Super-Usuario.html");
    }

    else if(rol === "Empresa de Empleo"){
        location.replace("/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Sistema-Perfil Empresa/Sistema-PerfilEmpresa.html");
    }
}

function redirect() {
    Swal.fire({
        icon: "info",
        title: "Tipo de usuario a registrarse",
        text: "¿Qué tipo de usuario se registrará?",
        showConfirmButton: true,
        confirmButtonText: "Buscador de empleo",
        showCancelButton: true,
        cancelButtonText: "Usuario de Empresa",
        showDenyButton: true,
        denyButtonText: "Empresa"
    }).then(res => {
        if (res.isConfirmed) {
            location.href = '/Bolsa de Empleo/Sistema - Ingreso y Registro/Registro de Buscador de Empleo/buscadorEmpleo.html'
        } else if (res.dismiss == 'cancel') {
            location.href = "/Bolsa de Empleo/Sistema - Ingreso y Registro/Registro de Usuario Empresarial Manual/registroUsuarioEmpresarialInvitacion.html";
        } else if (res.isDenied) {
            location.href = "/Bolsa de Empleo/Sistema - Ingreso y Registro/Registro de Empresa/registroEmpresa.html";
        }
    });
}