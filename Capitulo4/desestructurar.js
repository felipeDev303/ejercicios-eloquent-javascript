//DESESTRUCTURAR

// Desestructuración de Arreglos

// Ejemplo básico:

const numeros = [10, 20, 30];
const [a, b, c] = numeros;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// Omitir valores:

const [x, , z] = [1, 2, 3];
console.log(x, z); // 1 3

// Rest operator (...):

const [primero, ...resto] = [5, 10, 15, 20];
console.log(primero); // 5
console.log(...resto); // 10 15 20

// Desestructuración de Objetos

// Ejemplo básico:

const PERSONA = { nombre: "Ana", edad: 37 };
const { nombre, edad } = PERSONA;

console.log(nombre); // Ana
console.log(edad); // 37

// Asignar nombres diferentes:

const { nombre: userName, edad: userAge } = PERSONA;
console.log(userName);
console.log(userAge);

// Valores por defecto:

const { apellido = "No especificado" } = PERSONA;
console.log(apellido); // No especificado

// Desestructuración en funciones:

function mostrarInfo({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

mostrarInfo({ nombre: "Juan", edad: 30 }); // Nombre: Juan, Edad: 30

// Combinando ambas

const usuario = {
  id: 1,
  info: {
    nombre2: "Carlos",
    edad2: 55,
  },
};

const {
  info: { nombre2, edad2 },
} = usuario;
console.log(nombre2, edad2); // Carlos 55
