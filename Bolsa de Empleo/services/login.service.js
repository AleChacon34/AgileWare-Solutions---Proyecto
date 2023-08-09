'use strict';

export class LoginService {
    static #URI = "http://localhost:3000";

    static registerBuscador(newUser) {
        return axios.post(
            `${LoginService.#URI}/auth/register`,
            {
                nombre: newUser.nombre,
                apellidos: newUser.apellidos,
                correo: newUser.correo,
                telefono: newUser.telefono,
                genero: newUser.genero,
                contrasenia: newUser.contrasenia
            }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    static loginBuscador(user) {
        return axios.post(
            `${LoginService.#URI}/auth/login`,
            {
                correo: user.correo,
                contrasenia: user.contrasenia
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
}