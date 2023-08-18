'use strict';

export class LoginService {
    static #URI = "http://localhost:3000";

    static registerUser(newUser) {
        return axios.post(
            `${LoginService.#URI}/auth/register`,
            {
                nombre: newUser.getNombre(),
                apellidos: newUser.getApellidos(),
                correo: newUser.getCorreo(),
                telefono: newUser.getTelefono(),
                genero: newUser.getGenero(),
                rol: newUser.getRol(),
                pertenencia: newUser.getPertenencia(),
                contrasenia: newUser.getContrasenia()
            }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    static loginUser(user) {
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