'use strict'

export class OfertaService{
    static #URL = "http://localhost:3000";

    // Get ofertas
    static findAll(){
        return axios.get(`${OfertaService.#URL}/ofertas/`);
    };

    //Get one oferta
    static findOne(idCode){
        return axios.get(`${OfertaService.#URL}/ofertas/${idCode}`);   
    };

    //Filter oferta
    static filter(titulo){
        return axios.post(OfertaService.#URL + "/ofertas/filtro/", {seccionTitulo: titulo});
    }
    

    //Delete one oferta
    static deleteOne(idCode){
        return axios.delete(OfertaService.#URL+"/ofertas/" + idCode);
    }

    static updateOne(idCode, seccionTitulo, seccionRequerimientos, seccionDescripcion, estadoOferta, visibilidad){
        return axios.put(`${OfertaService.#URL}/ofertas/${idCode}`, {
            seccionTitulo: seccionTitulo,
            seccionRequerimientos: seccionRequerimientos,
            seccionDescripcion: seccionDescripcion,
            estadoOferta: estadoOferta,
            visibilidad: visibilidad
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
