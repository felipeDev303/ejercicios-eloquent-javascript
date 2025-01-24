// DEFINIENDO UNA FUNCIÓN

// Ejemplo función cuadrado
const cuadrado = function (x) {
  return x * x;
};
console.log(cuadrado(12));
// → 144

// Ejempllo función sin parámetros
const hacerSonido = function () {
  console.log("Pling!");
};
hacerSonido();

// Función de una potencia
const potencia = function (base, exponente) {
  let resultado = 1;
  for (let cuenta = 0; cuenta < exponente; cuenta++) {
    resultado *= base;
  }
  return resultado;
};
console.log(potencia(2, 2));
