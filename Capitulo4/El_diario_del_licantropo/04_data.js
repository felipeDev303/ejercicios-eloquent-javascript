/*
- Calcula el coeficiente de correlación phi.
- Toma un array table de 4 elementos (correspondientes a n00, n01, n10, n11 en el contexto del problema de la ardilla).
- Aplica la fórmula del coeficiente phi y devuelve el resultado.
Nota: Usa la notación de índice (table[0], table[1]...) para acceder a las celdas de la tabla, lo cual es funcional pero menos descriptivo que asignar nombres como n00, n01, etc.
*/
function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

/*
- Crea la tabla de contingencia para un evento específico.

- Toma un event (string) y un journal (array de entradas).

- Inicializa una table de 4 elementos con ceros.

- Itera por cada entrada en el journal.

- Por cada entrada, incrementa el contador correspondiente en la tabla según:

- Si el evento está presente en la entrada (events.includes(event)): Suma 1 al index.

- Si el hombre se convirtió en ardilla ese día (entry.squirrel): Suma 2 al index.

- Esto crea un index que va de 0 a 3, donde cada valor corresponde a una celda de la tabla (00, 01, 10, 11).

- Incrementa el valor de la tabla en el índice calculado.

- Devuelve la tabla resultante.
*/

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

/* 
- Extrae todos los eventos únicos del diario.

- Toma un journal (array de entradas).

- Inicializa un array vacío events.

- Itera por cada entrada del journal. (Ciclo para recorrer array en JS moderno)

- Itera por cada evento en la entrada.

- Si el evento NO está en el array events, lo agrega.

- Devuelve el array events con todos los eventos únicos.
*/
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

if (
  typeof module != "undefined" &&
  module.exports &&
  (typeof window == "undefined" || window.exports != exports)
)
  module.exports = { phi, tableFor, journalEvents };
if (typeof global != "undefined" && !global.phi) global.phi = phi;
if (typeof global != "undefined" && !global.tableFor)
  global.tableFor = tableFor;
if (typeof global != "undefined" && !global.journalEvents)
  global.journalEvents = journalEvents;
