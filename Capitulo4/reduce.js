const numeros = [3, 10, 20, 50];

// IMPERATIVO
let total = 0;
for (let numero of numeros) {
  total += numero;
}

// FUNCIONAL
// Primer parametro: funcion reductora (que actualiza el acumulador)
// La funcion reductora recibe: el acumulador, el valor actual, la pósicion y el array (opcionales)
// Valor inicial del acumulador

// Versión larga
/*
let acumulado = numeros.reduce((acumulador, numero) => {
    return acumulador + numero
}, 0);
*/

// Versión corta
//let acumulado = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

//Versión Prime: reciclando acumular y utilizando el valor inicial por defecto (no sirve si el array está vacío)
const acumular = (acumulador, numero) => acumulador + numero;
let final = numeros.length > 0 ? numeros.reduce(acumular) : 0; // solo se ejecuta si el array tiene elementos

// Utilizando REDUCE como map o filter

// Versión sin función pura
/*
const numeritos = [71, 41, 19, 88, 3, 65];

const acumularDobles = (acumulador, numero) => {
  acumulador.push(numero * 2);
  return acumulador;
};

const dobles = numeritos.reduce(acumularDobles, []);
*/

// Versión sin push (push modifica el array original)
// retornamos una copia del array, agregando al final el nuevo valor calculado
/*
const numeritos = [71, 41, 19, 88, 3, 65];

const acumularDobles = (acumulador, numero) => {
  return [...acumulador, numero * 2];
};

const dobles = numeritos.reduce(acumularDobles, []);
*/

// Versión Prime
// Porque solo se devuelve un nuevo valor
const numeritos = [71, 41, 19, 88, 3, 65];

const acumularDobles = (acumulador, numero) => [...acumulador, numero * 2];

const dobles = numeritos.reduce(acumularDobles, []);
