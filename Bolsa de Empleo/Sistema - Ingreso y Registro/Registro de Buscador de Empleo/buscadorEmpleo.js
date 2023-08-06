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
    let verifycontrasenna = document.querySelector("input[name='verifycontrasenna']");
    let usuario = {nombreBuscador: nombre.value, apellidosBuscador: apellidos.value, correoBuscador: correo.value, telefonoBuscador: telefono.value, generoBuscador: genero.value, contrasennaBuscador: contrasenna.value, verifycontrasenna: verifycontrasenna.value};
    console.log(usuario);
    guardarRegistro(listaBuscadoresdeEmpleo, usuario);
}

function guardarRegistro(listaUsuarios, infoUsuario){

    if (!((infoUsuario.nombreBuscador === "") || (infoUsuario.apellidosBuscador === "") || (infoUsuario.correoBuscador === "") || (infoUsuario.telefonoBuscador === "") || (infoUsuario.generoBuscador === "") || (infoUsuario.contrasennaBuscador === "") || (infoUsuario.verifycontrasenna === "" ))){
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
        validarRegistro(infoUsuario);
    }
}

function validarRegistro (infoUsuario){
    console.log (infoUsuario)
    if (infoUsuario.nombreBuscador === ""){
        document.getElementById("nombre-usuario").style.border = "2px solid red";
    } 
    if (infoUsuario.apellidosBuscador === ""){
        document.getElementById("apellidos-usuario").style.border = "2px solid red";
    } 
    if (infoUsuario.correoBuscador === ""){
        document.getElementById("correo").style.border = "2px solid red";
    } 
    if (infoUsuario.telefonoBuscador === ""){
        document.getElementById("numero-telefono").style.border = "2px solid red";
    } 
    if (infoUsuario.generoBuscador === ""){
        document.getElementById("seleccion-genero").style.border = "2px solid red";
    } 
    if (infoUsuario.contrasennaBuscador === ""){
        document.getElementById("contrasenna").style.border = "2px solid red";
    } 
    if (infoUsuario.verifycontrasenna === ""){
        document.getElementById("verifycontrasenna").style.border = "2px solid red";
    } else {
        verifiquePass(infoUsuario);
    }
}

function verifiquePass (infoUsuario);
    if (verifycontrasenna == infoUsuario.verifiquePass){
        Swal.fire("Verifique su contraseña y correo electronico", " ")
    }