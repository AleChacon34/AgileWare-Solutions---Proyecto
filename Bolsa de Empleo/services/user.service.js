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

    //Filter usuario
    static filter(rol){
        return axios.post(UserService.#URL + "/users/filtro/", {rol: rol});
    }

    static updateUser(id, newUser) {
        return axios.put(
            `${UserService.#URI}/users/${id}`,
            {
                nombre: newUser.getNombre(),
                apellidos: newUser.getApellidos(),
                correo: newUser.getCorreo(),
                telefono: newUser.getTelefono(),
                genero: newUser.getGenero(),
                contrasenia: newUser.getContrasenia(),
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
}