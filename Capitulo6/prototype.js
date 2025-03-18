// Ejemplo
let vacio = [];
console.log(vacio.toString); // [Function: toString]

console.log(Object.getPrototypeOf({}) == Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null
