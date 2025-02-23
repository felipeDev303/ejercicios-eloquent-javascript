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
