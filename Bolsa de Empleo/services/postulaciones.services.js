'use strict'

export class postulacionService{
    static #URL = "http://localhost:3000";

    // Get postulaciones
    static findAll(){
        return axios.get(`${postulacionService.#URL}/postulaciones/`);
    };

    //Get one postulacion
    static findByIdPostulante(idPostulante){
        return axios.post(postulacionService.#URL+"/postulaciones/misPostulaciones/", {idPostulante: idPostulante});   
    };
    

    //Delete one postulacion
    static deleteOne(idCode){
        return axios.delete(postulacionService.#URL+"/postulaciones/" + idCode);
    }

    //Put postulacion
    static updateOne(idCode, seccionTitulo, seccionRequerimientos, seccionDescripcion, estadopostulacion, visibilidad){
        return axios.put(`${postulacionService.#URL}/postulaciones/${idCode}`, {
            estado: estado,
            visibilidad: visibilidad
        });
    }

    //Post postulacion
    static registrarPostulacion(nuevaPostulacion){
        axios.post(postulacionService.#URL + "/postulaciones", {
            idOferta: nuevaPostulacion.getIdOferta(),
            idPostulante: nuevaPostulacion.getIdPostulante(),
            estado: nuevaPostulacion.getEstadoPostulacion()
        })
    };  
}