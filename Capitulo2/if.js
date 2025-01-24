// Flujo de control condicional (if)
let elNumero2 = Number(prompt("Elige un número")); // Pedimos un numero (prompt recibe string y se transforma a número con Number)
if (!Number.isNaN(elNumero2)) {
  console.log("Tu número es la raíz cuadrada de " + elNumero2 * elNumero2);
} // Si es número haz esto

// Ejemplo de bloque sin {} en una sola línea
if (1 + 1 == 2) console.log("Es verdad");
// → Es verdad
