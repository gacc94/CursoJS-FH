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

// console.log('Nombre: ' , personaje.nombre);
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje.edad);
console.log(personaje.coords);
console.log('Nro Trajes: ', personaje.trajes.length);
console.log('Ull Traje: ', personaje.trajes[(personaje.trajes.length - 1)]);


const x = 'vivo';
console.log('vivo: ', personaje[x]);
console.log(personaje['ultima-pelicula']);

delete personaje['ultima-pelicula'];
console.log(personaje);

personaje.casado = 'true';

const entriesPares = Object.entries(personaje);
console.log(entriesPares.length);

Object.freeze(personaje);

personaje.dinero = 100000;
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });