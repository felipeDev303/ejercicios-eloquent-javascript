// Crea una función de orden superior llamada ciclo
// Que itere y que reciba una función, llama al cuerpo y llama actualizacioin

function ciclo(arr, prueba, actualizar, cuerpo) {
  while (arr.some(prueba)) {
    arr = arr.map(cuerpo).map(actualizar);
    console.log("Nuevo estado del array:", arr);
  }
  console.log("Proceso detenido con:", arr);
  return arr;
}

//Función de prueba: Detiene si algún valor es mayor o igual a 100
const prueba = (x) => x < 100;

// Función de transformación: Multiplica por 2
const cuerpo = (x) => x * 2;

// Función de actualización: Suma 5
const actualizar = (x) => x + 5;

// Array inicial
const numeros = [2, 4, 8];

ciclo(numeros, prueba, actualizar, cuerpo);
