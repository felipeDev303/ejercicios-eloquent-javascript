// Class (>2015)
class Conejo {
  constructor(tipo) {
    this.tipo = tipo;
  }
  hablar(linea) {
    console.log(`El conejo ${this.tipo} dice '${linea}'`);
  }
}
let conejoAsesino = new Conejo("asesino");
let conejoNegro = new Conejo("negro");

//console.log(conejoAsesino);
//console.log(conejoNegro);

// Sobreescribir propiedades
Conejo.prototype.dientes = "pequeños";
console.log(conejoAsesino.dientes); // pequeños

conejoAsesino.dientes = "largos,filosos, y sangrientos";
console.log(conejoAsesino.dientes); // largos,filosos, y sangrientos

console.log(conejoNegro.dientes); //pequeños
console.log(Conejo.prototype.dientes); // pequeños

// Cambiar el comportamiento de un método toString
console.log(Array.prototype.toString == Object.prototype.toString); // false
console.log([1, 2, 3].toString()); // 1,2,3 (similar a join(","))

// Laa función no conoce de los arrays, por lo que no puede hacer nada con ellos
// y devuelve la palabra "Object" y el tipo de objeto entre corchetes
console.log(Object.prototype.toString.call([1, 2, 3])); // [object Array]

console.log([]);
/* 
Array []
​
length: 0
​
<prototype>: Array []
​​
at: function at()
​​
concat: function concat()
​​
constructor: function Array()
​​
copyWithin: function copyWithin()
​​
entries: function entries()
​​
every: function every()
​​
fill: function fill()
​​
filter: function filter()
​​
find: function find()
​​
findIndex: function findIndex()
​​
findLast: function findLast()
​​
findLastIndex: function findLastIndex()
​​
flat: function flat()
​​
flatMap: function flatMap()
​​
forEach: function forEach()
​​
includes: function includes()
​​
indexOf: function indexOf()
​​
join: function join()
​​
keys: function keys()
​​
lastIndexOf: function lastIndexOf()
​​
length: 0
​​
map: function map()
​​
pop: function pop()
​​
push: function push()
​​
reduce: function reduce()
​​
reduceRight: function reduceRight()
​​
reverse: function reverse()
​​
shift: function shift()
​​
slice: function slice()
​​
some: function some()
​​
sort: function sort()
​​
splice: function splice()
​​
toLocaleString: function toLocaleString()
​​
toReversed: function toReversed()
​​
toSorted: function toSorted()
​​
toSpliced: function toSpliced()
​​
toString: function toString()
​​
unshift: function unshift()
​​
values: function values()
​​
with: function with()
​​
Symbol(Symbol.iterator): function values()
​​
Symbol(Symbol.unscopables): Object { at: true, copyWithin: true, entries: true, … }
*/
console.log({});
/*
Object {  }
​
<prototype>: Object { … }
​​
__defineGetter__: function __defineGetter__()
​​
__defineSetter__: function __defineSetter__()
​​
__lookupGetter__: function __lookupGetter__()
​​
__lookupSetter__: function __lookupSetter__()
​​
__proto__: 
​​
constructor: function Object()
​​
hasOwnProperty: function hasOwnProperty()
​​
isPrototypeOf: function isPrototypeOf()
​​
propertyIsEnumerable: function propertyIsEnumerable()
​​
toLocaleString: function toLocaleString()
​​
toString: function toString()
​​
valueOf: function valueOf()
​​
<get __proto__()>: function __proto__()
​​
<set __proto__()>: function __proto__()
*/
console.log(typeof function () {}); // function
console.log(typeof new Date()); // object

console.log(Object.prototype.toString.call({})); // [object Object]
console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call(new Date())); // [object Date]
console.log(Object.prototype.toString.call(function () {})); // [object Function]
