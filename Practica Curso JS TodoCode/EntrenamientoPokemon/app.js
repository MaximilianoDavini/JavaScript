var nombresPokemon = ["Pikachu", "Bulbasur", "Charmander"]; // array vector unidemensional
var habilidadesPokemon = [ //array matriz multidimensional
    [
        "fuerza: 100",
        "agilidad: 80",
        "energia: 90",
        "vida: 100"
    ],
    [
        "fuerza: 80",
        "agilidad: 100",
        "energia: 70",
        "vida: 100"
    ],
    [
        "fuerza: 90",
        "agilidad: 95",
        "energia: 91",
        "vida: 92"
    ]
 ];

var habilidadesPokemon2 = [ //array matriz multidimensional
    [
        100,
        80,
        90,
        100
    ],
    [
        80,
        100,
        70,
        100
    ],
    [
        90,
        95,
        91,
        92
    ]
];

function promediosPokemon (habilidadesPokemon2) {
    let promediosAux = [];
    for (var i = 0; i < habilidadesPokemon2.length; i++) {
        let fila = habilidadesPokemon2[i];
        let suma = fila.reduce((total, habilidad) => total+habilidad,0);
        promediosAux[i] = suma / fila.length;
    }
    console.log(promediosAux);
};

// Muestra de pokemones mediante una funcion sin parametro

function recorridoPokemon (){
    for (var n = 0; n < nombresPokemon.length; n++) {
        console.log("Pokemon: " + nombresPokemon[n]);
        console.log("Habilidades: " + habilidadesPokemon[n]);
        promediosPokemon(habilidadesPokemon2);
    };
};

recorridoPokemon();

console.log("//////////////////////////////////////////");

// Muestra de pokemons mediante un for y una funcion con parametro

function Pokemones (indice) {
    console.log(nombresPokemon[indice]);
    console.log("Habilidades: " + habilidadesPokemon2[indice]);  
};

for (var i = 0; i < nombresPokemon.length; i++) {
    Pokemones(i);
};
