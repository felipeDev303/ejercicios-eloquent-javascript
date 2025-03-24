// Uso básico de Object.crate()
/*
const persona = {
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

const felipe = Object.create(persona);

console.log(felipe.saludar());


// Uso de clases
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
}

const felipe = new Persona("Felipe");
const fernando = new Persona("Fernando");
const eleonor = new Persona("Eleonor");


// que es lo mismo que con funciones constructoras y prototipos
function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludar = function () {
  console.log(`Hola, mi nombre es ${this.nombre}`);
};

const felipe = new Persona("Felipe");
const fernando = new Persona("Fernando");
const eleonor = new Persona("Eleonor");


const persona = {
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

const felipe = {}; // se le asigna el prototipo de Object
Object.setPrototypeOf(felipe, persona); // lo cambia a persona
// felipe.__proto__ = persona; // lo mismo pasa acá
// const felipe = {__proto__: persona}; // mejora la performance pero no deberiamos utilizarla 
*/

// Inicializar un objeto creado con Object.create()
// Por convención: creamos el método init en el prototipo como si fuera una función constructora
const persona = {
  init: function (nombre) {
    this.nombre = nombre;
    return this;
  },
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
    return this;
  },
};

//const felipe = Object.create(persona);

const felipe = Object.create(persona).init("Felipe").saludar();

//console.log(felipe.saludar());
