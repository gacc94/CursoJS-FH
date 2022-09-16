class Rectangulo {

    #area = 0;

    constructor(base =0, altura =0){
        this.base = base;
        this.altura = altura;

        this.#area = this.base * this.altura;
    }

    #calcularArea(){
        const area = this.base*this.altura;
        return area;
    }

    llamarArea(){
        return this.#calcularArea();
    }
    
}

const rectangulo = new Rectangulo(2,67);
// rectangulo.#area = 100;
console.log(rectangulo);
console.log(rectangulo.llamarArea());