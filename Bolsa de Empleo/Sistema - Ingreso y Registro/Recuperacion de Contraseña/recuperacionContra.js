"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let actualizarBtn = document.querySelector(
    "button[name='recuperar-contrasenna']"
  );
  actualizarBtn.addEventListener("click", getData);
});

function getData() {
  let email = document.getElementById('email').value;
  notificarActualizar(email)
}

function notificarActualizar(email) {
  /*console.log("funciona")
    Swal.fire({
        icon: "success",
        text: "Recibirá un correo con la información para la recuperación de contraseña.",
        confirmButtonText: "Continuar",
    })*/
  Email.send({
    Host: "smtp.elasticemail.com",
    Port: 2525,
    Username: "",
    Password: "",
    To: `${email}`,
    From: "mchaconc1@ucenfotec.ac.cr",
    Subject: "Pruebas de recuperacion de contrasennia",
    Body: "Prueba de envio de correo con JS",
  }).then((message) => {
    Swal.fire({
      icon: "success",
      text: "Recibirá un correo con la información para la recuperación de contraseña.",
      confirmButtonText: "Continuar",
    });
  }).catch(err => {
    Swal.fire("Ha habido un error", "", "warning");
  });
}
