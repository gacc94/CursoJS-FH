let a= 10;
let b = a;
a=30;
console.log(b);

let juan = {
    nombre: 'Juan',
}
let ana = juan;
ana.nombre = 'Ana';
console.log(juan,ana)

const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

console.log(cambiaNombre(juan));



// Arreglo

const frutas = ['pera', 'manzana','piña']

console.time('slice')
const otrasFrutas = [...frutas]
console.timeEnd('slice')

console.time('slice2')
const otrasFrutas2 = [...frutas]
console.timeEnd('slice2')



otrasFrutas.push('Mango')
console.table({frutas,otrasFrutas});
