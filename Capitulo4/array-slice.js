const str = "The quick brown fox jumps over the lazy dog.";
console.log(str.length); // 44

// 1️. Si `indexEnd` es omitido: Extrae desde `indexStart` hasta el final de la cadena.
console.log(str.slice(11)); // rown fox jumps over the lazy dog.

// 2. Si indexStart >= str.length: Retorna una cadena vacía porque comienza en un índice fuera de rango.
console.log(str.slice(44)); // ""
console.log(str.slice(45)); // ""

// 3. Si ``indexStart`` es negativo: Cuenta desde el final de la cadena.
console.log(str.slice(-11)); // e lazy dog. (del 0 al 10 desde el final)

// 4. Si ``indexEnd`` es negativo: Se cuenta desde el final de la cadena, pero sin incluir ese índice.
console.log(str.slice(0, -3)); // The quick brown fox jumps over the lazy d

// 5. Si `indexEnd` es menor o igual a `indexStart` después de normalizar los negativos: Retorna una **cadena vacía**.
console.log(str.slice(5, 2)); //""
console.log(str.slice(-2, -5)); //""
