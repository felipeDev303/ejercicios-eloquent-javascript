// Función rango recibe 2 parámetros el inicio y el final del array
function rango(inicio, final, paso) {
  // array de todos los números
  let listaDeNumeros = [];
  // Primer número del array
  let resultado = inicio;

  // Ciclo que itera rellenando el array desde el inicio al final
  while (resultado !== final) {
    if (paso === 0 || null) {
      resultado++;
      return listaDeNumeros.push(resultado);
    } else if (paso < 0) {
      resultado = resultado - paso;
      return listaDeNumeros.push(resultado);
    } else if (paso > 0) {
      resultado = resultado + paso;
      return listaDeNumeros.push(resultado);
    } else resultado === final;

    return listaDeNumeros;
  }

  console.log(listaDeNumeros);

  const SUMANUM = listaDeNumeros.reduce((acc, el) => acc + el, 0);

  console.log(SUMANUM);
}

rango(1, 10, 2);
