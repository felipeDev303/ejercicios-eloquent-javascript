// while

let numeroWhile = 0;
while (numeroWhile <= 12) {
  console.log(numeroWhile);
  numeroWhile = numeroWhile + 2;
}

let contador = 0;
let resultado = 1;
while (contador < 10) {
  resultado = resultado * 2;
  contador = contador + 1;
}
console.log(resultado);

let tuNombre;
do {
  tuNombre = prompt("Dime tu nombre");
} while (!tuNombre);
console.log(tuNombre);
