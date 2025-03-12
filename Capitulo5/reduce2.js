// REDUCE
const reducido = [1, 2, 3, 4, 5].reduce((acc, el) => acc + el, 0);
console.log(reducido);

const numeros = [1, 2, 3, 4, 5];

// 🧩 Relación entre reduce y desestructuración

// 🎯 Ejemplo: Extraer y sumar precios de productos según categoría
// Supongamos que tenemos esta lista de productos:
const productos = [
  { id: "12345", name: "Camiseta", price: 500, category: "ropa" },
  { id: "12346", name: "Zapatillas", price: 1500, category: "calzado" },
  { id: "23456", name: "Pantalon", price: 2000, category: "ropa" },
  { id: "67890", name: "Sandalias", price: 700, category: "calzado" },
];

// 🔹 Paso 1: Usamos reduce para agrupar productos por categoría
// Queremos sumar los precios de los productos por cada categoría ("ropa" y "calzado").
const productosPorCategoria = productos.reduce((acc, { category, price }) => {
  acc[category] = (acc[category] || 0) + price;
  return acc;
}, {});
// Salida esperada: { ropa: 2500, calzado: 2200 }

// ¿Cómo ayuda la desestructuración?: En lugar de escribir producto.category y producto.price,
// usamos { category, price }, lo que hace el código más limpio.

// 🔹 Paso 2: Usamos reduce otra vez para sumar todo
// Si queremos calcular el total de todos los productos, aplicamos un segundo reduce:
const totalPrecio = Object.values(productosPorCategoria).reduce(
  (sum, precio) => sum + precio,
  0
); // Salida esperada: 4700
// ¿Cómo ayuda Object.values?: Transforma { ropa: 2500, calzado: 2200 } en [2500, 2200] para facilitar la segunda reducción.

// Indexar con reduce
const mascotas = [
  { nombre: "Pelusa", edad: 12, tipo: "gato" },
  { nombre: "Puchini", edad: 12, tipo: "perro" },
  { nombre: "Pulga", edad: 10, tipo: "perro" },
  { nombre: "Chanchito Feliz", edad: 3, tipo: "perro" },
];

// Con desestructurar
const indexed = mascotas.reduce(
  (acc, el) => ({
    ...acc,
    [el.nombre]: el,
  }),
  {}
);

// Sin desestructuración
const indexed2 = mascotas.reduce((acc, el) => {
  acc[el.nombre] = el; // Asignamos directamente
  return acc;
}, {});

console.log(indexed["Pelusa"]);

// Otro ejemplo de indexación con reduce
const productos2 = [
  { id: "12345", name: "Camiseta", price: 500 },
  { id: "12346", name: "Zapatillas", price: 1500 },
  { id: "23456", name: "Pantalón", price: 2000 },
];

// Con el método find: O(n) por búsqueda - Pocas búsquedas en un array pequeño.
const buscarProducto = (id) =>
  productos2.find((producto) => producto.id === id);
console.log(buscarProducto("12346")); // { id: "12346", name: "Zapatillas", price: 1500 }

// Con el método reduce: O(n) al crear el índice, luego O(1) por búsqueda - Muchas búsquedas en un array grande.
const indexProductos = productos2.reduce((acc, producto) => {
  acc[producto.id] = producto;
  return acc;
}, {});

// Buscar en O(1)
const buscarProductoIndexado = (id) => indexProductos[id];

console.log(buscarProductoIndexado("12346")); // { id: "12346", name: "Zapatillas", price: 1500 }

// Ejemplo concatenar objetos para crear array plano
const anidado = [1, [2, 3], 4, [5]];

const plano = anidado.reduce((acc, el) => acc.concat(el), []);
console.log(plano);
