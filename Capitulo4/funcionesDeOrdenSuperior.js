// ABSTRACCIÓN
function sumarRango(min, max) {
  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
}
console.log(sumarRango(1, 10));

let sumaEntreUnoYDiez = sumarRango(1, 10);
console.log(sumaEntreUnoYDiez);

// RETORNO DE FUNCIONES

// Función corta (una sola sentencia y un parámetro, el return es implicito y sin parentesis ni llaves)
const mayorQueDiez = (num) => num > 10;
console.log(mayorQueDiez(9));
console.log(mayorQueDiez(11));

// Esto es lo mismo
const menorQueCuatro = (num) => {
  return num < 4;
};
console.log(menorQueCuatro(3));
console.log(menorQueCuatro(5));

function mayorQue(x) {
  return (num) => num > x;
}

const mayorQueSeis = mayorQue(6);
console.log(mayorQueSeis(7));
console.log(mayorQueSeis(5));

const mayorQueVeinte = mayorQue(20);
console.log(mayorQueVeinte(19));
console.log(mayorQueSeis(21));

/****************************************/
/*********MÉTODOS DE BÚSQUEDA************/
/**********Y TRANSFORMACIÓN**************/
/****************************************/

const numeros = [10, 45, 65, 32, 76, 99];
const animales = ["Perro", "Gato", "Vaca", "Tortuga"];
const productos = [
  { nombre: "Cristal", categoria: "cerveza", precio: 800 },
  { nombre: "Heineken", categoria: "cerveza", precio: 1000 },
  { nombre: "Mistral", categoria: "pisco", precio: 7100 },
  { nombre: "Alto del Carmen", categoria: "pisco", precio: 6900 },
  { nombre: "Ramazzotti", categoria: "aperitivo", precio: 13000 },
];
/*
// forEach() => Recorrer el array y ejecutar lo que digamos con cada elemento
productos.forEach((producto) => {
  console.log(producto.nombre);
});

// find() => Recorrer el array y retornar el primer elemento que cumpla con una condición

const tortuga = animales.find((animal) => {
  return animal === "Tortuga";
});
console.log(tortuga);

let productoElegido = prompt("Ingrese el producto que quiere comprar");

console.log(productos.find((producto) => producto.nombre === productoElegido));
*/
// filter() => Recorrer el array y retornar uno nuevo con todos los elementos que cumplan con esa condición

const productosBaratos = productos.filter(
  (producto) => producto.precio <= 1000
);
console.log(productosBaratos);

const productosCaros = productos.filter((producto) => producto.precio > 1000);
console.log(productosCaros);
