// Crea una función de orden superior llamada ciclo
// Que itere y que reciba una función, llama al cuerpo y llama actualizacioin

function ciclo (arr, prueba, )

//
function prueba(num) {
  console.log(`Evaluacion 1: ${num}`);
  return num < 10; // Detener si devuelve false
}

function cuerpo(num) {
  console.log(`Evaluación 2: ${num}`);
  return num * 2; // multiplicar por 2 el número
}

for (let num of numeros) {
  if (!prueba(num)) {
    break; // Detiene el ciclo si retorna false
  }
  cuerpo(num);
}

const numeros = [1, 2, 3, 4, 5, 11];