const elMayor = (a, b) => {
    return (a > b) ? a : b;
}

const tieneMenbresia = (miembro) =>{
    return (miembro) ? '2 Dolares' : '10 Dolores';
}

console.log(elMayor(10,2));
console.log(tieneMenbresia(true));


const nota = 85;
const grado =   nota >= 95 ? 'A+' :
                nota >= 85 ? 'A' :
                nota >= 80 ? 'B+' :
                nota >= 75 ? 'B' :
                nota >= 70 ? 'C+' : 'F'


console.log(grado);