'use strict'

export class OfertaService{
    static #URL = "http://localhost:3000";

    static findAll(){
        return axios.get(OfertaService.#URL+"/ofertas")
    };

    static findOne(idCode){
        console.log(idCode)
        return axios.get(OfertaService.#URL+"/ofertas/", {params: {_id: idCode}})   
    }

    static registrarOferta(nuevaOferta){
        axios.post(OfertaService.#URL+"/ofertas", {
            seccionTitulo: nuevaOferta.getTitulo(),
            seccionRequerimientos: nuevaOferta.getRequerimientos(),
            seccionDescripcion: nuevaOferta.getDescripcion(),
            estadoOferta: nuevaOferta.getEstadoOferta(),
        })
    };  
}
