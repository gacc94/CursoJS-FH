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


export const buscarHeroes = (id,callback) =>{ 

    const heroe = heroes[id];

    if( heroe) {
        callback(null,heroe);

    }else {
        callback(`No existe un heroe con el id: ${id}`);
    }

    // callback( heroe );

}
