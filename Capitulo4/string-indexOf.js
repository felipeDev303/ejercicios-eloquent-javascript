const str = "hello world hello";

console.log(str.length); // 17

// Busqueda simple
console.log(str.indexOf("o")); //4
console.log(str.indexOf("world")); //6
console.log(str.indexOf("x")); // -1

// Uso del parametro position
console.log(str.indexOf("o", 5)); // 7
console.log(str.indexOf("o", 99)); // -1 (fuera de rango)

// Sensible a mayúsculas y minúscuals
console.log(str.indexOf("h")); // 0
console.log(str.indexOf("H")); // -1

// Búsqueda de cadena vacía
console.log(str.indexOf("")); // 0
console.log(str.indexOf("", 5)); // 5
console.log(str.indexOf("", 18)); // 17 (length)

let count = 0;
let letra = str.indexOf("l");

while (letra !== -1) {
  count++;
  letra = str.indexOf("l", letra + 1);
}

console.log(count); // 5

console.log(str.indexOf("l") !== -1); //true
console.log(str.indexOf("x") !== -1); //false
