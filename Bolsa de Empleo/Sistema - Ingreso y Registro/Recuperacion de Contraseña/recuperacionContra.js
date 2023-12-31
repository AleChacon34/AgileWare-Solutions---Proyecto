"use strict";

import { UserService } from '../../services/user.service.js';
import { User } from '../../models/user.model.js';

/**
 * Expresion regular
 * (a-zA-Z0-9) de la a a la z minusculas, mayusculas y numeros - seguido de +@
 * (a-zA-Z0-9) de la a a la z minusculas, mayusculas y numeros - seguido de +\.
 * (a-zA-Z) de la a a la z minusculas, mayusculas.
 */
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//Aqui llama a un 'listener' para llama al evento de un boton
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", getData);
});

//Esta funcion se encarga de obtener los datos de email de input
function getData(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  let email = new User(formData);
  verifyUser(email);
}

function verifyUser(email) {
  let validEmail = isValidEmail(email.getCorreo());
  
  if (validEmail === true) {
    UserService.getUserByEmail(email).then(res => {
      if (res.data.data.length != 0) {
        notificarActualizar(email);
      } else {
        Swal.fire({
          title: "El usuario no existe",
          text: "Por favor, ingrese un correo de usuario existente",
          icon: "error"
        });
      }
    });
  }else {
    Swal.fire({
      title: "Correo Invalido",
      text: "Por favor, ingrese un correo con un formato valido",
      icon: "error"
    });
  }
}

/**
 * Funcion que se encarga de revisar que el email sea valido
 * utilizando una expresion regular. 
 * Se llama a la funcion test() que se encarga de comparar 
 * lo que tiene la expresion vs el correo.
 */

function isValidEmail(email) {
  return emailRegex.test(email);
}

//Funcion que se encargar de enviar el email por medio de un API
function notificarActualizar(email) {
  let pass = randomPassword();
  UserService.updatePassword(email, pass).then(res => {
    console.log(res.data.data);
  }).catch(err => {
    console.log(err);
  });
  console.log(email);
  Email.send(
    {
      Host: "smtp.elasticemail.com",
      Port: 2525,
      Username: "no.reply.agileware@gmail.com",
      Password: "98477A4DE4EE81736D72241EA64FA43F477B",
      To: `${email.getCorreo()}`,
      From: "no.reply.agileware@gmail.com",
      Subject: "Recuperacion de contraseña",
      Body: `${getHTML(pass)}`,
    }
  ).then((message) => {
    console.log(pass);
    Swal.fire({
      title: "Contraseña modificada con éxito",
      text: "Se le ha enviado un correo con su nueva contraseña",
      icon: "success"
    })
  }).catch((err) => {
    Swal.fire("Ha habido un error", "", "error");
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
