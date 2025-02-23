const productos = [
  { id: "12345", name: "Camiseta", price: 500 },
  { id: "12347", name: "Calcetin", price: 100 },
  { id: "12346", name: "Zapatillas", price: 1500 },
  { id: "23456", name: "Pantalon", price: 2000 },
];

// Filtramos los productos que cuestan 1000 o menos:
function esBarato(producto) {
  return producto.price <= 1000;
}

// Extraemos solo los precios de los productos filtrados:
function obtenerPrecio(producto) {
  return producto.price;
}

// Sumamos los precios obtenidos para calcular el total:
function acumular(total, precio) {
  return total + precio;
}

// Ahora podemos combinar los tres métodos en una sola línea:

const precioTotalProductosBaratos = productos
  .filter(esBarato) // 🔍 Filtra los productos baratos
  .map(obtenerPrecio) // 🔄 Extrae solo los precios
  .reduce(acumular); // ➕ Suma los precios
