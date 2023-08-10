'use strict';

export class UserService {
    static #URI = 'http://localhost:3000';

    static getUsers() {
        return axios.get(
            `${UserService.#URI}/users`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    static getOneUser(id) {
        return axios.get(
            `${UserService.#URI}/users/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    static updateUser(id, newUser) {
        return axios.put(
            `${UserService.#URI}/users/${id}`,
            {
                nombre: newUser.nombre,
                apellidos: newUser.apellidos,
                correo: newUser.correo,
                telefono: newUser.telefono,
                genero: newUser.genero,
                contrasenia: newUser.contrasenia,
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }

    
}