// Argumentos adicionales
function cuadrado(x) {
  return x * x;
}
console.log(cuadrado(4, true, "erizo"));
// → 16

function menos(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(menos(10)); //-> -10
console.log(menos(10, 5)); // -> 5

function potencia3(base, exponente = 2) {
  let resultado = 1;
  for (let contador = 0; contador < exponente; contador++) {
    resultado *= base;
  }
  return resultado;
}
console.log(potencia(4));
// → 16
console.log(potencia(2, 6));
// → 64
