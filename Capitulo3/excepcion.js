// Excepción
const dividirEnDos = function (numero) {
  return numero / 2;
};
let numero = 10; // fuera del alcance de la función
console.log(dividirEnDos(100));
console.log(numero);
