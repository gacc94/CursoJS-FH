class Singleton {

    static instancia; 
    nombre ='';

    constructor( nombre = '' ) {

        if(!!Singleton.instancia) {
            return Singleton.instancia 
        }
        this.nombre = nombre;
        Singleton.instancia = this;

        return this;
    }

}

const instacia1 = new Singleton('Iroman');
const instacia2 = new Singleton('Spiderman');

console.log(`Nombre de la instacia 1 es: ${instacia1.nombre}`)
console.log(`Nombre de la instacia 1 es: ${instacia2.nombre}`)