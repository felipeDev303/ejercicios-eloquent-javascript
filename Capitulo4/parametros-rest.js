// En ES5
function miLista(a, b) {
  console.log("ARGUMENTS"); // ARGUMENTS
  console.log("a=" + a); // a=pera
  console.log("b=" + b); // b=manzana
  console.log("Resto de los parametros de la lista: ", arguments);
  /* Imprime un abjeto iterable no un array (pares clave valor)
    Resto de los parametros de la lista:  [Arguments] {
  '0': 'pera',
  '1': 'manzana',
  '2': 'naranja',
  '3': 'platano',
  '4': 'melon',
  '5': 'limón',
  '6': 'sandía'
}
  */
  console.log("Tamaño de la lista: " + arguments.length); //Tamaño de la lista7
  console.log(arguments[2]); //naranja
}
miLista("pera", "manzana", "naranja", "platano", "melon", "limón", "sandía");

// ES6
function miLista2(a, b, ...masElementos) {
  console.log("REST"); // REST
  console.log("a=" + a); // a=pera
  console.log("b=" + b); // b=manzana
  console.log("Resto de los parametros de la lista: ", masElementos);
  // Resto de los parametros de la lista:  [ 'naranja', 'platano', 'melon', 'limón', 'sandía' ] -> si es un array pero de los restantes

  console.log("Tamaño de la lista: " + masElementos.length); //Tamaño de la lista 5
  console.log(masElementos[2]); //melon
}
miLista2("pera", "manzana", "naranja", "platano", "melon", "limón", "sandía");
