// ABSTRACCIÓN
function sumarRango(min, max) {
  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
}
console.log(sumarRango(1, 10));

let sumaEntreUnoYDiez = sumarRango(1, 10);
console.log(sumaEntreUnoYDiez);

// RETORNO DE FUNCIONES

// Función corta (una sola sentencia y un parámetro, el return es implicito y sin parentesis ni llaves)
const mayorQueDiez = (num) => num > 10;
console.log(mayorQueDiez(9));
console.log(mayorQueDiez(11));

// Esto es lo mismo
const menorQueCuatro = (num) => {
  return num < 4;
};
console.log(menorQueCuatro(3));
console.log(menorQueCuatro(5));

function mayorQue(x) {
  return (num) => num > x;
}

const mayorQueSeis = mayorQue(6);
console.log(mayorQueSeis(7));
console.log(mayorQueSeis(5));

const mayorQueVeinte = mayorQue(20);
console.log(mayorQueVeinte(19));
console.log(mayorQueSeis(21));
