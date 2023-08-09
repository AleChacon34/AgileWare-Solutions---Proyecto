'use strict';

export class User {
    // Atributos
    #nombre;
    #apellidos;
    #correo;
    #telefono;
    #genero;
    #contrasenia;
    #verifyContrasenia;

    //Constructor
    constructor(formData){
        this.setNombre(formData.get('nombre'));
        this.setApellidos(formData.get('apellidos'));
        this.setCorreo(formData.get('correo'));
        this.setTelefono(formData.get('telefono'));
        this.setGenero(formData.get('genero'));
        this.setContrasenia(formData.get('contrasenia'));
        this.setVerifyContrasenia(formData.get('verifyContrasenia'));
    }

    //Setters
    setNombre(pNombre){this.#nombre = pNombre};

    setApellidos(pApellidos){this.#apellidos = pApellidos};

    setCorreo(pCorreo){this.#correo = pCorreo};

    setTelefono(pTelefono){this.#telefono = pTelefono};

    setGenero(pGenero){this.#genero = pGenero};

    setContrasenia(pContrasenia){this.#contrasenia = pContrasenia};

    setVerifyContrasenia(pVerifyContrasenia){this.#verifyContrasenia = pVerifyContrasenia};

    //Getters

    getNombre(){return this.#nombre};

    getApellidos(){return this.#apellidos};

    getCorreo(){return this.#correo};

    getTelefono(){return this.#telefono};

    getGenero(){return this.#genero};

    getContrasenia(){return this.#contrasenia};

    getVerifyContrasenia(){return this.#verifyContrasenia};
}
