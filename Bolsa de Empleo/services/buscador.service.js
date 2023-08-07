'use strict';

export class BuscadorService {
    static #URI = "http://localhost:3000";

    static registerBuscador(newBuscador) {
        return axios.post(
            `${BuscadorService.#URI}/buscadores/register`,
            {
                nombreBuscador: newBuscador.nombreBuscador,
                apellidosBuscador: newBuscador.apellidosBuscador,
                correoBuscador: newBuscador.correoBuscador,
                telefonoBuscador: newBuscador.telefonoBuscador,
                generoBuscador: newBuscador.generoBuscador,
                contraseniaBuscador: newBuscador.contraseniaBuscador
            }, 
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    static loginBuscador(newBuscador) {
        return axios.post(
            `${BuscadorService.#URI}/buscadores/login`,
            {
                correoBuscador: newBuscador.correoBuscador,
                contraseniaBuscador: newBuscador.contraseniaBuscador
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
}