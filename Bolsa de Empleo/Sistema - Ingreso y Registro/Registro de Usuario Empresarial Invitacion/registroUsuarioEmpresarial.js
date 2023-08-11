"use-strict"

let listaUsuariosEmpresariales = [];


document.addEventListener("DOMContentLoaded", () =>{
    let form = document.querySelector("form");
    form.addEventListener("submit", completarRegistro);
})



function completarRegistro(e){
    e.preventDefault(e.target);
    let nombre = document.querySelector("input[name='usuario-empresarial']");
    let apellidos = document.querySelector("input[name='usuario-empresarial-apellidos']");
    let correo = document.querySelector("input[name='correo']");
    let telefono = document.querySelector("input[name='numero-telefono']");
    let genero = document.querySelector("#seleccion-genero");
    let contrasenna = document.querySelector("input[name='contrasenna']");
    let verifycontrasennia = document.querySelector("input[name='verifycontrasennia']");
    let usuario = {nombreUsuarioEmpresarial: nombre.value, apellidosUsuarioEmpresarial: apellidos.value, correoUsuarioEmpresarial: correo.value, verifyCorreousuarioEmpresarial: verifyCorreousuarioEmpresarial.value, telefonoUsuarioEmpresarial: telefono.value, generoUsuarioEmpresarial: genero.value, contrasennaUsuarioEmpresarial: contrasenna.value,  verifycontrasennia: verifycontrasennia.value};
    console.log(usuario);
    guardarRegistro(listaUsuariosEmpresariales, usuario);
}

function guardarRegistro(listaUsuarios, infoUsuario){


    if (!((infoUsuario.nombreUsuarioEmpresarial === "") || (infoUsuario.apellidosUsuarioEmpresarial === "") || (infoUsuario.correoUsuarioEmpresarial === "") || (infoUsuario.telefonoUsuarioEmpresarial === "") || (infoUsuario.generoUsuarioEmpresarial === "") || (infoUsuario.contrasennaUsuarioEmpresarial === "") || (infoUsuario.verifycontrasennia === ""))){
        verificarContrasennia(listaUsuarios, infoUsuario);
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Información faltante',
            text: 'Por favor llene todos los espacios para completar el registro.',
        })
    }
}
function verificarContrasennia(listaUsuarios, infoUsuario){
    if (infoUsuario.contrasennaUsuarioEmpresarial === infoUsuario.verifycontrasennia){
        listaUsuarios.push(infoUsuario);
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
function verificarEmail(listaUsuarios,infoUsuario){
    if (correoUsuarioEmpresarial === verifyCorreousuarioEmpresarial){
        listaUsuarios.push(infoUsuario);
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