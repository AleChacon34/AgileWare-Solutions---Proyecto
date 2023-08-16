"use strict";

import { UserService } from '../../services/user.service.js';

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


function getHTML(passKey) {
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
                              <a href="https://rakeshmandal.com" title="logo" target="_blank">
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
                                            Ha solicitado restablecer su contraseña
                                            </h1>
                                            <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            No podemos enviarle su contraseña anterior.
                                            Se ha generado una contraseña temporal para usted.
                                            </p>

                                            ${passKey}
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

//Funcion que se encargar de enviar el email por medio de un API
function notificarActualizar(email) {
  let pass = randomPassword();
  UserService.updatePassword(email, pass).then(res => {
    console.log('---ENVIADO---');
  });
  Email.send(
    {
      Host: "smtp.elasticemail.com",
      Port: 2525,
      Username: "no.reply.agileware@gmail.com",
      Password: "E5691885D7414511FF9097F567CB3F3DDDEA",
      To: `${email}`,
      ReplyTo: "no.reply.agileware@gmail.com",
      From: "no.reply.agileware@gmail.com",
      Subject: "Recuperacion de contraseña",
      Body: `${getHTML(pass)}`,
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
