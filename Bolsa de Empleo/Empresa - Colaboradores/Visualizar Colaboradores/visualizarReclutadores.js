"use strict";

import { UserService } from "../../services/user.service.js";

let listaInvitaciones=[];

document.addEventListener('DOMContentLoaded', () => {
  loadData();
  let btn = document.querySelector("#agregar-colaborador");
  btn.onclick = displayAlert;
});

function loadData() {
  let h1 = document.getElementById('nombreEmpresa');
  let id = localStorage.getItem('activeUser');
  UserService.getOneUser(id).then(res => {
    h1.innerHTML = res.data.data.nombre;
  });
}

// En esta sección se le pregunta la opción de invitación: manual o por correo 
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
      location.href = "../../Sistema - Ingreso y Registro/Registro de Usuario Empresarial Manual/registroUsuarioEmpresarialManual.html";
    }
  });
}
// Aquí se solicita la dirección de correo electrónico para la solicitud
function insertEmail() {
  let id = localStorage.getItem('activeUser');

  Swal.fire({
    title: 'Ingrese la dirección de correo electrónico',
    input: 'email',
    customClass: {
      input: "#textoUsuario"
    },
    inputAttributes: {
      autocapitalize: 'off',
      placeholder: "ejemplo@ejemplo.com"
    },
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    showLoaderOnConfirm: true,
    preConfirm: (result) => {
      Email.send(
        {
          Host: "smtp.elasticemail.com",
          Port: 2525,
          Username: "no.reply.agileware@gmail.com",
          Password: "98477A4DE4EE81736D72241EA64FA43F477B",
          To: `${result}`,
          From: "no.reply.agileware@gmail.com",
          Subject: "Le facilitamos el identificador de nuestra empresa para realizar el registro pertinente",
          Body: `${getHTML(id)}`,
        }
      ).then((message) => {
        Swal.fire({
          text: `Se ha enviado un correo a la direccion ${result} con el identificador de empresa`,
          icon: "success"
        })
      }).catch((err) => {
        console.log(err);
        Swal.fire("Ha habido un error", "", "error");
      });
    },
    allowOutsideClick: () => !Swal.isLoading()
  });
}

function getHTML(email) {
  const _HTML = `
    <!doctype html>
    <html lang="en-US">
    
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Reset Password Email Template</title>
        <meta name="description" content="Reset Password Email Template.">
        <style type="text/css">
            a:hover {text-decoration: underline !important;}
        </style>
    </head>
    
    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
        <!--100% body table-->
        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
            <tr>
                <td>
                    <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                        align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">
                              <a href="https://www.mtss.go.cr/" title="logo" target="_blank">
                                <img width="60" src="http://drive.google.com/uc?export=view&id=18gzsoq-FG_KshIrRiKabdWGShPGU6_jG" title="logo" alt="logo">
                              </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                    style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0 35px;">
                                            <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                                            Ha recibido el identificador de una empresa
                                            </h1>
                                            <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            Diríjase al registro de usuario empresarial e ingrese el identificador en el espacio correspondiente (Empresa)
                                            </p>

                                            <h3>${email}</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">
                                <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; 
                                  <strong>
                                    No respondas a este mensaje,ya que no podemos enviar respuestas desde esta dirección de correo electrónico.
                                    
                                  </strong>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <!--/100% body table-->
    </body>
    
    </html>`;

  return _HTML; 
}