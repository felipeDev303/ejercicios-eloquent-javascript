// Comprueba si Todos los elementos de la matriz pasan la prueba implementada por la función proporcionada.
// Devuelve true, es como &&
function todosSonPositivos(array) {
  return array.every((x) => x >= 0);
}

const numeros = [1, -2, 50, 20, 29, 10, 13];
const numeros2 = [1, 0, 50, 20, 29, 10, 13];

console.log(todosSonPositivos(numeros));
console.log(todosSonPositivos(numeros2));
