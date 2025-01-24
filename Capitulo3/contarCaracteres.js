/*
Conteo de frijoles
Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[
N]. El valor devuelto será un string que contiene solo un carácter (por ejemplo,
"f"). El primer carácter tiene posición cero, lo que hace que el último se
encuentre en la posición string.length - 1. En otras palabras, un string de
dos caracteres tiene una longitud de 2, y sus carácteres tendrán las posiciones
0 y 1.
Escribe una función llamada contarCaracteres que se comporte
como contarFs, excepto que toma un segundo argumento que indica el carácter
que debe ser contado (en lugar de contar solo caracteres “F” en mayúscula).
Reescribe contarFs para que haga uso de esta nueva función.

*/
function contarCaracteres(string, letra) {
  // Función string que recibe como parámetro 2 string
  const largo = string.length; // declaramos y asignamos el largo del string
  //const letra = "F"; // Constante a evaluar
  let contador = 0; // Contador del buscador de caracteres
  for (let i = 0; i < largo; i++) {
    // Ciclo que recorre el string según su largo
    if (letra.includes(string[i])) {
      // Si la efe se incluye en suma el contador de F +1
      contador++;
    }
  }
  console.log(`El String "${string}" contiene ${contador} "${letra}"s`); // Efecto secundario de contar F
}
contarCaracteres("FELIPEFFFFFFFFFFFFFF", "E"); // Llamado a la función
