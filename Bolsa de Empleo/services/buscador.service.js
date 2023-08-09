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

    static getOneBuscador(id) {
        return axios.get(
            `${BuscadorService.#URI}/buscadores/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    static updateBuscador(id, updatedUser) {
        return axios.put(
            `${BuscadorService.#URI}/buscadores/${id}`,
            {
                nombreBuscador: updatedUser.nombreBuscador,
                apellidosBuscador: updatedUser.apellidosBuscador,
                correoBuscador: updatedUser.correoBuscador,
                telefonoBuscador: updatedUser.telefonoBuscador,
                generoBuscador: updatedUser.generoBuscador,
                contraseniaBuscador: updatedUser.contraseniaBuscador
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );
    }
}