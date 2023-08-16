'use strict'

export class postulacioneservice{
    static #URL = "http://localhost:3000";

    // Get postulaciones
    static findAll(){
        return axios.get(`${postulacioneservice.#URL}/postulaciones/`);
    };

    //Get one postulacion
    static findOne(idCode){
        return axios.get(postulacioneservice.#URL+"/postulaciones/" + idCode);   
    };

    //Filter postulacion
    static filter(titulo){
        return axios.post(postulacioneservice.#URL + "/postulaciones/filtro/", {seccionTitulo: titulo});
    }
    

    //Delete one postulacion
    static deleteOne(idCode){
        return axios.delete(postulacioneservice.#URL+"/postulaciones/" + idCode);
    }

    static updateOne(idCode, seccionTitulo, seccionRequerimientos, seccionDescripcion, estadopostulacion, visibilidad){
        return axios.put(`${postulacioneservice.#URL}/postulaciones/${idCode}`, {
            seccionTitulo: seccionTitulo,
            seccionRequerimientos: seccionRequerimientos,
            seccionDescripcion: seccionDescripcion,
            estadopostulacion: estadopostulacion,
            visibilidad: visibilidad
        });
    }

    static registrarpostulacion(nuevapostulacion){
        axios.post(postulacioneservice.#URL+"/postulaciones", {
            seccionTitulo: nuevapostulacion.getTitulo(),
            seccionRequerimientos: nuevapostulacion.getRequerimientos(),
            seccionDescripcion: nuevapostulacion.getDescripcion(),
            estadopostulacion: nuevapostulacion.getEstadopostulacion(),
        })
    };  
}