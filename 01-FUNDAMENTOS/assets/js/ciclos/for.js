const heroes = ['Batman','Superman','Mujer Maravilla', 'Aquaman']

console.warn('For Tradicional')
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i])
}

console.warn('For in');
for (const key in heroes) {
    console.log(heroes[key]);
} 

console.warn('For of');
for (const hero of heroes) {
    console.log(hero);
}

