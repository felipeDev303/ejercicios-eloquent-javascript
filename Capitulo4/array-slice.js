const str = "The quick brown fox jumps over the lazy dog.";
console.log(str.length); // 44

// 1️. Si `indexEnd` es omitido: Extrae desde `indexStart` hasta el final de la cadena.
console.log(str.slice(11)); // rown fox jumps over the lazy dog.

// 2. Si indexStart >= str.length: Retorna una cadena vacía porque comienza en un índice fuera de rango.
