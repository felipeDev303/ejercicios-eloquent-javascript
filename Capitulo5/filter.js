const productos = [
  { id: "12345", name: "Camiseta", price: 500 },
  { id: "12346", name: "Zapatillas", price: 1500 },
  { id: "23456", name: "Pantalon", price: 2000 },
];

// Opcion 1
/*
const productosBaratos = productos.filter(
  (producto) => productos.precio < 1000
);
*/

// Opción mejorada
const esBarato = (producto) => producto.precio < 1000;
const esCaro = (producto) => !esBarato(producto);

const productosBaratos = productos.filter(esBarato);
const productosCaros = productos.filter(esCaro);

// Eliminar los repetidos
const numeros = [1, 2, 3, 4, 3, 1];

const numerosUnicos = numeros.filter((numero, posicion, numeros) => {
  return posicion === numeros.indexOf(numero);
});

console.log(numerosUnicos);
