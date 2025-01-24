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
