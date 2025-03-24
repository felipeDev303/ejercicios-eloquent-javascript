// 1. Clonar un objeto
const original = { nombre: "Ana", edad: 25 };
const clon = Object.assign({}, original);

console.log(original, clon); // { nombre: 'Ana', edad: 25 } { nombre: 'Ana', edad: 25 }
console.log(clon === original); // false (son objetos diferentes)

// 2. Fusionar varios objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

const resultado = Object.assign({}, obj1, obj2, obj3);

console.log(resultado); // { a: 1, b: 3, c: 5, d: 6 } // Se sobreescriben
