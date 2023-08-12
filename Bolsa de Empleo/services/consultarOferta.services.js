'use strict'

export class OfertaService{
    static #URL = "http://localhost:3000";

    static findAll(){
        return axios.get(OfertaService.#URL+"/ofertas")
    };

    static findOne(idCode){
        return axios.get(OfertaService.#URL+"/ofertas/" + idCode);   
    };

    static updateOne(idCode, seccionTitulo, seccionRequerimientos, seccionDescripcion, estadoOferta){
        return axios.put(`${OfertaService.#URL}/ofertas/${idCode}`, {
            seccionTitulo: seccionTitulo,
            seccionRequerimientos: seccionRequerimientos,
            seccionDescripcion: seccionDescripcion,
            estadoOferta: estadoOferta,
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
