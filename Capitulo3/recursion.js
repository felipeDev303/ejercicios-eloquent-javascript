// Recursión
function potencia(base, exponente) {
  if (exponente == 0) {
    return 1;
  } else {
    return base * potencia(base, exponente - 1);
  }
}
console.log(potencia(2, 3)); // -> 8

// Acertijo: llegar a un objetivo desde 1 mediante 2 caminos (sumando +5 o multiplicando x3)
function encontrarSolucion(objetivo) {
  function encontrar(actual, historia) {
    if (actual == objetivo) {
      return historia;
    } else if (actual > objetivo) {
      return null;
    } else {
      return (
        encontrar(actual + 5, `(${historia}*5)`) ||
        encontrar(actual * 3, `(${historia}*3)`)
      );
    }
  }
  return encontrar(1, "1");
}

console.log(encontrarSolucion(24));
// -> (((1*3)+5)+3)
