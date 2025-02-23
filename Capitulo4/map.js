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

console.log(products);
console.log(productsWhitDescount);
