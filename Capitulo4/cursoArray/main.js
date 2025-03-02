/*
// PARTE 1: CONCEPTOS BÁSICOS

let beers = ["erdinger", "corona", "delirium"];
let wines = ["chardonnay", "merlot", "cabernet"];

// Mutable
beers.push("heineken"); // Agrega al final
beers.unshift("modelo"); // Agrega al inicio
beers.splice(2, 0, "bud"); // Insertar y reemplazar en un posición

let b = beers.pop(); // Elimina el último y lo devuelve
let b2 = beers.shift(); // Elimina el primero y lo devuelve
console.log(b); // heineken
console.log(b2); // modelo
console.log(beers.indexOf("corona")); //2 (-1 si no existe, busqueda es estricta)

//beers.fill("cervezas", 0, beers.length); // Rellena

// Inmutable
//const alcoholicDrinks = beers.concat(wines);
//alcoholicDrinks.push("carmenere");

//const onlyWines = alcoholicDrinks.slice(4, 8);

// Operador Spread
const numbers = [1, 2, 3, 4];
const numbers2 = [...numbers]; // Copia del array
numbers2[0] = 100;
numbers[1] = 200;

const arr = [...wines, ...beers]; // Similar a concat

function sum(a, b, c, d) {
  return a + b + c + d;
}

console.log(sum(1, 2, 3, 4)); // Ejemplo de uso función sum
console.log(sum(numbers[0], numbers[1], numbers[2], numbers[3])); // código poco práctico
console.log(sum(...numbers));
*/

// PARTE 2:

const beers = [
  {
    name: "Heineken",
    price: 1000,
    alcohol: 5,
  },
  {
    name: "Stella Artois",
    price: 1100,
    alcohol: 4.6,
  },
  {
    name: "Corona",
    price: 1300,
    alcohol: 4,
  },
  {
    name: "Budweiser",
    price: 1200,
    alcohol: 4.5,
  },
];

// Función de primer orden
let vienesa = function () {
  console.log("Vienesa");
};

// Arrow function
let mortadela = () => console.log("Mortadela");

let cecina = (tipo) => console.log("Mortadela " + tipo);

let vegano = () => {
  console.log("Palta");
  console.log("Tomate");
};

// Función de Orden Superior
function sandwich(f) {
  console.log("Pan");
  f("lisa");
  console.log("Pan");
}

sandwich(cecina);

showDom("array1", beers);
showDom("array2", numbers2);

function show(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log[i];
  }
}

function showDom(element, arr) {
  document.getElementById(element).innerHTML = "";

  // For
  /*for (let i = 0; i < arr.length; i++) {
    document.getElementById(
      element
    ).innerHTML += `<div>${arr[i].name} $${arr[i].price} (${arr[i].alcohol})<div>`;
  }*/
  for (let e of arr) {
    document.getElementById(
      element
    ).innerHTML += `<div>${e.name} $${e.price} (${e.alcohol})<div>`;
  }
}
