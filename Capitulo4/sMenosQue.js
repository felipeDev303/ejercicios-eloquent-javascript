function repetir(n, accion) {
  for (let i = 0; i < n; i++) {
    accion(i);
  }
}

function aMenosQue(prueba, entonces) {
  if (!prueba) entonces();
}

repetir(3, (n) => {
  aMenosQue(n % 2 == 1, () => {
    console.log(n, "Es Par");
  });
});
