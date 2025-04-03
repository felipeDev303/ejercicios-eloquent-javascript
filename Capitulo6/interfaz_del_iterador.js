// Definición de un iterador
let cadena = "OK";
for (let x of cadena) console.log(x);

let listita = [1, 2, 3];

let objeto = { a: 1, b: 2, c: 3 };

let okIterador = "OK"[Symbol.iterator]();
console.log(okIterador.next());
// -> {value: "0", done: false}
console.log(okIterador.next());
// -> {value: "K", done: false}
console.log(okIterador.next());
// -> {value: undefined, done: true}

// Estructura de lista enlazada
class List {
  // Constructor de la clase List: definición de la estructura con dos atributos
  // value: valor del nodo
  // rest: referencia al siguiente nodo (null si es el último nodo)
  constructor(value, rest) {
    this.value = value;
    this.rest = rest;
  }
  // Método estatico que convierte un array en una lista enlazada.
  static fromArray(array) {
    // Si el array está vacío, devuelve null (no hay nodos)
    let result = null;
    // Recorre el array desde el último nodo hasta el primero, creando nodos (al reves, de derecha a izquierda)
    // Se crea una nueva instancia de List con el valor actual y el nodo anterior como rest.
    for (let i = array.length - 1; i >= 0; i--) {
      result = new List(array[i], result);
    }
    return result;
  }
}

// Definición de un iterador para la clase List. Este iterador permite recorrer la lista enlazada.
// La clase ListIterator tiene un método next() que devuelve el siguiente nodo de la lista y actualiza la referencia al siguiente nodo.
// Si no hay más nodos, devuelve un objeto con done: true.
// La propiedad value del objeto devuelto contiene el valor del nodo actual.
// La propiedad done indica si se ha llegado al final de la lista (true) o no (false).
// La clase ListIterator es un iterador que permite recorrer la lista enlazada de forma secuencial.
class ListIterator {
  constructor(list) {
    this.list = list;
  }
  next() {
    if (this.list == null) {
      return { done: true };
    }
    let value = this.list.value;
    this.list = this.list.rest;
    return { value, done: false };
  }
}

// Definición del método Symbol.iterator para la clase List, que devuelve un iterador de la lista.
// Este método se llama cuando se usa el bucle for...of o el operador de propagación (...) en un objeto de la clase List.
List.prototype[Symbol.iterator] = function () {
  return new ListIterator(this);
};

let lista = List.fromArray([1, 2, 3]);

for (let x of lista) {
  console.log(x);
}
// -> 1
// -> 2
// -> 3

console.log([...lista]); // [1, 2, 3]

/* List {
  value: 1,
  rest: List { value: 2, rest: List { value: 3, rest: null } }
}
*/
