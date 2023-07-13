"use-strict"
let listaEmpresas = [];


document.addEventListener("DOMContentLoaded", () =>{
    let registro = document.querySelector("button[name='completar-registro'] a");
    registro.addEventListener("click", completarRegistro);
})

function completarRegistro(){
    let nombre = document.querySelector("input[name='nombre-empresa']");
    let contrasenna = document.querySelector("input[name='contrasenna']");
    let correo = document.querySelector("input[name='correo']");
    let telefono = document.querySelector("input[name='numero-telefono']");
    let usuario = {nombreEmpresa: nombre.value, correoEmpresa: correo.value, telefonoEmpresa: telefono.value, contrasennaEmpresa: contrasenna.value,};
    console.log(usuario);
    guardarRegistro(listaEmpresas, usuario);
}

function guardarRegistro(listaUsuarios, infoUsuario){

    if (!((infoUsuario.nombreEmpresa === "") || (infoUsuario.apellidosBuscador === "") || (infoUsuario.correoEmpresa === "") || (infoUsuario.telefonoEmpresa === "") || (infoUsuario.generoBuscador === "") || (infoUsuario.contrasennaEmpresa === ""))){
        listaUsuarios.push(infoUsuario);
        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'La información de la nueva empresa ha sido guardada exitosamente.',
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
    