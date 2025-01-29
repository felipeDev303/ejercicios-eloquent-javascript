// Importa el array JOURNAL
const JOURNAL = require("./journal.js"); // Utiliza la función require para cargar los archivos de script.

// Importa las funciones
const { phi, tableFor, journalEvents } = require("./04_data.js");

for (let event of journalEvents(JOURNAL)) {
  // itera por cada evento único obtenido.
  let correlation = phi(tableFor(event, JOURNAL)); // crea la tabla de contingencia para el evento actual en el diario.
  // Y calcula la correlación phi utilizando la tabla generada.
  if (correlation > 0.1 || correlation < -0.1) {
    // Se imprime en la consola el evento y su correlación solo si el valor absoluto de la correlación es mayor a 0.1.
    console.log(event + ":", correlation);
  }
}

/* 
Flujo del Código

1. Carga de Datos: journal.js carga los datos del diario en la variable JOURNAL.

2. Iteración de Eventos: Se obtienen los eventos únicos del diario.

3. Cálculo de la Correlación: Para cada evento:

    - Se crea la tabla de contingencia con tableFor().

    - Se calcula el coeficiente de correlación phi con phi().

4. Impresión de Resultados: Se imprimen en la consola los eventos cuya correlación con la transformación a ardilla es mayor a 0.1 o menor a -0.1.
*/
