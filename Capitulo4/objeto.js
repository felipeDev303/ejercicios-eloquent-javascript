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

// function Producto(nombre, categoria, precio) {
//   this.nombre = nombre;
//   this.categoria = categoria;
//   this.precio = precio;
// }

// const producto1 = new Producto("Cristal", "Cerveza", 800);
// console.log(producto1);

// CLASES
/*
class Producto {
  constructor(nombre, categoria, precio) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
  }
}
// Crear producto1 con constructor
const producto1 = new Producto("Cristal", "Cerveza", 800);
// Crear producto2 sin constructor
const producto2 = { nombre: "Cristal", categoria: "Cerveza", precio: 800 };
console.log(producto1);


// MÉTODOS
class Persona {
  constructor(nombre, edad, nacionalidad) {
    this.nombre = nombre;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
    this.saludar = function () {
      console.log("Hola soy " + this.nombre);
    };
    this.cumpleanios = function () {
      this.edad++;
    };
  }
}
// Crear producto1 con constructor
const persona1 = new Persona("Felipe", 36, "chilena");

persona1.saludar();
persona1.cumpleanios();
console.log(persona1.edad);

// OPERADOR IN
if ("nombre" in persona1) {
  console.log(persona1.nombre);
} else {
  console.log("No hay nombre");
}

if ("hobbies" in persona1) {
  console.log(persona1.hobbies);
} else {
  console.log("No hay hobbies");
}


// OPERADOR FOR...IN
for (const propiedad in persona1) {
  console.log(propiedad);
}
*/

// PROPIEDADES Y MÉTODOS CON VARIABLES EXTERNAS
const IVA = 1.19;

function precioNeto() {
  console.log(this.precio * IVA);
}

const producto1 = {
  nombre: "Cristal",
  precio: 800,
  categoria: "Cerveza",
  impuesto: IVA,
  precioNeto,
};
producto1.precioNeto();
