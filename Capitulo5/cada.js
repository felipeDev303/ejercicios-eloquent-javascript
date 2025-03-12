// Implementaciónd de every() usando some(): Si algún elemento no cumple la condición every devuelve false
function miEvery(array, predicado) {
  return !array.some((elemento) => !predicado(elemento));
}

// some devuelve true si algún elemento no cumple el predicado
// !some invierte el resultado:
//   - si some es true devuelve true: hay un falso en la prueba, every debe ser false
//   - si some es false (porque todos pasaron la prueba), entonces every es true

// Ejemplo de uso
console.log(miEvery([2, 4, 6], (num) => num % 2 === 0)); // true (some)
console.log(miEvery([2, 3, 6], (num) => num % 2 === 0)); // false

function myEvery(array, predicado) {
  for (let elemento of array) {
    // Recorrer el array con un for.
    if (!predicado(elemento)) {
      return false; // Si algún elemento no cumple con la condición (!predicado(elemento)), devolvemos false.
    }
  }
  return true; // Si el ciclo termina sin encontrar ninguno que falle, devolvemos true.
}

// Ejemplo de uso:
console.log(myEvery([2, 4, 6], (num) => num % 2 === 0)); // true
console.log(myEvery([2, 3, 6], (num) => num % 2 === 0)); // false
