"use strict";

let autenticado = false;
let usuarioAutenticado = false;

/**
 * Lista de usuarios quemados que se les permite entra a la pagina
 */
let usuarios = [{
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
        correo:correo.value,
        pass:pass.value 
    }
    verificarDatosIngreso(usuario);
}

/**Funcion que verificar los datos ingresados */
function verificarDatosIngreso(usuario){
    let usuarioCorrecto;
    for (let user of usuarios){
        if (usuario.correo === user.correo){
            usuarioAutenticado = true;
            if (usuario.pass === user.pass){
                autenticado = true
                usuarioCorrecto = user;
            }
        }
    }    

    autenticar();
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
        
