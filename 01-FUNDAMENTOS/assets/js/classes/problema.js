const gus = {
    nombre: 'Gustavo',
    edad: 30,
    imprimir(){
        console.log(`Nombre ${this.nombre}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre ${this.nombre}`);
    },
}



function Persona(nombre,edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = ()=> {
        console.log(`Nombre ${this.nombre}`);
    }
    
}

const maria     = new Persona('Maria',12)
const melissa   = new Persona('Melissa',25)

maria.imprimir();
melissa.imprimir();