let juegos = ['Zelda','Marop','Metroid','Chrono',123,{}];

console.log('Tamaño: ',juegos.length);

let primero = juegos[2-2]
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});

juegos.forEach((el,i,arr) =>{
    console.log({el,i,arr});
})

let nuevaLongitud;

nuevaLongitud = juegos.push('f-zero')
console.log({nuevaLongitud, juegos})


nuevaLongitud = juegos.unshift('Fire Emblem')
console.log({nuevaLongitud, juegos})


let juegoBorrado=  juegos.pop();
console.log({juegoBorrado, juegos})


let pos = 1;
let borrados = juegos.splice(pos,2);
console.log({borrados, juegos})

let metroidIndex = juegos.indexOf('metroid');
console.log({metroidIndex, juegos});