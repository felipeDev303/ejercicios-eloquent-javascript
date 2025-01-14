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

// Cierre
function envolverValor(n) {
  let local = n;
  return () => local;
}
let envolver1 = envolverValor(1);
let envolver2 = envolverValor(2);
console.log(envolver1()); // → 1
console.log(envolver2()); // → 2

function multiplicador(factor) {
  return (numero) => numero * factor;
}
let duplicar = multiplicador(2);
console.log(duplicar(5));
// → 10

// Recursión
function potencia(base, exponente) {
  if (exponente == 0) {
    return 1;
  } else {
    return base * potencia(base, exponente - 1);
  }
}
console.log(potencia(2, 3)); // -> 8
