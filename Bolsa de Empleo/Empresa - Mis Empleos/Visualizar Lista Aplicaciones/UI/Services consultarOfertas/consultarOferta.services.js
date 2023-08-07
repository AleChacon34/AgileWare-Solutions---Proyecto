'use strict'

export class OfertaService{
    static #URL = "http://127.0.0.1:3000";

    static findAll(){
        return axios.get(OfertaService.#URL+"/ofertas")
    };
}