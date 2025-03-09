// OBJETOS

// const usuario1 = {
//   nombre: "Felipe",
//   edad: 36,
//   nacionalidad: "chilena",
// };

// const usuario2 = {
//   nombre: "Pablo",
//   edad: 50,
//   nacionalidad: "chilena",
// };

// console.log(usuario1.edad);

// CONSTRUCTOR

// const productos = {
//   nombre: "Cristal",
//   categoria: "Cerveza",
//   precio: 800,
// };

function Producto(nombre, categoria, precio) {
  this.nombre = nombre;
  this.categoria = categoria;
  this.precio = precio;
}

const producto1 = new Producto("Cristal", "Cerveza", 800);
console.log(producto1);
