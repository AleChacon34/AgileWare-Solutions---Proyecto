"use strict";

let password = '12345678';

//Aqui llama a un 'listener' para llama al evento de un boton
document.addEventListener("DOMContentLoaded", () => {
  let actualizarBtn = document.querySelector(
    "button[name='recuperar-contrasenna']"
  );
  actualizarBtn.addEventListener("click", getData);
});

//Esta funcion se encarga de obtener los datos de email de input
function getData() {
  let email = document.getElementById('email').value;
  notificarActualizar(email)
}

//Funcion que se encargar de enviar el email por medio de un API
function notificarActualizar(email) {
  let pass = randomPassword();
  Email.send(
    {
      Host: "smtp.elasticemail.com",
      Port: 2525,
      Username: "mchaconc1@ucenfotec.ac.cr",
      Password: "",
      To: `${email}`,
      ReplyTo: "no.reply.agileware@gmail.com",
      From: "mchaconc1@ucenfotec.ac.cr",
      Subject: "Recuperacion de contraseña",
      Body: `Su contraseña temporal es: ${pass}`,
    }
  ).then((message) => {
    password = pass;
    console.log(password);
    Swal.fire({
      icon: "success",
      text: "Recibirá un correo con la información para la recuperación de contraseña.",
      confirmButtonText: "Continuar",
    });
  }).catch((err) => {
    Swal.fire("Ha habido un error", "", "warning");
  });
}

//Funcion que se encarga de generar una contraseña temporal
function randomPassword() {
  let pass = "";
  let str = "ABDCEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz1234567890";

  for (let i = 1; i <= 10; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }

  return pass;
}
