// Funciones declaradas

/*
function saludar() {
  console.log("Hola Mundo");
}
saludar();

function saludar(nombre, apellido) {
  console.log("Hola " + nombre + " " + apellido);
}

saludar("Felipe", "Morales");

// Funciones anonimas

const saludar = function (nombre) {
  console.log("Hola " + nombre);
};

saludar("Felipe");

// Funciones Flecha
const saludar = (nombre) => {
  console.log("Hola " + nombre);
};
saludar("Felipe");

// Si tenemos una sola sentencia se puede simplificar a:
const saludar = (nombre) => console.log("Hola " + nombre);

saludar("Felipe");

// Incluso si es de un solo parametro se puede simplicar aún más
const saludar = (nombre) => console.log("Hola " + nombre);

saludar("Felipe");
*/
// Funciones declaradas con return
function saludar(nombre) {
  return "Hola " + nombre;
}
console.log(saludar("Felipe"));

let saludoAFelipe = saludar("Felipe");
console.log(saludoAFelipe);

function suma(a, b) {
  return a + b;
}
console.log(suma(4, 7));

// Con flecha
const resta = (a, b) => {
  return a - b;
};
console.log(resta(4, 5));

// Función flecha comprimida, return implicito
console.log(multiplicacion(10, 10));
