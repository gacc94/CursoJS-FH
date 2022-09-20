const heroes = {
    capi:{
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron :{
        nombre: 'Ironman',
        poder: 'Absurda cantodad de dinero'
    },
    spider :{
        nombre: 'Spiderman',
        poder: 'Trepar muros',
    } 
}


export const buscarHeroe = (id) =>{ 

    const heroe = heroes[id];

    const promesa = new Promise((resolve, reject) =>{

        if(heroe){
            setTimeout(() => resolve(heroe),200);
            
        }else{
            reject(`No existe un heroe con el id: ${id}`);
        }

    })

    return promesa;

};

export const buscarHeroeAsync = async(id) =>{ 

    const heroe = heroes[id];

    if(heroe){
        return heroe;
    }else{
        Promise.reject(`No existe un heroe con el id: ${id}`);
    }

};

const promesaLenta = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        return resolve('promesaLenta');
    },2000)
});
const promesMedia = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('promesaMedia');
    },1500)
});
const promesaRapida = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('promesaRapida');
    },1000)
});

export {
    promesaLenta,
    promesMedia,
    promesaRapida,
}