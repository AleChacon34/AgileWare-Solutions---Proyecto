"use strict";

function onLoadComplete() {
  let btn = document.querySelector("#agregar-colaborador");
  btn.onclick = displayAlert;
}

function displayAlert() {
  Swal.fire({
    title: "¿Desea enviar invitación de correo electrónica o registrarlo manualmente?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Enviar invitación",
    denyButtonText: `Registrar manualmente`,
    width: "64em",
  }).then((result) => {
    if (result.isConfirmed) {
      insertEmail();
    } else if (result.isDenied) {
      location.href = "../../Sistema - Ingreso y Registro/Registro de Usuario Empresarial/registrousuEmpresaria.html";
    }
  });
}

function insertEmail() {
  Swal.fire({
    title: 'Ingrese la dirección de correo electrónico',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off',
      placeholder: "ejemplo@ejemplo.com"
    },
    inputValidator: (value) => {
      if (value == "") {
        return "Por favor, no dejar espacios en blanco"
      }
    },
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    showLoaderOnConfirm: true,
    preConfirm: (result) => {
      Swal.fire('¡Invitacion enviada!', '', 'success');
    },
    allowOutsideClick: () => !Swal.isLoading()
  });
}
