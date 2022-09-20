import { buscarHeroes } from './js/callback';
import { buscarHeroe as buscarHeroePromesa } from './js/promesas';
import './styles.css';

const heroeId1 = 'cap';
const heroeId2 = 'spider';

// buscarHeroes( heroeId , (err, heroe1 ) =>{
//     if (err) {
//         console.error(err)
//     }else {
//         buscarHeroes(heroeId2, (err, heroe2) =>{
//             if (err) {
//                 console.error(err)
//             }else {
//                 console.warn(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//             }
//         });
//     }
// } );

// buscarHeroePromesa( heroeId1 )
// .then((res)=>{
//     console.log(res);
//     buscarHeroePromesa( heroeId2)
//     .then((res)=>{
//         console.log(res);

//     })

// })
// .catch((err)=>{
//     console.log(err);
// });

Promise.all([
    buscarHeroePromesa(heroeId1),
    buscarHeroePromesa(heroeId2)
])
.then(([heroe1,heroe2])=>{
    console.log(heroe1);
    console.log(heroe2);
    return ;
})
.catch((err)=>{
    console.error(err);
});




console.log('Fin del Programa');  