import '../css/componente.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

export  function saludar(nombre='sin nombre')  {

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!!!`;

    document.body.appendChild(h1);

    // const img = document.createElement('img');
    // img.src = webpacklogo;

    // document.body.appendChild(img);
}