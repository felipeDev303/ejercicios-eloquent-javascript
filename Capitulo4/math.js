// floor: redondea hacia abajo (se multiplica por 10 porque el número random esta entre 0 y 1)
console.log(Math.floor(Math.random() * 10));

// ceil: redondea hacia arriba (se multiplica por 10 porque el número random esta entre 0 y 1)
console.log(Math.ceil(Math.random() * 10));

// round: redondea al entero más cercano (se multiplica por 10 porque el número random esta entre 0 y 1)
console.log(Math.round(Math.random() * 10));

// abs: valor absoluto (niega el negativo) (se multiplica por 10 porque el número random esta entre 0 y 1)
console.log(Math.abs(Math.random() * 10));

const IVA = 1.19;
const COMISION = 1.22;

const numeros = [1, 2, 6, 2, 20, 19, 45, 62, 99, 55, 33];

// min() => Retornar el número mínimo de un listado
console.log(Math.min(1, 2, 6, 2, 20, 19, 45, 62, 99, 55, 33));

// max() => Retornar el número máximo de un listado
console.log(Math.max(1, 2, 6, 2, 20, 19, 45, 62, 99, 55, 33));

// EJEMPLO

function generarNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const numeroRandom = generarNumero(100, 200);
console.log(numeroRandom);
