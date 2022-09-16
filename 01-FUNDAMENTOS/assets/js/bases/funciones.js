
function saludar(saludo) {
    // console.log(saludo);
    return [10, 2, 3];
}


// Funcion Anonima
const saludar2 = function (nombre) {
    console.log('Hola ', nombre);
    console.log(arguments.length);
}

// Funcion Flecha 
const saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre);
}



const retornoDeSaludar = saludar('Hola Gustavo')
// console.log(retornoDeSaludar)

// saludar2('Carlos', 123, true, {})
// saludarFlecha('Melisa')


function sumar(a, b) {
    return this;
}

const sumar2 = (a, b) => this;


function getAleatorio(){
    return Math.round(Math.random() *10)+1
}

const getAleatorio2 = () => Math.round(Math.random() * 10) + 1


console.log(getAleatorio());
console.log(getAleatorio2());
