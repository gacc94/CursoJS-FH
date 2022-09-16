const regresaTrue = () => {
  console.log('Regresa True')
  return true
}

const regresaFalse = () => {
  console.log('Regresa False')
  return false
}

console.warn('Not o la negacion')
console.log(true)
console.log(!true) 

console.log(!regresaFalse());


console.warn('And');
console.log(true && true);
console.log(true && !false);



console.warn('=======')
console.log(regresaFalse() && regresaTrue());

console.warn('OR');
console.log(true || false);


// PRO TIP 

console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 12;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy Falso';
const a4 = soyFalso || soyNull || soyUndefined ||'Ya no soy Falso';
const a5 = soyFalso || soyNull || soyUndefined ||'Ya no soy Falso' || true;

console.log({a1})
console.log({a2})
console.log({a3})
console.log({a4})
console.log({a5})

if( true || true || false){
    console.log('Hacer algo');
}else{
    console.log('otra cosa');
}