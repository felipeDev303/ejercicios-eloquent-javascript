function arrayList(initialValues = []) {
  // Función constructora Lista

  function Lista() {
    this.head = null;
  }

  // Función constructora Nodo

  function Nodo(value) {
    this.value = value;
    this.next = null;
  }
  // Método add (dentro de Lista.prototype)
  Lista.prototype.add = function (value) {
    let nuevoNodo = new Nodo(value); // Crea el nuevo nodo
    if (this.head === null) {
      this.head = nuevoNodo;
    } else {
      let referencia = this.head;
      while (referencia.next !== null) {
        referencia = referencia.next;
      }
      referencia.next = nuevoNodo;
    }
  };

  // Crear la instancia de Lista
  let list = new Lista();

  // Agregar los valores iniciales
  for (let value of initialValues) {
    list.add(value);
  }

  // Devolver la instancia de Lista
  return list;
}

let miArray = [1, 2, 3];
let miLista = arrayList(miArray);

console.log(miLista);
