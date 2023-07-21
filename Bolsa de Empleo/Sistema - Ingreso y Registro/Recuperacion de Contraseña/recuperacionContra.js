"use strict";

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
  
  Email.send(
    {
      Host: "smtp.elasticemail.com",
      Port: 2525,
      Username: "mchaconc1@ucenfotec.ac.cr",
      Password: "",
      To: `${email}`,
      From: "mchaconc1@ucenfotec.ac.cr",
      Subject: "Pruebas de recuperacion de contrasennia",
      Body: "Prueba de envio de correo con JS",
    }
  ).then((message) => {
    Swal.fire({
      icon: "success",
      text: "Recibirá un correo con la información para la recuperación de contraseña.",
      confirmButtonText: "Continuar",
    });
  }).catch((err) => {
    Swal.fire("Ha habido un error", "", "warning");
  });
}
