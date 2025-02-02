const elements = ["Fire", "Air", "Water"];

console.log(elements.join()); // Fire,Air,Water
console.log(elements.join("")); // FireAirWater
console.log(elements.join(" ")); // Fire Air Water

let oracion = "Los pajaros secretarios se especializan en pisotear";
let palabras = oracion.split(" ");
console.log(palabras);
/*
[
  'Los',
  'pajaros',
  'secretarios',
  'se',
  'especializan',
  'en',
  'pisotear'
]
*/
console.log(palabras.join(" ")); // Los pajaros secretarios se especializan en pisotear
