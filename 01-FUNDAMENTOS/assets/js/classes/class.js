
class Persona {
    static _conteo = 0;
    static getConteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre)
        console.log('es un metodo estatico');
    }

    nombre = ''; 
    apellido;
    edad ;
    frase;
    comida;

    constructor(nombre,apellido,edad,frase) {
        this.edad = edad;
        this.nombre = nombre;
        this.apellido = apellido;
        this.frase = frase;

        Persona._conteo++;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    get getNombre() {
        return this.nombre;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}`)
    }

    miFrase(){
        this.quienSoy();
        console.log(`Esta es mi frase ${this.frase}`)
    }

}

const spiderman = new Persona();
const iroman = new Persona('Tony','Start',50);


// console.table({spiderman,iroman})
// spiderman.miFrase();

// spiderman.setNombre = 'Alejandro'
// console.log(spiderman.getNombre); 
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna)