"use-strict"
let listaBuscadoresdeEmpleo = [];

import { BuscadorService } from "../../services/buscador.service.js";


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
    let contrasenia = document.querySelector("input[name='contrasenia']");
    let verifycontrasenia = document.querySelector("input[name='verifycontrasenia']");
    let usuario = {nombreBuscador: nombre.value, apellidosBuscador: apellidos.value, correoBuscador: correo.value, telefonoBuscador: telefono.value, generoBuscador: genero.value, contraseniaBuscador: contrasenia.value, verifycontrasenia: verifycontrasenia.value};
    guardarRegistro(listaBuscadoresdeEmpleo, usuario);
}

function guardarRegistro(listaUsuarios, infoUsuario){

    if (!((infoUsuario.nombreBuscador === "") || (infoUsuario.apellidosBuscador === "") || (infoUsuario.correoBuscador === "") || (infoUsuario.telefonoBuscador === "") || (infoUsuario.generoBuscador === "") || (infoUsuario.contraseniaBuscador === "") || (infoUsuario.verifycontrasenia === "" ))){
        BuscadorService.registerBuscador(infoUsuario).then((res) => {
            Swal.fire({
                title: "Usuario registrado con exito",
                icon: "success"
            }).then(result => {
                location.href = "/Bolsa de Empleo/Sistema - Ingreso y Registro/Inicio de sesion/inicioSesion.html"
            });
        }).catch(err => {
            Swal.fire({
                title: "Usuario ya existente",
                icon: "error"
            })
        });
    } else{
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
    if (infoUsuario.contraseniaBuscador === ""){
        document.getElementById("contrasenia").style.border = "2px solid red";
    } 
    if (infoUsuario.verifycontrasenia === ""){
        document.getElementById("verifycontrasenia").style.border = "2px solid red";
    } else {
        verifiquePass(infoUsuario);
    }
}

function verifiquePass (infoUsuario){
    if (infoUsuario.verifycontrasenna == email){
        //Swal.fire("Por favor, verifique la contraseña correctamente", "", "error"); 
        alert ("papaya")
    } else {
        alert ("Camaron")
    }
}