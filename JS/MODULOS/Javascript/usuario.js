/**
 * USUARIO: Aqui se contiene la clase Usuario y se crean Usuarios.
 */

export class Usuario {
    static usuarios = [];// static = 
    constructor(nombre,correo){
        console.log("Nombre registrado: ", nombre);// Hize estos cambios por que me aparecia undifened en la terminal del navegador Edge.
        console.log("Correo registrado: ", correo);
        this.nombre = nombre;
        this.correo = correo;
    }// constructor
}// class usuario

