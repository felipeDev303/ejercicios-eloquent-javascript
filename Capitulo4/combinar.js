const products = [
  { id: "12345", name: "Camiseta", price: 500 },
  { id: "12346", name: "Zapatillas", price: 1500 },
  { id: "23456", name: "Pantalon", price: 2000 },
];

// Comprar los productos baratos, calcular monto

const precioTotalProductosBaratos = productos
  .filter(esBarato)
  .map(obtenerPrecio)
  .reduce(acumular);
