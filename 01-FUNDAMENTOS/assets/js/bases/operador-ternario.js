/*
* Dias de semana abrimos 11,
* pero los fines de semana abrimos a las 9

* Entra a un sitio web, para consultar si esta abierto hoy......
*/


const dia = 0;
const horaActual = 4;

let horaApertura;
let mensaje; //Esta bierto, cerrado, abrimos xxx
/*
* if ([0, 6].includes(dia)) {
*     console.log('Finde semana ');
*     horaApertura = 9;
* } else {
*     console.log('Dia de semana ');
*     horaApertura = 11;
* }
*/
/*
* if (horaActual >= horaApertura) {
*     mensaje = 'Esta abierto'
* } else {
*     mensaje = `Esta cerrado, hoy abrimos a las '${horaApertura}`
* }
*/
horaApertura = ([0, 6].includes(dia)) ? horaApertura = 9 : horaApertura = 11

mensaje = (horaActual >= horaApertura) 
? mensaje = 'Esta abierto' 
: mensaje = `Esta cerrado, hoy abrimos a las '${horaApertura}`


console.log({ horaApertura, mensaje });

