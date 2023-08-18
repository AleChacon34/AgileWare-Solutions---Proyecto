"use strict";

export class Oferta{
    // Atributos
    #seccionTitulo;
    #seccionRequerimientos;
    #seccionDescripcion;
    #estadoOferta;
    #publicador;

    //Constructor
    constructor(formData){
        this.setTitulo(formData.get("seccionTitulo"));
        this.setRequerimientos(formData.get("seccionRequerimientos"));
        this.setDescripcion(formData.get("seccionDescripcion"));
        this.setEstadoOferta(formData.get("estadoOferta"));
        this.setPublicador(formData.get("nombreEmpresa"));
    }

    //Setters
    setTitulo(pTitulo){this.#seccionTitulo = pTitulo};

    setRequerimientos(pRequerimientos){this.#seccionRequerimientos = pRequerimientos};

    setDescripcion(pDescripcion){this.#seccionDescripcion = pDescripcion};

    setEstadoOferta(pEstadoOferta){this.#estadoOferta = pEstadoOferta};

    setPublicador(pPublicador){this.#publicador = pPublicador};

    //Getters

    getTitulo(){return this.#seccionTitulo};

    getRequerimientos(){return this.#seccionRequerimientos};

    getDescripcion(){return this.#seccionDescripcion};

    getEstadoOferta(){return this.#estadoOferta};

    getPublicador(){return this.#publicador};
}