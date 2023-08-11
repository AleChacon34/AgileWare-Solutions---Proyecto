'use strict'

export class OfertaService{
    static #URL = "http://localhost:3000";

    static findAll(){
        return axios.get(OfertaService.#URL+"/ofertas")
    };

    static findOne(idCode){
        return axios.get(OfertaService.#URL+"/ofertas/" + idCode);   
    };

    static updateOne(idCode, data){
        return axios.put(OfertaService.#URL+"/ofertas/" + idCode, {
            seccionTitulo: data.seccionTitulo,
            seccionRequerimientos: data.seccionRequerimientos,
            seccionDescripcion: data.seccionDescripcion,
            estadoOferta: data.estadoOferta,
        });
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
