// Algoritmo out-place: con For of y
function revertirArray() {
  let arrayReverse = [];
  for (let element of array) {
    arrayReverse.unshift(element);
  }
  return arrayReverse;
}

let array = [1, 2, 3, 4];
revertirArray(array);

console.log(array);
console.log(arrayReverse);

// Algoritmo in-place: con For y desestructuración.

function revertirArrayEnSuLugar() {
  for (let i = 0, j = array2.length - 1; i < j; i++, j--) {
    [array2[i], array2[j]] = [array2[j], array2[i]];
  }

  return array2;
}
let array2 = [1, 2, 3, 4, 5];
revertirArrayEnSuLugar(array2);

console.log(array2);
