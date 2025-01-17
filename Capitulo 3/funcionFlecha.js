// Función flecha
const potencia2 = (base, exponente) => {
  let resultado = 1;
  for (let contador = 0; contador < exponente; contador++) {
    resultado *= base;
  }
  return resultado;
};
