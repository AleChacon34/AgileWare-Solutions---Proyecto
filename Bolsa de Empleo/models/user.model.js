'use strict';

export class User {
    // Atributos
    #nombre;
    #apellidos;
    #correo;
    #telefono;
    #genero;
    #rol
    #contrasenia;
    #verifyContrasenia;
    #foto;

    //Constructor
    constructor(formData){
        this.setNombre(formData.get('nombre'));
        this.setApellidos(formData.get('apellidos'));
        this.setCorreo(formData.get('correo'));
        this.setTelefono(formData.get('telefono'));
        this.setGenero(formData.get('genero'));
        this.setContrasenia(formData.get('contrasenia'));
        this.setVerifyContrasenia(formData.get('verifyContrasenia'));
        this.setFoto(formData.get('foto'));
    }

    //Setters
    setNombre(pNombre){this.#nombre = pNombre};

    setApellidos(pApellidos){this.#apellidos = pApellidos};

    setCorreo(pCorreo){this.#correo = pCorreo};

    setTelefono(pTelefono){this.#telefono = pTelefono};

    setGenero(pGenero){this.#genero = pGenero};

    setRol(pRol){this.#rol = pRol};

    setContrasenia(pContrasenia){this.#contrasenia = pContrasenia};

    setVerifyContrasenia(pVerifyContrasenia){this.#verifyContrasenia = pVerifyContrasenia};

    setFoto(pFoto){this.#foto = pFoto};

    //Getters

    getNombre(){return this.#nombre};

    getApellidos(){return this.#apellidos};

    getCorreo(){return this.#correo};

    getTelefono(){return this.#telefono};

    getGenero(){return this.#genero};

    getRol(){return this.#rol};

    getContrasenia(){return this.#contrasenia};

    getVerifyContrasenia(){return this.#verifyContrasenia};

    getFoto(){return this.#foto};
}
