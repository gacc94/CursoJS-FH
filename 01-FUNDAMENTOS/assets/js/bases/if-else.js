let a = 2;

if (a >= 10) {
    console.log(a + ' es mayor o igual a 10');
} else {

    console.log(a + ' es menor a 10');
}


const hoy = new Date();
let dia = hoy.getDay();
console.log({ dia });

if (dia === 3) {
    console.log('Domingo');
} else if (dia === 1) {

}


// Ejercicio 1:



const dias = {
    0: 'Domingo',
    1: 'lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

const dias2 = [
    'Domingo',
    'lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
]

console.log(dias[1]);

