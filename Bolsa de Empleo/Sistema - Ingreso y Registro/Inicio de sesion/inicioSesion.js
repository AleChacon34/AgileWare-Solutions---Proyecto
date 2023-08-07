"use strict";

import { BuscadorService } from "../../services/login.service.js";

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
});

/**
 * Funcion que obtiene las credenciales de los 'inputs' para luego ser verificados
 */
function obtenerCredenciales(){
    let correo = document.querySelector("input[name='correo']");
    let pass = document.querySelector("input[name='pass']");
    console.log( correo, pass);
    let usuario = {
        correoBuscador: correo.value,
        contraseniaBuscador: pass.value 
    }
    verificarDatosIngreso(usuario);
}

/**Funcion que verificar los datos ingresados y autentica*/
function verificarDatosIngreso(usuario){
    if (usuario.contraseniaBuscador != "" && usuario.correoBuscador != "") {
        BuscadorService.loginBuscador(usuario).then((res) => {
            Swal.fire({
                title: "¡Ingreso permitido!",
                icon: "success"
            }).then((result) => {
                if (res.data.user.rol == "buscador"){
                    location.replace("/Bolsa de Empleo/Sistema - Perfil del Buscador de empleo y Empresa/Perfil usuario/perfilUsuario.html");
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
            text: "Por favor, no deje llene todos los espacios",
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

