// Cierre
function envolverValor(n) {
  let local = n;
  return () => local;
}
let envolver1 = envolverValor(1);
let envolver2 = envolverValor(2);
console.log(envolver1()); // → 1
console.log(envolver2()); // → 2

function multiplicador(factor) {
  return (numero) => numero * factor;
}
let duplicar = multiplicador(2);
console.log(duplicar(5));
// → 10
