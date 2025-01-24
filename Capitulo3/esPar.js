function esPar(n) {
  function recursiva(n) {
    if (n === 0) {
      return true;
    } else if (n === 1) {
      return false;
    } else if (n < 0) {
      return console.log("Solo se permiten enteros positivos");
    } else {
      return recursiva(n - 2);
    }
  }
  return recursiva(n);
}
console.log(esPar(50));
