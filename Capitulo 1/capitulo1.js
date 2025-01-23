// CAPÍTULO 1

// 0 / 0; // NaN
Infinity -
  Infinity // NaN
  `Debajo en el mar`; // Comillas invertidas
("Descansa en el océano"); // Comillas doble
("Flota en el océano"); //Comillas simples

"Esta es la primera linea\nY esta es la segunda"/*Cuando el carácter n es precedido por una barra invertida, este
se interpreta como un Newline (salto de linea).*/ `Esta es la primera linea 
Y esta es la segunda`;

('Un caracter de salto de linea es: "\\n"'); // “Un carácter de salto de linea es escrito así: "\n".”

"con" +
  "ca" +
  "te" +
  "nar" //"concatenar"
  `La mitad de 100 es ${100 / 2}`; // "La mitad de 100 es 50" ${esto se computa}

//Pagina 17: Operadores unarios
console.log(typeof 4.5); // → number
console.log(typeof "x"); // → string
// El - puede ser unario y binario
console.log(-(10 - 2)); // → -8

// Página 17: Valores booleanos
console.log(3 > 2); // → true
console.log(3 < 2); // → false
console.log("Aardvark" < "Zoroaster"); // → true

console.log("A" < "Z"); // -> True
console.log("a" < "Z"); // -> False

// Página 18: Igual a == y diferente a !=
console.log("Itchy" != "Scratchy"); // -> true
console.log("Manzana" == "Naranja"); // -> False
console.log(NaN == NaN); // -> False

// Página 18: Operadores lógicos
// El Operador and &&
console.log(true && false); //-> false
console.log(true && true); // -> true

// Página 19: Operadores lógicos
// El operador or ||
console.log(true || false); // -> true
console.log(false || false); // -> False

// Operador unario !
!true == false;

// Operador ternario
console.log(true ? 1 : 2); //-> 1
console.log(false ? 1 : 2); //-> 2

// Página 20: Conversión de tipo automática
console.log(8 * null); // -> 0
console.log("5" - 1); //-> 4
console.log("5" + 1); //->51
console.log("cinco" * 2); //->NaN
console.log(false == 0); //->true

// Página 21
console.log(null == undefined); //->true
console.log(null == 0); //-> false
