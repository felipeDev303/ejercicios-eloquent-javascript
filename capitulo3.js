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

// SCOPE EN JS
let x = 10; // Alcance global
if (true) {
  let y = 20; // alcance local
  var z = 30; // alcance global
  console.log(x + y + z); //-> 60
}
console.log(x + z); //-> 40

// Excepción
const dividirEnDos = function (numero) {
  return numero / 2;
};
let numero = 10; // fuera del alcance de la función
console.log(dividirEnDos(100));
console.log(numero);

// Función flecha
const potencia2 = (base, exponente) => {
  let resultado = 1;
  for (let contador = 0; contador < exponente; contador++) {
    resultado *= base;
  }
  return resultado;
};
