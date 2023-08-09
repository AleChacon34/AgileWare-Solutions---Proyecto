"use strict";

export class Oferta{
    // Atributos
    #seccionTitulo;
    #seccionRequerimientos;
    #seccionDescripcion;
    #estadoOferta

    //Constructor
    constructor(formData){
        this.setTitulo(formData.get("seccionTitulo"));
        this.setRequerimientos(formData.get("seccionRequerimientos"));
        this.setDescripcion(formData.get("seccionDescripcion"));
        this.setEstadoOferta(formData.get("estadoOferta"))
    }

    //Setters
    setTitulo(pTitulo){this.#seccionTitulo = pTitulo};

    setRequerimientos(pRequerimientos){this.#seccionRequerimientos = pRequerimientos};

    setDescripcion(pDescripcion){this.#seccionDescripcion = pDescripcion};

    setEstadoOferta(pEstadoOferta){this.#estadoOferta = pEstadoOferta};

    //Getters

    getTitulo(){return this.#seccionTitulo};

    getRequerimientos(){return this.#seccionRequerimientos};

    getDescripcion(){return this.#seccionDescripcion};

    getEstadoOferta(){return this.#estadoOferta};
}