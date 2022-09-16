class Persona {

    static proObjeto ( {nombre, apellido, pais} ){
        return new Persona (nombre , apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }

}

const   nombre1 = 'Melissa',
        apellido1 = 'Flores',
        pais1 = 'Peru'

const gus = {
    nombre: 'Gustavo',
    apellido: 'Caqui',
    pais: 'Peru'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.proObjeto( gus).apellido

persona1.getInfo(); 
console.log(persona2)
persona2.getInfo();