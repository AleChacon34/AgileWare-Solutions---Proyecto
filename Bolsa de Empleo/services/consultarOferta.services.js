'use strict'

export class OfertaService{
    static #URL = "http://localhost:3000";

    static findAll(){
        return axios.get(OfertaService.#URL+"/ofertas")
    };
}