// CICLO FOR (números pares de 0 a 12)
for (let numeroFor = 0; numeroFor <= 12; numeroFor = numeroFor + 2) {
  console.log(numeroFor);
}

// CICLO FOR 2e10
let resultado2 = 1;
for (let contador = 0; contador < 10; contador = contador + 1) {
  resultado2 = resultado2 * 2;
}
console.log(resultado2);

// BREAK
for (let actual = 20; ; actual = actual + 1) {
  if (actual % 7 == 0) {
    console.log(actual);
    break;
  }
}
