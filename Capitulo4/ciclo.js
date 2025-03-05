// Crea una función de orden superior llamada ciclo
// Que itere y que reciba una función, llama al cuerpo y llama actualizacioin

const numeros = [1, 2, 3, 4, 5];

//
function prueba(num) {
  console.log(`Evaluando: ${num}`);
  return num < 10; // Detener si devuelve false
}

for (let num of numeros) {
  if (!prueba(num)) {
    break; // Detiene el ciclo si retorna false
  }
  cuerpo(num);
}
