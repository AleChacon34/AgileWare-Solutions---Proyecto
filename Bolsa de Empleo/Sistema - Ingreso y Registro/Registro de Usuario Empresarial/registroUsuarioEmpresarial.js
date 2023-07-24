"use-strict"
let listaUsuariosEmpresariales = [];


document.addEventListener("DOMContentLoaded", () =>{
    let registro = document.querySelector("button[name='completar-registro'] a");
    registro.addEventListener("click", completarRegistro);
})

function completarRegistro(){
    let nombre = document.querySelector("input[name='usuario-empresarial']");
    let apellidos = document.querySelector("input[name='usuario-empresarial-apellidos']");
    let correo = document.querySelector("input[name='correo']");
    let telefono = document.querySelector("input[name='numero-telefono']");
    let genero = document.querySelector("#seleccion-genero");
    let contrasenna = document.querySelector("input[name='contrasenna']");
    let usuario = {nombreUsuarioEmpresarial: nombre.value, apellidosUsuarioEmpresarial: apellidos.value, correoUsuarioEmpresarial: correo.value, telefonoUsuarioEmpresarial: telefono.value, generoUsuarioEmpresarial: genero.value, contrasennaUsuarioEmpresarial: contrasenna.value,};
    console.log(usuario);
    guardarRegistro(listaUsuariosEmpresariales, usuario);
}

function guardarRegistro(listaUsuarios, infoUsuario){

    if (!((infoUsuario.nombreUsuarioEmpresarial === "") || (infoUsuario.apellidosUsuarioEmpresarial === "") || (infoUsuario.correoUsuarioEmpresarial === "") || (infoUsuario.telefonoUsuarioEmpresarial === "") || (infoUsuario.generoUsuarioEmpresarial === "") || (infoUsuario.contrasennaUsuarioEmpresarial === ""))){
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
            text: 'Por favor llene todos los espacios para completar el registro.',
        })
    }
}