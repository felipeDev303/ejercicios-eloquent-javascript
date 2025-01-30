// Toma un array y un índice, y retorna un nuevo array que es una copia del array original pero sin el elemento del índice dado

function remover(array, indice) {
  return array.slice(0, indice).concat(array.slice(indice + 1));
}
console.log(remover(["a", "b", "c", "d", "e"], 2));

// [ 'a', 'b', 'd', 'e' ]
