let ouch = "Ouch";
console.log(typeof ouch.toUpperCase); // -> function

console.log(ouch.toUpperCase()); // -> OUCH

let secuencia = [1, 2, 3];

// Agregar valores al final del array
secuencia.push(4, 5);
console.log(secuencia);

// Elimina el último valor y lo muestra
console.log(secuencia.pop());
console.log(secuencia);
