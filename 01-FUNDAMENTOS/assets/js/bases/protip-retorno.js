// function crearPersona(nombre,apellido){
//     return{
//          nombre:nombre,
//          apellido:apellido,
//         nombre,
//         apellido,
//     }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido })


const persona = crearPersona('Gustavos', 'Caqui');
console.log(persona);


function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = (edad,...args ) =>{
    // console.log(edad,args);
    return args;
}

const [casado,vivo,nombre,apellido] = imprimeArgumentos2(10, true, false, 'Gustavos', 'Caqui');
console.log({casado, vivo, nombre, apellido});


const {apellido: nuevoApellido} = crearPersona('Gustavo', 'Caqui');
console.log({nuevoApellido});


const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.05,
        lng: -115.12,
    },
    trajes: ['Mark I', 'Mark J', 'Mark K', 'Mark L'],
    direccion: {
        zip: '12001,12219',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': this.AbortSignal,

};

const imprimePropiedades = (...personaje) =>{
    console.log(personaje);
}


const imprimePropiedades2 = ({nombre:nuevoNombre,codeName}) =>{
    console.log({nuevoNombre,codeName});
}

imprimePropiedades(personaje)
imprimePropiedades2(personaje)