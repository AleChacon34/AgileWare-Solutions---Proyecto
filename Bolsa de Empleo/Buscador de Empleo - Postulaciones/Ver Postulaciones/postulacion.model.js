"use strict";

export class Postulacion{
    // Atributos
    #idOferta;
    #idPostulante;
    #estadoPostulacion

    //Constructor
    constructor(data){
        this.setIdOferta(data.idOferta);
        this.setIdPostulante(data.idPostulante);
        this.setEstadoPostulacion(data.estadoPostulacion)
    }

    //Setters
    setIdOferta(pIdOferta){this.#idOferta = pIdOferta};

    setIdPostulante(pIdPostulante){this.#idPostulante = pIdPostulante};

    setEstadoPostulacion(pEstado){this.#estadoPostulacion = pEstado};

    //Getters

    getIdOferta(){return this.#idOferta};

    getIdPostulante(){return this.#idPostulante};

    getEstadoPostulacion(){return this.#estadoPostulacion};
}