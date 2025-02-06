function rango(inicio, final) {
  let listaDeNumeros = [inicio, ...resto, final];
  let resultado = inicio;
  for (let i = inicio; i < final; i++) {
    resultado++;
    listaDeNumeros.push(resultado);
  }
  return listaDeNumeros;
}
console.log(rango(2, 6));
console.log(listaDeNumeros);
