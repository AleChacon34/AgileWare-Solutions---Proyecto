"use-strict"
let listaBuscadoresdeEmpleo = [];


document.addEventListener("DOMContentLoaded", () =>{
    let registro = document.querySelector("button[name='completar-registro']");
    registro.addEventListener("click", completarRegistro);
})

function completarRegistro(){
    let nombre = document.querySelector("input[name='nombre-usuario']");
    let apellidos = document.querySelector("input[name='apellidos-usuario']");
    let correo = document.querySelector("input[name='correo']");
    let telefono = document.querySelector("input[name='numero-telefono']");
    let genero = document.querySelector("#seleccion-genero");
    let contrasenna = document.querySelector("input[name='contrasenna']");
    let usuario = {nombreBuscador: nombre.value, apellidosBuscador: apellidos.value, correoBuscador: correo.value, telefonoBuscador: telefono.value, generoBuscador: genero.value, contrasennaBuscador: contrasenna.value,};
    console.log(usuario);
    guardarRegistro(listaBuscadoresdeEmpleo, usuario);
}

function guardarRegistro(listaUsuarios, infoUsuario){

    if (!((infoUsuario.nombreBuscador === "") || (infoUsuario.apellidosBuscador === "") || (infoUsuario.correoBuscador === "") || (infoUsuario.telefonoBuscador === "") || (infoUsuario.generoBuscador === "") || (infoUsuario.contrasennaBuscador === ""))){
        listaUsuarios.push(infoUsuario);
        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'La información del nuevo usuario ha sido guardada exitosamente.',
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

