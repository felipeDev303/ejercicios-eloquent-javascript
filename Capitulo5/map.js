const products = [
  { id: "12345", name: "Camiseta", price: 500 },
  { id: "12346", name: "Zapatillas", price: 1500 },
  { id: "23456", name: "Pantalon", price: 2000 },
];

// Error 1: modificar el array original
// Error 2: no producir un return

/*
const productsWhitDescount = products.map(function (product) {
    if (product.price < 1000) return product;

    product.price = product.price * 0.9;
});*/

const productsWhitDescount = products.map(function (product) {
  if (product.price < 1000) return product;

  return {
    ...product,
    price: product.price * 0.9,
  };
});

// Versión larga
const nameProducts = products.map(function (product) {
  return product.name;
});

// Version arrow:
// reemplazar function por =>
// si es un parametro se borran los () de este
// y al haber solo una instrucción de retorno, la sacamos y dejamos el valor de retorno de manera implicita despues de la flecha
const priceProducts = products.map((product) => product.price);

//Versión Ultimate prime
// Al repetir la palabra product, se elimina
// Se desarma el parametro recibido, se vuelven a colocar los ()
// Obteniendo solo propiedad idicada del parametro que nos llegue y retornandola
const idProducts = products.map(({ id }) => id);

console.log(products);
console.log(productsWhitDescount);
