// const arr = new Array(10);
// const arr = [];

// console.log(arr);

let videoJuegos = ['Siperderman','Mario 3', 'Megaman'];

// console.log({videoJuegos});

// console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    videoJuegos,
    1+2,
    function (){},
    ()=>{},
    {},
    {a:1},
    ['x','Megaman','Zero','DR.Light',[
        'DR.Wlly',
        'DR.Woodman',
        ]
    ],
]

// console.log({arregloCosas});
console.log(arregloCosas[8][(arregloCosas[8].length)-2]);
console.log(arregloCosas[8].length);
console.log(arregloCosas[8][4][1]);

