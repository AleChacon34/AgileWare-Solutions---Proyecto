// "use-strict"
let listaBuscadoresdeEmpleo = [];


document.addEventListener("DOMContentLoaded", () =>{
    let registro = document.querySelector("button[name='completar-registro'] a");
    registro.addEventListener("click", completarRegistro);
})


function registrarInformacion(){
    let nombre = document.querySelector("input[name='nombre-usuario']");
    let apellidos = document.querySelector("input[name='apellidos-usuario']");
    let correo = document.querySelector("input[name='correo']");
    let telefono = document.querySelector("input[name='numero-telefono']");
    let genero = document.querySelector("input[name='genero']");
    let contrasenna = document.querySelector("input[name='contrasenna']");
    console.log(nombre, apellidos, correo, telefono, genero, contrasenna); 
}

function completarRegistro(nombre, apellidos, correo, telefono, genero, contrasenna){
    console.log("Funciona!!");
    let usuario = {nombreBuscador: nombre, apellidosBuscador: apellidos, correoBuscador: correo, telefonoBuscador: telefono, generoBuscador: genero, contrasennaBuscador: contrasenna,};
    listaBuscadoresdeEmpleo.push(usuario);
}
    