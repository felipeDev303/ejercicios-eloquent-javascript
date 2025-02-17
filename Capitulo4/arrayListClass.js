class Nodo {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Lista {
  constructor() {
    this.head = null; // Primer nodo de la lista
  }

  // Método para agregar un nodo al final
  add(value) {
    let nuevoNodo = new Nodo(value); // Crea el nuevo nodo

    if (!this.head) {
      this.head = nuevoNodo;
    } else {
      let referencia = this.head;
      while (referencia.next) {
        referencia = referencia.next;
      }
      referencia.next = nuevoNodo;
    }
  }
}

// Función que crea la lista
function arrayList(initialValues = []) {
  // Crear la instancia de Lista
  let list = new Lista();
  // Agregar los valores iniciales
  for (let value of initialValues) {
    list.add(value);
  }
  // Devolver la instancia de Lista
  return list;
}

// funcion que crea un array a partir de la lista
function listAArray() {
  let referencia = miLista.head;
  let resultado = [];
  while (referencia) {
    resultado.push(referencia.value);
    referencia = referencia.next;
  }
  return resultado;
}

function preceder(element, miLista) {
  let referencia = miLista.head;
  let resultado = [element];
  while (referencia) {
    resultado.push(referencia.value);
    referencia = referencia.next;
  }
  return resultado;
}

let miArray = [2, 3, 4];

let miLista = arrayList(miArray);

let miArray2 = listAArray(miLista);

let newArray = preceder(1, miLista);

let newLista = arrayList(newArray);

console.log(miArray);
console.log(miLista);
console.log(miArray2);

console.log(newArray);
console.log(newLista);
