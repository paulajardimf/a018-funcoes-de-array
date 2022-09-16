// # Exercício 2
// Crie um array de números que contenha 8 números.

const arrayDeNumeros = [52, 32, 47, 15, 26, 85, 98, 22]

// Depois disso, utilize este array para criar duas funcões de array `map()`:
// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;

const triplos = arrayDeNumeros.map((num, indice, array) => {
    return num * 3
})

console.log(triplos);

// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

const metades = arrayDeNumeros.map((num, indice, array) =>{
    return num / 2
})

console.log(metades);
