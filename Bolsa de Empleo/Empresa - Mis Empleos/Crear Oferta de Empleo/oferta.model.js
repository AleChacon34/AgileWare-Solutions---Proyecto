"use strict";

export class Oferta{
    // Atributos
    #seccionTitulo;
    #seccionRequerimientos;
    #seccionDescripcion;

    //Constructor
    constructor(formData){
        this.setTitulo(formData.get("seccionTitulo"));
        this.setRequerimientos(formData.get("seccionRequerimientos"));
        this.setDescripcion(formData.get("seccionDescripcion"));
    }

    //Setters
    setTitulo(pTitulo){
        this.#seccionTitulo = pTitulo;
    }

    setRequerimientos(pRequerimientos){
        this.#seccionRequerimientos = pRequerimientos;
    }

    setDescripcion(pDescripcion){
        this.#seccionDescripcion = pDescripcion;
    }

    //Getters

    getTitulo(){
        return this.#seccionTitulo;
    }

    getRequerimientos(){
        return this.#seccionRequerimientos;
    }

    getDescripcion(){
        return this.#seccionDescripcion;
    }
}