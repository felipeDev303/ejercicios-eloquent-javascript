// Función rango recibe 2 parámetros el inicio y el final del array
function rango(inicio, final) {
  // array de todos los números
  let listaDeNumeros = [inicio];
  // Primer número del array
  let resultado = inicio;

  // Ciclo que itera rellenando el array desde el inicio al final
  while (resultado < final) {
    resultado++;
    listaDeNumeros.push(resultado);
    //listaDeNumeros.sort();
  }
  console.log(listaDeNumeros);
}
rango(2, 50);
