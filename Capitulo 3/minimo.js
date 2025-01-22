// Función min con valor de retorno
function min(x, y) {
  return Math.min(x, y);
}
console.log(min(2, 1));

// Función min() como valor
let min = function (x, y) {
  return Math.min(x, y);
};
console.log(min(3, 8));

// Función min versión flecha
let min = (x, y) => {
  return Math.min(x, y);
};
console.log(min(2, 1));
