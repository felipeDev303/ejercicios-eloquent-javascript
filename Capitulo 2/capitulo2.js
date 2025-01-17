// CAPÍTULO 2

// Expresión (fragmento de código que produce valor)
1;
!false;

// Declaración (oración completa antes de cada ;) un programa es una lista de declaraciones
5 * 5;

// Vinculación (o variable, para "atrapar" y mantener valores)
let atrapado = 5 * 5;

let diez = 10;
console.log(diez * diez); // → 100

let humor = "ligero";
console.log(humor); //-> ligero
humor = "oscuro";
console.log(humor); //-> oscuro

// Vinculación == Tentáculos
let deudaLuigui = 140;
deudaLuigui = deudaLuigui - 35;
console.log(deudaLuigui); //->105

let uno = 1,
  dos = 2;
console.log(uno + dos); // -> 3

// var (let<2015) y const (constante)
var nombre = "felipe";
const saludo = "hola ";
console.log(saludo + nombre);

// Valores de retorno
console.log(Math.min(2, 4)); //->2
console.log(Math.max(2, 4)); //->4

console.log(Math.max(2, 4) * 2); //->8

// Flujo de control líneal
let elNumero = Number(prompt("Elige un número"));
console.log("Tu número es la raíz cuadrada de " + elNumero * elNumero);

// Flujo de control condicional (if)
let elNumero2 = Number(prompt("Elige un número")); // Pedimos un numero (prompt recibe string y se transforma a número con Number)
if (!Number.isNaN(elNumero2)) {
  console.log("Tu número es la raíz cuadrada de " + elNumero2 * elNumero2);
} // Si es número haz esto

// if-else
let elNumero3 = Number(prompt("Elige un número"));
if (!Number.isNaN(elNumero3)) {
  console.log("Tu número es la raíz cuadrada de " + elNumero3 * elNumero3);
} else {
  console.log("Te pedí un número :)");
}

// Ejemplo de bloque sin {} en una sola línea
if (1 + 1 == 2) console.log("Es verdad");
// → Es verdad

// else-if
let numerito = Number(prompt("Elige un número"));
if (numerito < 10) {
  console.log("Número pequeño");
} else if (numerito < 100) {
  console.log("Número mediano");
} else {
  console.log("Número grande");
}

// while

let numeroWhile = 0;
while (numeroWhile <= 12) {
  console.log(numeroWhile);
  numeroWhile = numeroWhile + 2;
}

let contador = 0;
let resultado = 1;
while (contador < 10) {
  resultado = resultado * 2;
  contador = contador + 1;
}
console.log(resultado);

let tuNombre;
do {
  tuNombre = prompt("Dime tu nombre");
} while (!tuNombre);
console.log(tuNombre);

// CICLO FOR (números pares de 0 a 12)
for (let numeroFor = 0; numeroFor <= 12; numeroFor = numeroFor + 2) {
  console.log(numeroFor);
}

// CICLO FOR 2e10
let resultado2 = 1;
for (let contador = 0; contador < 10; contador = contador + 1) {
  resultado2 = resultado2 * 2;
}
console.log(resultado2);

// BREAK
for (let actual = 20; ; actual = actual + 1) {
  if (actual % 7 == 0) {
    console.log(actual);
    break;
  }
}

//SWITCH
switch (prompt("¿Cómo está el clima?")) {
  case "lluvioso":
    console.log("Usa paragüas");
    break;
  case "soleado":
    console.log("Usa bloqueador");
    break;
  case "nublado":
    console.log("Sal sin cuidado");
    break;
  default:
    console.log("clima desconocido");
    break;
}
