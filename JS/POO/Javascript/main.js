//Defini mi clase.
class Persona{

    //Propiedades de mi clase.
    id;
    nombre;
    email;
    carrito;

    constructor(id,nombre,email,carrito){
        this.id = id, this.nombre = nombre, this.email = email, this.carrito = carrito;
        //this es la clase en este caso Persona.id, Persona.nombre etc


    }//Constructor Persona

//Metodo:

    mostrarDatos(){
        console.log(`
        ID persona: ${this.id},
        Nombre completo: ${this.nombre},
        Correo electronico: ${this.email}
        Carrito: ${this.carrito}`);
        


    }//mostrarDatos.

    agregarProducto(producto){
        this.carrito.push(producto);


    }//agregarProducto.

     agregaProductos(productos){ //arreglo
     productos.forEach((productos) => this.carrito.push(productos));
        
            
        });

    
     }// agregarProductos.

}// Clase Persona

const manuel = new Persona(123,"Manuel Rodriguez","manuel@hotmail.com",[]);
const maria = new Persona(67,"Maria Sixseven", "mariaaura@hotmail.com", []);
console.log(manuel);


manuel.agregarProducto("Doritos");
manuel.agregarProducto("Cafe");

console.log(manuel);
// manuel.mostrarDatos();




