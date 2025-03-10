/*
// DECLARAR ARRAY
const array = [];
const objeto = {};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const booleanos = [true, false, true, false, false, true];
const mix = [true, 1, "cervezas"];

const diario = [
  {
    eventos: ["estudio", "trabajo", "comer", "entrenar", "cafe"],
    developer: true,
  },
  {
    eventos: ["estudio", "leer", "paseo", "entrenar", "mate"],
    developer: true,
  },
  {
    eventos: ["treking", "fiesta", "lago", "cerveza"],
    developer: false,
  },
];
const productos = ["cerveza", "vino", "pisco", "bebida"];

// Recorrer un array con FOR y ARRAY LENGTH
for (let i = 0; i < productos.length; i++) {
  console.log(productos[i]);
}
// PUSH (agrega un elemento al final)
productos.push("gin");
console.log(productos);

// UNSHIFT (agrega un elemento al principio)
productos.unshift("tabaco");
console.log(productos);

// SHIFT (Borra el primero)
productos.shift();
console.log(productos);

// POP (Borra el último)
productos.pop();
console.log(productos);

// SPLICE: eliminar en cualquier posición
productos.splice(1, 2);
console.log(productos);

// JOIN: Generar un string con los elementos del array
console.log(productos.join(", "));
console.log(productos);

// CONCAT: unir dos array
const productos2 = ["vino", "pisco"];

const productosFinal = productos.concat(productos2);
console.log(productosFinal);
*/
// Slice (incluye el primero y no el segundo)
const productos = ["cerveza", "vino", "pisco", "bebida"];

const fermentados = productos.slice(0, 2);

console.log(fermentados);

// indexOf: devuelve el indice del elemento
console.log(productos.indexOf("cerveza"));

// include: conocer estado (devuelve un booleano)
console.log(productos.includes("ron"));
console.log(productos.includes("pisco"));

if (productos.includes("cerveza")) {
  console.log("Salud");
} else {
  console.log("Comprar pilsen");
}

if (productos.includes("gin")) {
  console.log("Salud");
} else {
  console.log("Comprar gin");
}

// reverse: invertir orden del array
productos.reverse();
console.log(productos);
