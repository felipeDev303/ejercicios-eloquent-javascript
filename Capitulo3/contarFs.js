/*
Conteo de frijoles
Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[
N]. El valor devuelto será un string que contiene solo un carácter (por ejemplo,
"f"). El primer carácter tiene posición cero, lo que hace que el último se
encuentre en la posición string.length - 1. En otras palabras, un string de
dos caracteres tiene una longitud de 2, y sus carácteres tendrán las posiciones
0 y 1.
Escribe una función contarFs que tome un string como su único argumento
y devuelva un número que indica cuántos caracteres “F” en mayúsculas haya
en el string.

*/
function contarFs(string) {
  // Función string que recibe un string como parámetro
  const largo = string.length; // declaramos y asignamos el largo del string
  const letra = "F"; // Constante a evaluar
  let contador = 0; // Contador de EFES
  for (let i = 0; i < largo; i++) {
    // Ciclo que recorre el string según su largo
    if (letra.includes(string[i])) {
      // Si la efe se incluye en suma el contador de F +1
      contador++;
    }
  }
  console.log(`El String "${string}" contiene ${contador} F`); // Efecto secundario de contar F
}
contarFs("FELIPEFFFFFFFFFFFFFF"); // Llamado a la función
