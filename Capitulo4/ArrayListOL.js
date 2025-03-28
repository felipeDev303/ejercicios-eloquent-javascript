// Función para crear un nodo
function crearNodo(value, next = null) {
  return {
    value: value,
    next: next,
  };
}

// Función para crear una lista vacía
function crearLista() {
  let head = null;

  return {
    agregar(value) {
      const nuevoNodo = crearNodo(value);

      if (head === null) {
        // Si la lista está vacía, el primer nodo será el nuevo nodo
        head = nuevoNodo;
      } else {
        let referencia = head;
        // Recorremos hasta el último nodo
        while (referencia.next !== null) {
          referencia = referencia.next;
        }
        // Conectamos el último nodo con el nuevo nodo
        referencia.next = nuevoNodo;
      }
    },
    imprimir() {
      let referencia = head;
      let resultado = [];
      // Recorremos la lista e imprimimos los valores
      while (referencia !== null) {
        resultado.push(referencia.value);
        referencia = referencia.next;
      }
      console.log(resultado.join(" -> "));
    },
  };
}

// Crear la lista y agregar nodos
let miLista = crearLista();
miLista.agregar(1);
miLista.agregar(2);
miLista.agregar(3);
miLista.imprimir(); // Output: 1 -> 2 -> 3
console.log(miLista);
