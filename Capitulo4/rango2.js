// Función rango recibe 2 parámetros el inicio y el final del array
function rango(inicio, final, paso = 1) {
  // array de todos los números
  let listaDeNumeros = [inicio];
  // Primer número del array
  let resultado = inicio;

  // Ciclo que itera rellenando el array desde el inicio al final
  if (paso < 0) {
    while (resultado >= final - paso) {
      resultado = resultado + paso;
      listaDeNumeros.push(resultado);
    }
  } else if (
    paso === 0 ||
    typeof paso !== "number" ||
    !Number.isInteger(paso)
  ) {
    throw new TypeError(
      "El argumento final debe ser un número entero distinto de cero"
    );
  } else {
    while (resultado + paso <= final) {
      resultado = resultado + paso;
      listaDeNumeros.push(resultado);
    }
  }

  console.log(listaDeNumeros);
  const SUMANUM = listaDeNumeros.reduce((acc, el) => acc + el, 0);
  console.log(SUMANUM);
}

rango(1, 10, 2); // [ 1, 3, 5, 7, 9 ] 25
rango(5, 2, -1); // [ 5, 4, 3, 2 ] 14
rango(1, 10); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ] 55
rango(1, 10, 0); // TypeError: El argumento final debe ser un número entero distinto de cero
