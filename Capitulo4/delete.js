let unObjeto = {
  izquierda: 1,
  derecha: 2,
};
console.log(unObjeto.izquierda);
// -> 1
delete unObjeto.izquierda;
console.log(unObjeto.izquierda);
// -> undefined
console.log("izquierda" in unObjeto);
// -> false
console.log("derecha" in unObjeto);
// -> true
